import { learningModules } from './data/modules-index.js';
import { initialSubmissions } from './data/initial-submissions.js';
import { playSound } from './audio.js';
import { initCloud, onSubmissionsUpdate, onStatusChange, saveResultToCloud, clearAllCloudSubmissions, isCloudConnected } from './cloud.js';

/* ---------- State ---------- */
let currentModuleId = learningModules[0]?.id || 'fiske';
let currentSlideIndex = 0;
let currentQuestionIndex = 0;
let quizScore = 0;
let studentInfo = { name: '', classTag: "י' 1" };
let isTeacherAuthenticated = false;
let studentSubmissions = [...initialSubmissions];
let selectedArena = null;

/* ---------- Arena helpers ---------- */
const ARENA_ORDER = ['זירת העל', 'זירה 1', 'זירה 2', 'זירה 3', 'זירה 4', 'זירה 5', 'זירה 6', 'זירה 7', 'זירה 8', 'זירה 9'];
const ARENA_ICONS = {
  'זירת העל': '🏛️',
  'זירה 1': '🧭',
  'זירה 2': '🌍',
  'זירה 3': '📰',
  'זירה 4': '🎭',
  'זירה 5': '📱',
  'זירה 6': '📺',
  'זירה 7': '🎬',
  'זירה 8': '⚽',
  'זירה 9': '📢'
};

function arenaRank(arena) {
  for (let i = 0; i < ARENA_ORDER.length; i++) {
    if (arena.startsWith(ARENA_ORDER[i])) return i;
  }
  return 999;
}

function arenaIcon(arena) {
  for (const key of Object.keys(ARENA_ICONS)) {
    if (arena.startsWith(key)) return ARENA_ICONS[key];
  }
  return '📚';
}

function getArenaGroups() {
  const map = new Map();
  learningModules.forEach(mod => {
    if (!map.has(mod.arena)) map.set(mod.arena, []);
    map.get(mod.arena).push(mod);
  });
  return [...map.entries()]
    .map(([arena, mods]) => ({ arena, mods }))
    .sort((a, b) => arenaRank(a.arena) - arenaRank(b.arena) || a.arena.localeCompare(b.arena));
}

