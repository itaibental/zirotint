export default {
  id: 'localization',
  title: 'לוקליזציה',
  arena: 'זירה 2 · גלובליזציה',
  shortDesc: 'העצמת התרבות, המוזיקה, השפה והיצירה המקומית כתגובת נגד להצפה של תכנים זרים.',
  slides: [
    {
      title: 'מה זה אומר במילים פשוטות?',
      tag: 'ההגדרה הבסיסית',
      contentHtml: `
              <div class="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  <strong>לוקליזציה</strong> (מלשון Local – מקומי) היא הדגשת השורשים והתרבות שלנו כאן בבית.
                </p>
                <div class="p-3.5 rounded-2xl bg-amber-50 border border-amber-200">
                  <span class="font-bold text-amber-900 block mb-1">🇮🇱 שמירה על הבית:</span>
                  למרות שיש נטפליקס ומוזיקה אמריקאית, בני נוער בישראל מאזינים המון למוזיקה ים-תיכונית בעברית, צופים בסדרות מקור כמו "קופה ראשית" ו"פאודה", ומקפידים על תכנים בעברית.
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
                  <strong>תגובת נגד לאמריקניזציה:</strong> ככל שיש יותר הצפה של מוצרים מחו"ל, כך גובר הצורך בחיזוק הזהות והשפה המקומית.
                </li>
                <li class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <strong>חוק הפקות מקור:</strong> חובת ערוצי הטלוויזיה להשקיע ביצירה ישראלית מקורית בעברית.
                </li>
              </ul>
            `
    },
    {
      title: 'בואו ננסה להבין את הדברים בצורה פשוטה יותר',
      tag: 'דימוי מהחיים',
      contentHtml: `
              <div class="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-900">
                <strong>העוגן הבטוח בים הסוער:</strong> כשיש מבול של מידע מכל העולם, אנשים מחפשים את המוכר והחם – שירים בשפה שלהם וסיפורים שקרו בשכונה שלהם.
              </div>
            `
    },
    {
      title: 'דוגמה מעשית מהחיים',
      tag: 'דוגמה מהשטח',
      contentHtml: `
              <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed">
                הסדרה "קופה ראשית" – הצלחה ישראלית ענקית שמבוססת כולה על הומור, שפה וטיפוסים שקיימים אך ורק בסופרמרקט בישראל.
              </div>
            `
    },
    {
      title: 'איך עונים נכון במבחן וממה להיזהר?',
      tag: 'טיפ לבגרות',
      contentHtml: `
              <div class="p-3 rounded-xl bg-emerald-50 text-emerald-900 text-xs font-bold leading-relaxed">
                זכרו: לוקליזציה אינה התבדלות מהעולם, אלא חיזוק ושמירה על הזהות המקומית בתוך עולם גלובלי.
              </div>
            `
    }
  ],
  questions: [
    {
      question: 'כיצד ניתן להסביר את ההצלחה העצומה של סדרות ישראליות מקוריות (כמו "קופה ראשית") בעידן נטפליקס?',
      options: [
        'כתהליך של לוקליזציה – חיפוש של הקהל אחר שפה, זהות והווי מקומי מוכר',
        'כי נטפליקס חסומה לצפייה בישראל',
        'כי חל איסור לצפות בסדרות בשפות זרות',
        'זה נובע אך ורק מטעות של מפיקים'
      ],
      correct: 0,
      hint: 'הקהל מחפש את התרבות והשפה המקומית שלו (לוקאל).',
      explanation: 'נכון מאוד! לוקליזציה מבטאת את הצורך של הקהל בחיזוק הזהות והתרבות המקומית כתגובת נגד להצפה העולמית.'
    }
  ]
};
