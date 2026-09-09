export default {
  id: 'journalistic_professional_values',
  title: 'ערכים מקצועיים של עיתונאים',
  arena: 'זירה 3 · חדשות וצילום',
  shortDesc: 'שלושה עקרונות מנחים להתנהלות מקצועית עיתונאית: אובייקטיביות, דיוק ואיזון.',
  slides: [
    {
      title: 'מה זה אומר במילים פשוטות?',
      tag: 'ההגדרה הבסיסית',
      contentHtml: `
        <div class="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            שלושה עקרונות מקצועיים מנחים את עבודת העיתונאים:
          </p>
          <div class="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 space-y-1.5">
            <p><strong>אובייקטיביות:</strong> אי הבעת עמדה, ניטרליות, הבחנה ברורה בין עובדה לדעה.</p>
            <p><strong>דיוק:</strong> מידע מהימן שנבדק ואומת בכמה מקורות לפני הפרסום.</p>
            <p><strong>איזון:</strong> מתן אפשרות תגובה, זמן ומקום זהה לכל הצדדים.</p>
          </div>
        </div>
      `
    },
    {
      title: 'הדברים שחייבים לזכור לבגרות',
      tag: 'למה זה חשוב?',
      contentHtml: `
        <ul class="space-y-2 text-xs text-slate-700 leading-relaxed">
          <li class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">שלושת הערכים יחד בונים אמון ציבורי בתקשורת.</li>
          <li class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">"דיוק" קשור ישירות למאבק בפייק ניוז ובפוסט-אמת.</li>
          <li class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">"איזון" הוא הכלי המרכזי נגד הטיה בסיקור.</li>
        </ul>
      `
    },
    {
      title: 'בואו ננסה להבין את הדברים בצורה פשוטה יותר',
      tag: 'דימוי מהחיים',
      contentHtml: `
        <div class="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-900 leading-relaxed">
          <strong>שולחן עם שלוש רגליים:</strong> אם רגל אחת חסרה - השולחן קורס. גם דיווח עיתונאי שחסר אחד מהערכים (אובייקטיביות, דיוק או איזון) הופך פגום ולא אמין.
        </div>
      `
    },
    {
      title: 'איך עונים נכון במבחן וממה להיזהר?',
      tag: 'טיפ לבגרות',
      contentHtml: `
        <div class="p-3 rounded-xl bg-emerald-50 text-emerald-900 text-xs font-bold leading-relaxed">
          אל תבלבלו בין "אובייקטיביות" (ניטרליות ואי הבעת עמדה) לבין "דיוק" (בדיקת עובדות) - אלו שני ערכים נפרדים, גם אם קשורים.
        </div>
      `
    }
  ],
  questions: [
    {
      question: 'מהם שלושת הערכים המקצועיים המנחים עיתונאים לפי הלומדה?',
      options: [
        'אובייקטיביות, דיוק ואיזון',
        'מהירות, פופולריות ורייטינג',
        'יופי, אורך ותקציב',
        'רק אובייקטיביות בלבד'
      ],
      correct: 0,
      hint: 'חשבו על שלושה עקרונות שמבטיחים דיווח הוגן ואמין.',
      explanation: 'נכון! אלו שלושת הערכים המרכזיים שמנחים עבודה עיתונאית מקצועית.'
    },
    {
      question: 'מהי משמעות ערך ה"איזון" בעבודה עיתונאית?',
      options: [
        'מתן אפשרות תגובה, זמן ומקום זהה לכל הצדדים המעורבים בסיפור',
        'שכל כתבה חייבת להיות באותו אורך בדיוק',
        'שאסור לעיתונאי להתראיין בטלוויזיה',
        'שיש לפרסם רק חדשות טובות'
      ],
      correct: 0,
      hint: 'חשבו על הוגנות בין הצדדים המעורבים באירוע המסוקר.',
      explanation: 'מדויק! איזון פירושו לתת לכל הצדדים הזדמנות שווה להשמיע את עמדתם בסיקור.'
    }
  ]
};