/* ---------- Teacher dashboard ---------- */
function renderTeacherDashboard() {
  const tbody = document.getElementById('submissionsTableBody');
  if (!tbody) return;

  tbody.innerHTML = '';
  if (studentSubmissions.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="p-6 text-center text-slate-500 font-bold">טרם נרשמו הגשות תלמידים</td></tr>`;
  } else {
    studentSubmissions.forEach(sub => {
      const tr = document.createElement('tr');
      tr.className = 'hover:bg-slate-800/50 transition';
      const gradeColor = sub.grade >= 80 ? 'text-emerald-400' : (sub.grade >= 60 ? 'text-amber-400' : 'text-rose-400');
      tr.innerHTML = `
        <td class="p-3 font-bold text-white">${sub.name}</td>
        <td class="p-3 text-slate-400">${sub.classTag}</td>
        <td class="p-3 text-indigo-300 font-medium">${sub.quizTitle}</td>
        <td class="p-3 font-black ${gradeColor}">${sub.grade}</td>
        <td class="p-3 text-slate-300">${sub.correctText}</td>
        <td class="p-3 text-slate-500 font-mono text-[11px]">${sub.dateStr}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  const subCount = studentSubmissions.length;
  document.getElementById('metricSubmissionsCount').innerText = subCount;
  document.getElementById('metricQuizzesCount').innerText = learningModules.length;

  if (subCount > 0) {
    const sum = studentSubmissions.reduce((acc, curr) => acc + Number(curr.grade || 0), 0);
    const avg = Math.round(sum / subCount);
    const max = Math.max(...studentSubmissions.map(s => Number(s.grade || 0)));
    document.getElementById('metricClassAverage').innerText = avg;
    document.getElementById('metricTopScore').innerText = max;
  } else {
    document.getElementById('metricClassAverage').innerText = '0';
    document.getElementById('metricTopScore').innerText = '0';
  }
}

/* ---------- Home: arena tiles + concept cards ---------- */
function buildConceptCardHtml(mod) {
  return `
    <div class="space-y-2">
      <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800">${mod.arena}</span>
      <h3 class="text-base font-black text-white">${mod.title}</h3>
      <p class="text-xs text-slate-400 leading-relaxed">${mod.shortDesc}</p>
    </div>
    <div class="flex items-center gap-2 pt-3 border-t border-slate-800">
      <button data-lesson-id="${mod.id}" class="js-open-lesson w-1/2 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition flex items-center justify-center gap-1">
        <span>📖</span>
        <span>שיעור</span>
      </button>
      <button data-quiz-id="${mod.id}" class="js-open-quiz w-1/2 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition flex items-center justify-center gap-1 shadow-sm">
        <span>🎯</span>
        <span>שאלון</span>
      </button>
    </div>
  `;
}

function wireConceptCardButtons(container) {
  container.querySelectorAll('.js-open-lesson').forEach(btn => {
    btn.addEventListener('click', () => startModuleLesson(btn.dataset.lessonId));
  });
  container.querySelectorAll('.js-open-quiz').forEach(btn => {
    btn.addEventListener('click', () => startModuleQuiz(btn.dataset.quizId));
  });
}

function renderArenaTiles() {
  const container = document.getElementById('arenaTilesContainer');
  if (!container) return;
  container.innerHTML = '';

  getArenaGroups().forEach(({ arena, mods }) => {
    const tile = document.createElement('button');
    tile.className = 'group text-right bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-4 sm:p-5 transition-all hover:shadow-xl hover:-translate-y-1 flex flex-col gap-2';
    tile.innerHTML = `
      <div class="w-10 h-10 rounded-xl bg-slate-800 group-hover:bg-amber-500/10 flex items-center justify-center text-xl transition">${arenaIcon(arena)}</div>
      <div class="text-sm font-black text-white leading-snug">${arena}</div>
      <div class="text-[11px] text-slate-400 font-bold">${mods.length} מושגים</div>
    `;
    tile.addEventListener('click', () => openArenaConcepts(arena));
    container.appendChild(tile);
  });
}

function openArenaConcepts(arena) {
  playSound('click');
  selectedArena = arena;
  document.getElementById('homeArenasSection').classList.add('hidden');
  document.getElementById('homeConceptsSection').classList.remove('hidden');
  document.getElementById('selectedArenaTitle').innerHTML = `<span>${arenaIcon(arena)}</span><span>${arena}</span>`;

  const grid = document.getElementById('homeConceptsGrid');
  grid.innerHTML = '';
  learningModules
    .filter(mod => mod.arena === arena)
    .forEach(mod => {
      const card = document.createElement('div');
      card.className = 'bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-5 space-y-3 transition-all hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between';
      card.innerHTML = buildConceptCardHtml(mod);
      grid.appendChild(card);
    });
  wireConceptCardButtons(grid);
}

function backToArenas() {
  playSound('click');
  selectedArena = null;
  document.getElementById('homeConceptsSection').classList.add('hidden');
  document.getElementById('homeArenasSection').classList.remove('hidden');
}

function renderHome() {
  renderArenaTiles();
  if (selectedArena) {
    openArenaConcepts(selectedArena);
  } else {
    document.getElementById('homeConceptsSection').classList.add('hidden');
    document.getElementById('homeArenasSection').classList.remove('hidden');
  }
}

/* ---------- Global header search ---------- */
function renderGlobalSearchResults(query) {
  const resultsBox = document.getElementById('globalSearchResults');
  const q = query.trim().toLowerCase();

  if (!q) {
    resultsBox.classList.add('hidden');
    resultsBox.innerHTML = '';
    return;
  }

  const matches = learningModules.filter(mod =>
    mod.title.toLowerCase().includes(q) ||
    mod.shortDesc.toLowerCase().includes(q) ||
    mod.arena.toLowerCase().includes(q)
  ).slice(0, 8);

  if (matches.length === 0) {
    resultsBox.innerHTML = `<div class="p-4 text-xs text-slate-500 font-bold text-center">לא נמצאו מושגים תואמים</div>`;
    resultsBox.classList.remove('hidden');
    return;
  }

  resultsBox.innerHTML = matches.map(mod => `
    <button data-goto-id="${mod.id}" class="js-search-result w-full text-right p-3 hover:bg-slate-800 transition flex items-center justify-between gap-3">
      <div class="min-w-0">
        <div class="text-sm font-bold text-white truncate">${mod.title}</div>
        <div class="text-[11px] text-slate-500 truncate">${mod.arena}</div>
      </div>
      <span class="text-amber-400 text-xs font-bold shrink-0">פתיחה ⬅️</span>
    </button>
  `).join('');

  resultsBox.querySelectorAll('.js-search-result').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.gotoId;
      document.getElementById('globalSearchInput').value = '';
      resultsBox.classList.add('hidden');
      resultsBox.innerHTML = '';
      startModuleLesson(id);
    });
  });

  resultsBox.classList.remove('hidden');
}

