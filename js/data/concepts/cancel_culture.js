export default {
  id: 'cancel_culture',
  title: '"תרבות הביטול"',
  arena: 'זירת העל',
  shortDesc: 'תופעה תרבותית של נידוי או חרם על אנשים מפורסמים ותוצרי תרבות שלהם, בשל עמדות שנתפסות כפוגעניות.',
  slides: [
    {
      title: 'מה זה אומר במילים פשוטות?',
      tag: 'ההגדרה הבסיסית',
      contentHtml: `
              <div class="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  <strong>תרבות הביטול</strong> - נידוי או חרם על אנשים מפורסמים ובעלי כוח, בגלל עמדות שנתפסות כפוגעניות על ידי קבוצות מסוימות בחברה.
                </p>
                <div class="p-3.5 rounded-2xl bg-amber-50 border border-amber-200">
                  <span class="font-bold text-amber-900 block mb-1">⚖️ פיקוח לא-שלטוני:</span>
                  זהו כלי לפיקוח על חופש הביטוי - לא מצד השלטון, אלא מצד החברה והתרבות עצמה.
                </div>
              </div>
            `
    },
    {
      title: 'הדברים שחייבים לזכור לבגרות',
      tag: 'תפקיד הרשתות החברתיות',
      contentHtml: `
              <ul class="space-y-2 text-xs text-slate-700 leading-relaxed">
                <li class="p-2.5 rounded-xl bg-slate-50 border border-slate-200"><strong>תנועת MeToo:</strong> דוגמה מרכזית שהוקיעה אנשי ציבור בשל התנהגות/דברים לא ראויים.</li>
                <li class="p-2.5 rounded-xl bg-slate-50 border border-slate-200"><strong>הרשת "זוכרת":</strong> תוכן ישן יכול לצוץ מחדש ולהוביל ל"ביטול" גם שנים אחרי שפורסם.</li>
              </ul>
            `
    },
    {
      title: 'בואו ננסה להבין את הדברים בצורה פשוטה יותר',
      tag: 'דימוי מהחיים',
      contentHtml: `
              <div class="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-900 leading-relaxed">
                <strong>בית משפט ללא שופט:</strong> תרבות הביטול היא כמו "משפט ציבורי" שמתקיים ברשת - הציבור הוא גם השופט וגם התובע, ללא הליך משפטי מסודר.
              </div>
            `
    },
    {
      title: 'איך עונים נכון במבחן וממה להיזהר?',
      tag: 'טיפ לבגרות',
      contentHtml: `
              <div class="p-3 rounded-xl bg-emerald-50 text-emerald-900 text-xs font-bold leading-relaxed">
                יש מי שרואה בזה כלי חברתי לגיטימי לשמירה על נורמות, ויש מי שמתייחס לזה כ"בריונות רשת" - זכרו את שני הצדדים.
              </div>
            `
    }
  ],
  questions: [
    {
      question: 'כיצד תרבות הביטול מתפקדת כ"כלי פיקוח" בחברה?',
      options: [
        'היא מהווה פיקוח חברתי-תרבותי על חופש הביטוי, שלא מגיע מצד השלטון אלא מהציבור עצמו',
        'היא כלי משפטי רשמי שהמדינה מפעילה',
        'היא מבטלת לחלוטין את חופש הביטוי בחוק',
        'היא רלוונטית רק לתחום הספורט'
      ],
      correct: 0,
      hint: 'חשבו מי "מענישים" בתרבות הביטול - השלטון או הציבור?',
      explanation: 'נכון! תרבות הביטול היא דוגמה לפיקוח חברתי לא-פורמלי על התבטאויות, שמופעל על ידי הציבור ולא על ידי המדינה.'
    }
  ]
};
