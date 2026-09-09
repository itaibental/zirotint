export default {
  id: 'global_village',
  title: 'הכפר הגלובלי',
  arena: 'זירה 2 · גלובליזציה',
  shortDesc: 'מושג של מרשל מקלוהן: התקשורת מכווצת את הזמן והמרחב, כך שכל העולם מתנהג כמו כפר קטן שבו כולם יודעים הכל מיד.',
  slides: [
    {
      title: 'מה זה אומר במילים פשוטות?',
      tag: 'ההגדרה הבסיסית',
      contentHtml: `
              <div class="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  חוקר התקשורת <strong>מרשל מקלוהן</strong> אמר עוד לפני עידן האינטרנט: התקשורת האלקטרונית תהפוך את כל כדור הארץ הגדול ל<strong>"כפר קטן"</strong>.
                </p>
                <div class="p-3.5 rounded-2xl bg-amber-50 border border-amber-200">
                  <span class="font-bold text-amber-900 block mb-1">🏡 למה דווקא "כפר"?</span>
                  בכפר קטן כולם מכירים את כולם, שומעים את אותן חדשות באותו הרגע, ורכילות עוברת תוך שניות מבית לבית. כיום, העולם כולו מתנהג בדיוק ככה בזכות הלייבים והרשתות!
                </div>
              </div>
            `
    },
    {
      title: 'הדברים שחייבים לזכור לבגרות',
      tag: 'כיווץ זמן ומרחב',
      contentHtml: `
              <ul class="space-y-2 text-xs text-slate-700 leading-relaxed">
                <li class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <strong>כיווץ זמן ומרחב:</strong> המרחק הפיזי כבר לא משנה. שידור חי מניו יורק נראה בישראל באותה שבריר שנייה.
                </li>
                <li class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <strong>חוויה קולקטיבית בו-זמנית:</strong> מיליארדי אנשים צופים יחד באותו גמר מונדיאל או אירוויזיון.
                </li>
              </ul>
            `
    },
    {
      title: 'בואו ננסה להבין את הדברים בצורה פשוטה יותר',
      tag: 'דימוי מהחיים',
      contentHtml: `
              <div class="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-900">
                <strong>מדורת השבט העולמית:</strong> פעם אנשים ישבו סביב מדורה בכפר ושמעו סיפורים. היום המסך הוא המדורה, ומיליוני אנשים מכל היבשות יושבים יחד סביב אותו שידור חי ברשת!
              </div>
            `
    },
    {
      title: 'דוגמה מעשית מהחיים',
      tag: 'דוגמה מהשטח',
      contentHtml: `
              <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed">
                כאשר אירע רעש אדמה מעבר לים, תיעודים ראשונים עלו בטיקטוק תוך 2 דקות ומיליונים בעולם עקבו אחרי החילוץ בזמן אמת.
              </div>
            `
    },
    {
      title: 'איך עונים נכון במבחן וממה להיזהר?',
      tag: 'טיפ לבגרות',
      contentHtml: `
              <div class="p-3 rounded-xl bg-emerald-50 text-emerald-900 text-xs font-bold leading-relaxed">
                זכרו לקשור תמיד: מרשל מקלוהן + כיווץ זמן ומרחב + חוויה בו-זמנית משותפת.
              </div>
            `
    }
  ],
  questions: [
    {
      question: 'מי טבע את המושג "הכפר הגלובלי" ומה הייתה כוונתו המרכזית?',
      options: [
        'מרשל מקלוהן – שהתקשורת מכווצת את הזמן והמרחב והעולם מתנהג כקהילה משותפת',
        'ג\'ון פיסק – שהקהל הוא נמען פעיל שמייצר משמעויות',
        'מארק צוקרברג – כשהקים את פייסבוק',
        'עורכי חדשות שרצו לעודד מעבר לגור בכפרים'
      ],
      correct: 0,
      hint: 'החוקר המפורסם שטבע את המושג כבר בשנות ה-60.',
      explanation: 'מדויק! מרשל מקלוהן חזה שהתקשורת האלקטרונית תחבר את כל בני האדם למבנה של כפר בו-זמני.'
    }
  ]
};