/* ---------- Navigation ---------- */
function switchView(viewName) {
  document.getElementById('viewHome').classList.add('hidden');
  document.getElementById('viewLesson').classList.add('hidden');
  document.getElementById('viewQuiz').classList.add('hidden');
  document.getElementById('viewTeacher').classList.add('hidden');

  document.getElementById('navHomeBtn').classList.remove('nav-btn-active');
  document.getElementById('navLessonBtn').classList.remove('nav-btn-active');
  document.getElementById('navQuizBtn').classList.remove('nav-btn-active');
  document.getElementById('navTeacherBtn').classList.remove('nav-btn-active');

  if (viewName === 'home') {
    document.getElementById('viewHome').classList.remove('hidden');
    document.getElementById('navHomeBtn').classList.add('nav-btn-active');
    renderHome();
  } else if (viewName === 'lesson') {
    document.getElementById('viewLesson').classList.remove('hidden');
    document.getElementById('navLessonBtn').classList.add('nav-btn-active');
    renderCurrentSlide();
  } else if (viewName === 'quiz') {
    document.getElementById('viewQuiz').classList.remove('hidden');
    document.getElementById('navQuizBtn').classList.add('nav-btn-active');
  } else if (viewName === 'teacher') {
    document.getElementById('viewTeacher').classList.remove('hidden');
    document.getElementById('navTeacherBtn').classList.add('nav-btn-active');
    renderTeacherDashboard();
  }
}

/* ---------- Module tabs bar ---------- */
function renderModuleTabs() {
  const container = document.getElementById('modulesTabsContainer');
  if (!container) return;
  container.innerHTML = '';

  learningModules.forEach(mod => {
    const btn = document.createElement('button');
    const isActive = mod.id === currentModuleId;
    btn.className = `px-3 py-1.5 rounded-xl whitespace-nowrap transition flex items-center gap-1.5 ${
      isActive
        ? 'bg-amber-500 text-slate-950 font-black shadow-sm'
        : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
    }`;
    btn.innerHTML = `<span>${mod.title}</span>`;
    btn.onclick = () => {
      playSound('click');
      currentModuleId = mod.id;
      currentSlideIndex = 0;
      renderModuleTabs();
      if (!document.getElementById('viewLesson').classList.contains('hidden')) {
        renderCurrentSlide();
      } else if (!document.getElementById('viewQuiz').classList.contains('hidden')) {
        initQuizForModule(mod.id);
      }
    };
    container.appendChild(btn);
  });
}

