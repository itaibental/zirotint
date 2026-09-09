/* Optional Firebase cloud sync for teacher dashboard submissions.
   Works fully offline/local if no Firebase config is provided via the "Cloud" modal. */

let db = null;
let auth = null;
let currentUser = null;
let firebaseConfig = null;
let onSubmissionsUpdateCallback = null;
let onStatusChangeCallback = null;

async function loadFirebaseSdk() {
  const [{ initializeApp }, { getAuth, signInAnonymously, signInWithCustomToken }, firestore] = await Promise.all([
    import('https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js'),
    import('https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js'),
    import('https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js')
  ]);
  return { initializeApp, getAuth, signInAnonymously, signInWithCustomToken, firestore };
}

export function onSubmissionsUpdate(callback) {
  onSubmissionsUpdateCallback = callback;
}

export function onStatusChange(callback) {
  onStatusChangeCallback = callback;
}

export async function initCloud(config) {
  if (config) firebaseConfig = config;

  if (typeof __firebase_config !== 'undefined' && !firebaseConfig) {
    try {
      firebaseConfig = JSON.parse(__firebase_config);
    } catch (e) {
      console.warn('Firebase config parse error:', e);
    }
  }

  if (!firebaseConfig) {
    if (onStatusChangeCallback) onStatusChangeCallback(false);
    return;
  }

  try {
    const { initializeApp, getAuth, signInAnonymously, signInWithCustomToken, firestore } = await loadFirebaseSdk();
    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = firestore.getFirestore(app);

    if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
      const cred = await signInWithCustomToken(auth, __initial_auth_token);
      currentUser = cred.user;
    } else {
      const cred = await signInAnonymously(auth);
      currentUser = cred.user;
    }

    if (onStatusChangeCallback) onStatusChangeCallback(true);
    listenToSubmissions(firestore);
  } catch (err) {
    console.error('Firebase error:', err);
    if (onStatusChangeCallback) onStatusChangeCallback(false);
  }
}

function listenToSubmissions(firestore) {
  if (!db || !currentUser) return;
  const appId = typeof __app_id !== 'undefined' ? __app_id : 'fiske-model-quiz-app';
  const colRef = firestore.collection(db, 'artifacts', appId, 'public', 'data', 'submissions');
  firestore.onSnapshot(colRef, (snapshot) => {
    const cloudData = [];
    snapshot.forEach(docSnap => {
      cloudData.push({ id: docSnap.id, ...docSnap.data() });
    });
    cloudData.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
    if (cloudData.length > 0 && onSubmissionsUpdateCallback) {
      onSubmissionsUpdateCallback(cloudData);
    }
  }, (err) => console.error('Snapshot error:', err));
}

export async function saveResultToCloud(record) {
  if (!db || !currentUser) return;
  try {
    const firestore = await import('https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js');
    const appId = typeof __app_id !== 'undefined' ? __app_id : 'fiske-model-quiz-app';
    const colRef = firestore.collection(db, 'artifacts', appId, 'public', 'data', 'submissions');
    await firestore.addDoc(colRef, record);
  } catch (e) {
    console.error('Save error to cloud:', e);
  }
}

export async function clearAllCloudSubmissions() {
  if (!db || !currentUser) return;
  try {
    const firestore = await import('https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js');
    const appId = typeof __app_id !== 'undefined' ? __app_id : 'fiske-model-quiz-app';
    const colRef = firestore.collection(db, 'artifacts', appId, 'public', 'data', 'submissions');
    const snap = await firestore.getDocs(colRef);
    snap.forEach(async (d) => {
      await firestore.deleteDoc(d.ref);
    });
  } catch (e) {
    console.error('Clear cloud error:', e);
  }
}

export function isCloudConnected() {
  return !!(db && currentUser);
}
