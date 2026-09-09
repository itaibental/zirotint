export default {
  id: 'lasswell_model',
  title: 'מודל לאסוול',
  arena: 'זירה 1 · מציאות תקשורתית',
  shortDesc: 'מודל קווי-ליניארי המתאר את התקשורת דרך המשפט: מי אמר? מה אמר? באיזה ערוץ? למי? באיזו השפעה?',
  slides: [
    {
      title: 'מה זה אומר במילים פשוטות?',
      tag: 'ההגדרה הבסיסית',
      contentHtml: `
        <div class="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            מודל לאסוול, על שם <strong>הרולד לאסוול</strong> שפיתח אותו בשנות ה-40, מתאר את התקשורת כתהליך פשוט וחד-כיווני באמצעות חמש שאלות: <strong>מי אמר? מה אמר? באיזה ערוץ? למי? באיזו השפעה?</strong>
          </p>
          <div class="p-3.5 rounded-2xl bg-amber-50 border border-amber-200">
            <span class="font-bold text-amber-900 block mb-1">➡️ תהליך חד-כיווני:</span>
            המוען שולט לחלוטין במסר, והנמען נתפס כפסיבי ומושפע ממנו באופן חזק, ללא משוב.
          </div>
        </div>
      `
    },
    {
      title: 'הדברים שחייבים לזכור לבגרות',
      tag: 'מאפייני המודל',
      contentHtml: `
        <ul class="space-y-2 text-xs text-slate-700 leading-relaxed">
          <li class="p-2.5 rounded-xl bg-slate-50 border border-slate-200"><strong>המוען שולט במסר</strong> - הוא קובע מה יועבר ואיך.</li>
          <li class="p-2.5 rounded-xl bg-slate-50 border border-slate-200"><strong>הנמען פסיבי</strong> - מושפע בצורה חזקה ואחידה מהמסר.</li>
          <li class="p-2.5 rounded-xl bg-slate-50 border border-slate-200"><strong>אין משוב</strong> - המודל לא מתייחס לתגובת הנמען.</li>
          <li class="p-2.5 rounded-xl bg-slate-50 border border-slate-200"><strong>כל הנמענים שווים</strong> - כולם מושפעים באותו אופן, ללא הבדלי פרשנות.</li>
        </ul>
      `
    },
    {
      title: 'בואו ננסה להבין את הדברים בצורה פשוטה יותר',
      tag: 'דוגמה מלאה',
      contentHtml: `
        <div class="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-900 leading-relaxed">
          <strong>מגיש חדשות מדווח על שביתה:</strong><br>
          מוען - מגיש החדשות | מסר - שביתה בבתי הספר | ערוץ - טלוויזיה, ערוץ 11 | נמען - צופי החדשות, הורים ותלמידים | אפקט - התלמידים יישארו בבית, ההורים ימצאו סידור.
        </div>
      `
    },
    {
      title: 'איך עונים נכון במבחן וממה להיזהר?',
      tag: 'טיפ לבגרות',
      contentHtml: `
        <div class="p-3 rounded-xl bg-emerald-50 text-emerald-900 text-xs font-bold leading-relaxed">
          זכרו: מודל לאסוול הוא דוגמה למודל קווי-ליניארי - אל תבלבלו אותו עם מודל פיסק, שהוא מודל סמיוטי-תרבותי ורואה בנמען גורם פעיל.
        </div>
      `
    }
  ],
  questions: [
    {
      question: 'מהו מבנה השאלות שמאפיין את מודל לאסוול?',
      options: [
        'מי אמר? מה אמר? באיזה ערוץ? למי? באיזו השפעה?',
        'למה קרה? מתי קרה? איפה קרה? עם מי קרה?',
        'האם זה אמת? האם זה מדויק? האם זה מאוזן?',
        'מי צפה? כמה צפו? מתי צפו?'
      ],
      correct: 0,
      hint: 'זהו מודל שמתאר את התהליך התקשורתי כשרשרת של חמישה שלבים.',
      explanation: 'נכון! זהו המבנה הקלאסי של מודל לאסוול - מי, מה, באיזה ערוץ, למי ובאיזו השפעה.'
    },
    {
      question: 'מהו ההבדל המרכזי בין מודל לאסוול למודל פיסק?',
      options: [
        'לאסוול רואה בתקשורת תהליך חד-כיווני עם נמען פסיבי; פיסק רואה בה יחסי גומלין עם נמען פעיל',
        'לאסוול עוסק רק ברדיו ופיסק עוסק רק בטלוויזיה',
        'שני המודלים זהים לחלוטין',
        'פיסק פותח לפני לאסוול, בשנות ה-19'
      ],
      correct: 0,
      hint: 'חשבו על ההבדל בין מודל קווי-ליניארי למודל סמיוטי-תרבותי.',
      explanation: 'מדויק! זהו ההבדל המהותי בין שני סוגי המודלים - כיוון ההשפעה ומידת הפעילות של הנמען.'
    }
  ]
};