/* ---------- Slides ---------- */
function renderCurrentSlide() {
  const mod = learningModules.find(m => m.id === currentModuleId) || learningModules[0];
  const slides = mod.slides;
  if (currentSlideIndex >= slides.length) currentSlideIndex = 0;

  const slide = slides[currentSlideIndex];
  document.getElementById('lessonArenaBadge').innerText = mod.arena;
  document.getElementById('lessonTitle').innerText = mod.title;
  document.getElementById('cardCounterText').innerText = `עמוד ${currentSlideIndex + 1} מתוך ${slides.length}`;

  const contentArea = document.getElementById('slideContentArea');
  contentArea.innerHTML = `
    <div class="space-y-1">
      <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700">${slide.tag}</span>
      <h3 class="text-xl sm:text-2xl font-black text-slate-900 mt-2">${slide.title}</h3>
    </div>
    <div class="pt-2">
      ${slide.contentHtml}
    </div>
  `;

  const dotsCont = document.getElementById('slideDotsContainer');
  dotsCont.innerHTML = '';
  slides.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.className = `w-2.5 h-2.5 rounded-full transition-all ${
      idx === currentSlideIndex ? 'bg-indigo-600 w-6' : 'bg-slate-300 hover:bg-slate-400'
    }`;
    dot.onclick = () => {
      currentSlideIndex = idx;
      renderCurrentSlide();
    };
    dotsCont.appendChild(dot);
  });

  document.getElementById('prevSlideBtn').disabled = (currentSlideIndex === 0);

  const nextBtn = document.getElementById('nextSlideBtn');
  if (currentSlideIndex === slides.length - 1) {
    nextBtn.innerHTML = `<span>עברו לשאלון 🎯</span>`;
    nextBtn.className = "px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm transition flex items-center gap-1.5 shadow-md shadow-amber-500/20";
    nextBtn.onclick = () => {
      startModuleQuiz(currentModuleId);
    };
  } else {
    nextBtn.innerHTML = `<span>לעמוד הבא</span><span>⬅️</span>`;
    nextBtn.className = "px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs sm:text-sm transition flex items-center gap-1.5 shadow-md shadow-indigo-600/20";
    nextBtn.onclick = () => {
      playSound('click');
      currentSlideIndex++;
      renderCurrentSlide();
    };
  }
}

/* ---------- Quiz flow ---------- */
function initQuizForModule(moduleId) {
  currentModuleId = moduleId;
  renderModuleTabs();
  switchView('quiz');

  const mod = learningModules.find(m => m.id === moduleId) || learningModules[0];
  document.getElementById('gateQuizTitle').innerText = `שאלון: ${mod.title}`;
  document.getElementById('quizStudentGate').classList.remove('hidden');
  document.getElementById('quizActiveContainer').classList.add('hidden');
  document.getElementById('quizSummaryContainer').classList.add('hidden');
}

function startQuestions() {
  const nameInput = document.getElementById('studentNameInput');
  const classSelect = document.getElementById('studentClassSelect');
  const err = document.getElementById('gateErrorMsg');

  const val = nameInput.value.trim();
  if (!val) {
    err.classList.remove('hidden');
    err.innerText = 'נא להזין שם מלא לפני תחילת השאלון';
    return;
  }
  err.classList.add('hidden');

  studentInfo.name = val;
  studentInfo.classTag = classSelect.value;
  document.getElementById('activeStudentBadge').innerText = `תלמיד/ה: ${studentInfo.name} (${studentInfo.classTag})`;

  currentQuestionIndex = 0;
  quizScore = 0;

  document.getElementById('quizStudentGate').classList.add('hidden');
  document.getElementById('quizActiveContainer').classList.remove('hidden');
  document.getElementById('quizSummaryContainer').classList.add('hidden');

  renderCurrentQuestion();
}

function renderCurrentQuestion() {
  const mod = learningModules.find(m => m.id === currentModuleId) || learningModules[0];
  const questions = mod.questions;
  const q = questions[currentQuestionIndex];
  const total = questions.length;

  document.getElementById('quizProgressLabel').innerText = `שאלה ${currentQuestionIndex + 1} מתוך ${total}`;
  document.getElementById('progressBarFill').style.width = `${((currentQuestionIndex) / total) * 100}%`;
  document.getElementById('liveScoreBadge').innerText = `${quizScore}/${total * 10}`;

  document.getElementById('questionText').innerText = q.question;
  document.getElementById('hintContentText').innerText = q.hint;
  document.getElementById('hintBox').classList.add('hidden');
  document.getElementById('feedbackBox').classList.add('hidden');
  document.getElementById('nextQuestionBtn').classList.add('hidden');

  const card = document.getElementById('currentQuestionCard');
  card.classList.remove('animate-shake-card');

  const optsCont = document.getElementById('optionsContainer');
  optsCont.innerHTML = '';

  q.options.forEach((optText, idx) => {
    const btn = document.createElement('button');
    btn.className = 'w-full p-3.5 sm:p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold text-right transition flex items-start gap-3 active:scale-[0.99]';
    btn.innerHTML = `
      <span class="w-6 h-6 rounded-lg bg-white border border-slate-300 text-slate-600 flex items-center justify-center font-bold text-xs shrink-0">${['א', 'ב', 'ג', 'ד'][idx]}</span>
      <span class="leading-relaxed">${optText}</span>
    `;
    btn.onclick = () => handleAnswerSelected(idx, btn);
    optsCont.appendChild(btn);
  });
}

