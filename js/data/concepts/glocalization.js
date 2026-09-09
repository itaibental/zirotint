export default {
  id: 'glocalization',
  title: 'גלוקליזציה',
  arena: 'זירה 2 · גלובליזציה',
  shortDesc: 'חיבור בין הגלובלי ללוקלי (Global + Local): התאמת מוצר או פורמט עולמי לטעם ולתרבות של הקהל המקומי.',
  slides: [
    {
      title: 'מה זה אומר במילים פשוטות?',
      tag: 'ההגדרה הבסיסית',
      contentHtml: `
              <div class="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  <strong>גלוקליזציה</strong> היא המילה שמחברת <strong>גלובלי + לוקלי</strong> (עולמי + מקומי).
                </p>
                <div class="p-3.5 rounded-2xl bg-amber-50 border border-amber-200">
                  <span class="font-bold text-amber-900 block mb-1">🍔 הדוגמה הכי מפורסמת:</span>
                  רשת מקדונלד'ס היא מותג אמריקאי עולמי. אבל בישראל – יש סניפים כשרים, אין צ'יזבורגר, ויש רוטב טחינה וסלט קצוץ! המוצר עולמי, אבל מותאם מקומית.
                </div>
              </div>
            `
    },
    {
      title: 'הדברים שחייבים לזכור לבגרות',
      tag: 'נקודות מפתח',
      contentHtml: `
              <ul class="space-y-2 text-xs text-slate-700 leading-relaxed">
                <li class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <strong>רונלד רוברטסון:</strong> החוקר שהדגיש שתאגידים עולמיים חייבים להשתנות כדי להצליח בכל מדינה.
                </li>
                <li class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <strong>גיור פורמטים בטלוויזיה:</strong> לוקחים פורמט עולמי (כמו "האח הגדול" או "הישרדות") ומכניסים אליו דמויות, שירים ונושאים ישראליים.
                </li>
              </ul>
            `
    },
    {
      title: 'בואו ננסה להבין את הדברים בצורה פשוטה יותר',
      tag: 'דימוי מהחיים',
      contentHtml: `
              <div class="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-900">
                <strong>מתכון עולמי עם תבלין מהבית:</strong> הבצק מגיע מחו"ל, אבל התבלינים והתוספות הם בדיוק מה שאתם רגילים לאכול בבית של סבתא!
              </div>
            `
    },
    {
      title: 'דוגמה מעשית מהחיים',
      tag: 'דוגמה מהשטח',
      contentHtml: `
              <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed">
                תוכנית הטלוויזיה "הכוכב הבא" או "משחקי השף" – פורמט טלוויזיוני בינלאומי שמשלב מאכלים ושירים ישראליים אותנטיים.
              </div>
            `
    },
    {
      title: 'איך עונים נכון במבחן וממה להיזהר?',
      tag: 'טיפ לבגרות',
      contentHtml: `
              <div class="p-3 rounded-xl bg-emerald-50 text-emerald-900 text-xs font-bold leading-relaxed">
                הקפידו להראות את שני הצדדים: מה הגיע מחו"ל (הגלובלי) ואיזה שינוי ספציפי עשו בו (הלוקלי).
              </div>
            `
    }
  ],
  questions: [
    {
      question: 'רשת המבורגרים בינלאומית מציעה בישראל מנה עם טחינה ובשר כשר. איזה מושג מודגם כאן?',
      options: [
        'גלוקליזציה (התאמת מותג עולמי לתרבות המקומית)',
        'אמריקניזציה מוחלטת ללא שינוי',
        'מודל פיסק לנמען פסיבי',
        'הומוגניזציה תרבותית'
      ],
      correct: 0,
      hint: 'מותג עולמי (גלובל) שעושה התאמה למקום (לוקאל).',
      explanation: 'נכון מאוד! גלוקליזציה היא השילוב בין הגלובלי למקומי.'
    }
  ]
};
