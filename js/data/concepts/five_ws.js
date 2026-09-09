export default {
  id: 'five_ws',
  title: 'חמשת המ"מים',
  arena: 'זירה 3 · חדשות וצילום',
  shortDesc: 'חמש שאלות שדיווח עיתונאי שלם צריך לענות עליהן: מי, מה, מתי, מקום (איפה) ומדוע - כולן מתחילות באות מ\'.',
  slides: [
    {
      title: 'מה זה אומר במילים פשוטות?',
      tag: 'ההגדרה הבסיסית',
      contentHtml: `
        <div class="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            כדי שדיווח עיתונאי ייחשב שלם, עליו לענות על חמש שאלות שכולן מתחילות באות <strong>מ'</strong>: <strong>מי, מה, מתי, מקום (איפה), ומדוע</strong>.
          </p>
          <div class="p-3.5 rounded-2xl bg-amber-50 border border-amber-200">
            <span class="font-bold text-amber-900 block mb-1">📰 למה זה חשוב?</span>
            אלו החומרים הבסיסיים שכל ידיעה חדשותית זקוקה להם כדי לתת לקורא/צופה תמונה מלאה של האירוע.
          </div>
        </div>
      `
    },
    {
      title: 'הדברים שחייבים לזכור לבגרות',
      tag: 'דוגמה מלאה',
      contentHtml: `
        <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed space-y-1">
          <p><em>"אתמול בשעה 23:00 נחסם כביש החוף במחלף קיסריה בעקבות תאונה בין משאית לארבעה כלי רכב. מחקירה עולה כי נהג המשאית נרדם על ההגה."</em></p>
          <p><strong>מה קרה?</strong> תאונה | <strong>מי היה מעורב?</strong> נהג משאית וארבעה רכבים | <strong>מתי?</strong> אתמול ב-23:00 | <strong>מקום?</strong> מחלף קיסריה | <strong>מדוע?</strong> הנהג נרדם.</p>
        </div>
      `
    },
    {
      title: 'בואו ננסה להבין את הדברים בצורה פשוטה יותר',
      tag: 'דימוי מהחיים',
      contentHtml: `
        <div class="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-900 leading-relaxed">
          <strong>רשימת קניות של עיתונאי:</strong> ממש כמו שברשימת קניות אתם בודקים שלא שכחתם שום פריט, כך גם עיתונאי בודק שענה על כל חמש שאלות ה-מ' לפני שהוא שולח את הידיעה לפרסום.
        </div>
      `
    },
    {
      title: 'איך עונים נכון במבחן וממה להיזהר?',
      tag: 'טיפ לבגרות',
      contentHtml: `
        <div class="p-3 rounded-xl bg-emerald-50 text-emerald-900 text-xs font-bold leading-relaxed">
          אל תשכחו: בבגרות עשויים לתת לכם ידיעה ולבקש לזהות בה את חמשת ה-מ'ים, או לבקש לזהות איזה מהם חסר.
        </div>
      `
    }
  ],
  questions: [
    {
      question: 'אילו חמש שאלות מרכיבות את "חמשת המ\'מים" בדיווח עיתונאי?',
      options: [
        'מי, מה, מתי, מקום (איפה), מדוע',
        'מי, למה, איך, כמה, מתי',
        'מה, איפה, כמה זמן, כמה כסף, למי',
        'מי, מה, איזה ערוץ, למי, באיזו השפעה'
      ],
      correct: 0,
      hint: 'כל השאלות מתחילות באות מ\'.',
      explanation: 'נכון! אלו חמש השאלות שדיווח עיתונאי שלם צריך לענות עליהן.'
    }
  ]
};