function handleAnswerSelected(selectedIndex, selectedBtn) {
  const mod = learningModules.find(m => m.id === currentModuleId) || learningModules[0];
  const q = mod.questions[currentQuestionIndex];
  const total = mod.questions.length;
  const isCorrect = (selectedIndex === q.correct);

  const buttons = document.getElementById('optionsContainer').querySelectorAll('button');
  buttons.forEach(b => b.disabled = true);

  const feedbackBox = document.getElementById('feedbackBox');
  const feedbackTitle = document.getElementById('feedbackTitle');
  const feedbackExplanation = document.getElementById('feedbackExplanation');
  feedbackBox.classList.remove('hidden');

  if (isCorrect) {
    playSound('correct');
    quizScore += 10;
    document.getElementById('liveScoreBadge').innerText = `${quizScore}/${total * 10}`;
    selectedBtn.classList.remove('bg-slate-50', 'hover:bg-slate-100');
    selectedBtn.classList.add('bg-emerald-50', 'border-emerald-500', 'text-emerald-950', 'ring-2', 'ring-emerald-400');

    feedbackBox.className = "p-4 rounded-2xl text-xs sm:text-sm font-medium leading-relaxed border space-y-1 bg-emerald-50 border-emerald-300 text-emerald-950";
    feedbackTitle.innerHTML = `<span>🎉</span> <span>תשובה נכונה! כל הכבוד!</span>`;
    feedbackExplanation.innerText = q.explanation;

    triggerCelebrationParticles();
  } else {
    playSound('wrong');
    selectedBtn.classList.remove('bg-slate-50', 'hover:bg-slate-100');
    selectedBtn.classList.add('bg-rose-50', 'border-rose-500', 'text-rose-950', 'ring-2', 'ring-rose-400');

    if (buttons[q.correct]) {
      buttons[q.correct].classList.add('bg-emerald-50', 'border-emerald-500', 'text-emerald-950');
    }

    feedbackBox.className = "p-4 rounded-2xl text-xs sm:text-sm font-medium leading-relaxed border space-y-1 bg-rose-50 border-rose-300 text-rose-950";
    feedbackTitle.innerHTML = `<span>❌</span> <span>תשובה לא מדויקת. הנה ההסבר:</span>`;
    feedbackExplanation.innerText = q.explanation;

    triggerRedFlash();
  }

  const nextBtn = document.getElementById('nextQuestionBtn');
  nextBtn.classList.remove('hidden');
  if (currentQuestionIndex === total - 1) {
    nextBtn.innerText = 'לצפייה בציון הסופי 🏆';
  } else {
    nextBtn.innerText = 'לשאלה הבאה ⬅️';
  }
}

function triggerCelebrationParticles() {
  const overlay = document.getElementById('celebrationOverlay');
  if (!overlay) return;
  const emojis = ['🎉', '💖', '😊', '✨', '🥳', '❤️', '⭐', '🎈'];
  const rect = document.getElementById('currentQuestionCard').getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 3;

  for (let i = 0; i < 36; i++) {
    const p = document.createElement('div');
    p.className = 'celebration-item text-xl';
    p.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    p.style.left = `${originX}px`;
    p.style.top = `${originY}px`;

    const angle = Math.random() * Math.PI * 2;
    const dist = 90 + Math.random() * 180;
    const tx = Math.cos(angle) * dist;
    const ty = Math.sin(angle) * dist - 50;
    const tr = (Math.random() - 0.5) * 360;

    p.style.setProperty('--tx', `${tx}px`);
    p.style.setProperty('--ty', `${ty}px`);
    p.style.setProperty('--tr', `${tr}deg`);

    overlay.appendChild(p);
    setTimeout(() => p.remove(), 1400);
  }
}

function triggerRedFlash() {
  const flash = document.getElementById('screenFlashOverlay');
  const card = document.getElementById('currentQuestionCard');
  if (flash) {
    flash.classList.remove('animate-red-flash');
    void flash.offsetWidth;
    flash.classList.add('animate-red-flash');
  }
  if (card) {
    card.classList.remove('animate-shake-card');
    void card.offsetWidth;
    card.classList.add('animate-shake-card');
  }
}

function advanceToNextQuestion() {
  playSound('click');
  const mod = learningModules.find(m => m.id === currentModuleId) || learningModules[0];
  const total = mod.questions.length;

  if (currentQuestionIndex < total - 1) {
    currentQuestionIndex++;
    renderCurrentQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  const mod = learningModules.find(m => m.id === currentModuleId) || learningModules[0];
  const total = mod.questions.length;
  const finalGrade = Math.round((quizScore / (total * 10)) * 100);

  document.getElementById('quizActiveContainer').classList.add('hidden');
  document.getElementById('quizSummaryContainer').classList.remove('hidden');

  document.getElementById('finalGradeText').innerText = finalGrade;
  const correctCount = Math.round(quizScore / 10);
  document.getElementById('correctCountSummary').innerText = `${correctCount} מתוך ${total} שאלות נכונות`;

  const emojiBadge = document.getElementById('resultEmojiBadge');
  if (finalGrade >= 90) {
    emojiBadge.innerText = '🏆';
    document.getElementById('resultSubtitle').innerText = 'מצוין! שליטה מלאה במושג לבגרות!';
  } else if (finalGrade >= 70) {
    emojiBadge.innerText = '👏';
    document.getElementById('resultSubtitle').innerText = 'עבודה יפה מאוד! כדאי לחזור על הנקודות הקטנות.';
  } else {
    emojiBadge.innerText = '💪';
    document.getElementById('resultSubtitle').innerText = 'מומלץ לקרוא שוב את כרטיסיות השיעור ולתרגל פעם נוספת.';
  }

  const now = new Date();
  const dateStr = now.toLocaleDateString('he-IL') + ', ' + now.toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' });

  const record = {
    name: studentInfo.name,
    classTag: studentInfo.classTag,
    quizTitle: mod.title,
    grade: finalGrade,
    correctText: `${correctCount}/${total}`,
    dateStr: dateStr,
    timestamp: Date.now()
  };

  studentSubmissions.unshift(record);
  renderTeacherDashboard();
  if (isCloudConnected()) {
    saveResultToCloud(record);
  }
}

/* ---------- Global launchers (also used by inline handlers) ---------- */
function startModuleLesson(modId) {
  playSound('click');
  currentModuleId = modId;
  currentSlideIndex = 0;
  renderModuleTabs();
  switchView('lesson');
}

function startModuleQuiz(modId) {
  playSound('click');
  initQuizForModule(modId);
}
window.startModuleLesson = startModuleLesson;
window.startModuleQuiz = startModuleQuiz;

/* ---------- CSV Export ---------- */
function exportSubmissionsToCsv() {
  if (studentSubmissions.length === 0) {
    return;
  }
  let csv = "\uFEFFשם התלמיד,כיתה,שאלון,ציון,תשובות נכונות,תאריך ושעה\n";
  studentSubmissions.forEach(s => {
    csv += `"${s.name}","${s.classTag}","${s.quizTitle}","${s.grade}","${s.correctText}","${s.dateStr}"\n`;
  });
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `ציוני_תקשורת_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

/* ---------- Teacher's "add new concept" form ---------- */
function buildCustomModule(name, arena, def) {
  const newId = 'custom_' + Date.now();
  return {
    id: newId,
    title: name,
    arena: arena,
    shortDesc: def,
    slides: [
      {
        title: 'מה זה אומר במילים פשוטות?',
        tag: 'הגדרה',
        contentHtml: `<p class="text-sm text-slate-700 leading-relaxed">${def}</p>`
      },
      {
        title: 'נקודות מרכזיות לבחינה',
        tag: 'דגשים',
        contentHtml: `<p class="text-xs text-slate-700 leading-relaxed">הסבירו את המושג ${name}, ציינו את ההקשר התקשורתי שלו והביאו דוגמה מעשית מהמציאות.</p>`
      }
    ],
    questions: [
      {
        question: `כיצד מוגדר המושג "${name}" בלימודי תקשורת וחברה?`,
        options: [
          def,
          'העברת מידע טכנולוגית ללא משמעות חברתית',
          'השפעה בלעדית של מודלים מיושנים',
          'תופעה תקשורתית שאינה רלוונטית כיום'
        ],
        correct: 0,
        hint: `חשבו על ההגדרה שנלמדה עבור ${name}.`,
        explanation: `מדויק! ההגדרה הנכונה היא: ${def}`
      }
    ]
  };
}

/* ---------- Bootstrap ---------- */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('navHomeBtn').addEventListener('click', () => {
    playSound('click');
    switchView('home');
  });
  document.getElementById('brandLogoHome').addEventListener('click', () => {
    playSound('click');
    switchView('home');
  });
  document.getElementById('navLessonBtn').addEventListener('click', () => {
    playSound('click');
    switchView('lesson');
  });
  document.getElementById('navQuizBtn').addEventListener('click', () => {
    playSound('click');
    initQuizForModule(currentModuleId);
  });
  document.getElementById('navTeacherBtn').addEventListener('click', () => {
    playSound('click');
    if (isTeacherAuthenticated) {
      switchView('teacher');
    } else {
      document.getElementById('teacherAuthModal').classList.remove('hidden');
      document.getElementById('teacherPasswordInput').value = '';
      document.getElementById('teacherAuthError').classList.add('hidden');
      document.getElementById('teacherPasswordInput').focus();
    }
  });

  document.getElementById('heroStartQuizBtn').addEventListener('click', () => {
    startModuleQuiz(learningModules[0]?.id);
  });
  document.getElementById('heroStartLessonBtn').addEventListener('click', () => {
    startModuleLesson(learningModules[0]?.id);
  });
  document.getElementById('quickJumpToQuizBtn').addEventListener('click', () => {
    startModuleQuiz(currentModuleId);
  });

  document.getElementById('prevSlideBtn').addEventListener('click', () => {
    playSound('click');
    if (currentSlideIndex > 0) {
      currentSlideIndex--;
      renderCurrentSlide();
    }
  });

  document.getElementById('startQuestionsBtn').addEventListener('click', startQuestions);
  document.getElementById('nextQuestionBtn').addEventListener('click', advanceToNextQuestion);
  document.getElementById('showHintBtn').addEventListener('click', () => {
    playSound('click');
    document.getElementById('hintBox').classList.toggle('hidden');
  });
  document.getElementById('restartQuizBtn').addEventListener('click', () => {
    startModuleQuiz(currentModuleId);
  });
  document.getElementById('summaryGoHomeBtn').addEventListener('click', () => {
    playSound('click');
    switchView('home');
  });
  document.getElementById('summaryGoTeacherBtn').addEventListener('click', () => {
    document.getElementById('navTeacherBtn').click();
  });

  document.getElementById('cancelTeacherAuthBtn').addEventListener('click', () => {
    document.getElementById('teacherAuthModal').classList.add('hidden');
  });
  document.getElementById('submitTeacherAuthBtn').addEventListener('click', () => {
    const pass = document.getElementById('teacherPasswordInput').value;
    if (pass === '1234') {
      isTeacherAuthenticated = true;
      document.getElementById('teacherAuthModal').classList.add('hidden');
      switchView('teacher');
    } else {
      document.getElementById('teacherAuthError').classList.remove('hidden');
      document.getElementById('teacherPasswordInput').value = '';
    }
  });
  document.getElementById('teacherPasswordInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      document.getElementById('submitTeacherAuthBtn').click();
    }
  });
  document.getElementById('lockDashboardBtn').addEventListener('click', () => {
    isTeacherAuthenticated = false;
    switchView('home');
  });

  document.getElementById('exportCsvBtn').addEventListener('click', exportSubmissionsToCsv);
  document.getElementById('clearAllResultsBtn').addEventListener('click', () => {
    playSound('click');
    studentSubmissions = [];
    renderTeacherDashboard();
    if (isCloudConnected()) {
      clearAllCloudSubmissions();
    }
  });

  document.getElementById('newQuizForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('newConceptName').value.trim();
    const arena = document.getElementById('newConceptArena').value.trim();
    const def = document.getElementById('newConceptDef').value.trim();

    if (!name || !arena || !def) return;

    const newMod = buildCustomModule(name, arena, def);
    learningModules.push(newMod);
    renderModuleTabs();
    selectedArena = newMod.arena;
    renderHome();
    e.target.reset();
    startModuleLesson(newMod.id);
  });

  document.getElementById('backToArenasBtn').addEventListener('click', backToArenas);

  const globalSearchInput = document.getElementById('globalSearchInput');
  const globalSearchResults = document.getElementById('globalSearchResults');
  globalSearchInput.addEventListener('input', () => {
    renderGlobalSearchResults(globalSearchInput.value);
  });
  globalSearchInput.addEventListener('focus', () => {
    if (globalSearchInput.value.trim()) renderGlobalSearchResults(globalSearchInput.value);
  });
  globalSearchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      globalSearchInput.value = '';
      globalSearchResults.classList.add('hidden');
      globalSearchResults.innerHTML = '';
      globalSearchInput.blur();
    }
  });
  document.addEventListener('click', (e) => {
    const wrap = document.getElementById('globalSearchWrap');
    if (wrap && !wrap.contains(e.target)) {
      globalSearchResults.classList.add('hidden');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (document.getElementById('viewLesson').classList.contains('hidden')) return;
    if (e.key === 'ArrowLeft') {
      document.getElementById('nextSlideBtn').click();
    } else if (e.key === 'ArrowRight') {
      document.getElementById('prevSlideBtn').click();
    }
  });

  document.getElementById('cloudStatusBtn').addEventListener('click', () => {
    document.getElementById('cloudModal').classList.remove('hidden');
  });
  document.getElementById('closeCloudModalBtn').addEventListener('click', () => {
    document.getElementById('cloudModal').classList.add('hidden');
  });
  document.getElementById('saveCloudConfigBtn')?.addEventListener('click', async () => {
    const val = document.getElementById('cloudConfigInput').value.trim();
    if (!val) return;
    try {
      const parsedConfig = JSON.parse(val);
      await initCloud(parsedConfig);
      document.getElementById('cloudModal').classList.add('hidden');
    } catch (e) {
      console.error('JSON config error:', e);
    }
  });

  onSubmissionsUpdate((cloudData) => {
    studentSubmissions = cloudData;
    renderTeacherDashboard();
  });
  onStatusChange((connected) => {
    const btn = document.getElementById('cloudStatusBtn');
    if (!btn) return;
    if (connected) {
      btn.innerHTML = `<span>🟢</span><span class="hidden sm:inline">ענן מסונכרן</span>`;
      btn.className = "px-2.5 py-1.5 rounded-xl bg-emerald-950/80 text-emerald-400 border border-emerald-800 text-xs font-bold flex items-center gap-1.5 transition";
    } else {
      btn.innerHTML = `<span>☁️</span><span class="hidden sm:inline">סנכרון ענן</span>`;
      btn.className = "px-2.5 py-1.5 rounded-xl bg-slate-800/80 text-slate-300 border border-slate-700 text-xs font-bold flex items-center gap-1.5 hover:bg-slate-800 transition";
    }
  });
  initCloud();

  // Initial bootstrap
  renderModuleTabs();
  renderHome();
  renderTeacherDashboard();
});
