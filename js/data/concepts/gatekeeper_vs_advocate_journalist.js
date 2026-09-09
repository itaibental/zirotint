export default {
  id: 'gatekeeper_vs_advocate_journalist',
  title: 'עיתונאי שומר סף מול עיתונאי פרקליט',
  arena: 'זירה 3 · חדשות וצילום',
  shortDesc: 'שתי תפיסות שונות של תפקיד העיתונאי: "שומר סף" האובייקטיבי והניטרלי, מול "פרקליט" הערכי שמייצג קבוצות חלשות.',
  slides: [
    {
      title: 'מה זה אומר במילים פשוטות?',
      tag: 'ההגדרה הבסיסית',
      contentHtml: `
        <div class="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            קיימות שתי תפיסות תפקיד לעיתונאי: <strong>עיתונאי שומר סף</strong> - "צינור" ניטרלי בין המציאות לקהל, כותב בגוף שלישי, לא מביע דעה. <strong>עיתונאי פרקליט</strong> - נציג של קבוצות חלשות, כותב בגוף ראשון ומביע דעה בגלוי.
          </p>
          <div class="p-3.5 rounded-2xl bg-amber-50 border border-amber-200">
            <span class="font-bold text-amber-900 block mb-1">⚖️ חשוב להדגיש:</span>
            אלו לא "טוב" ו"רע" - אלא שתי תפיסות שונות ולגיטימיות של המקצוע.
          </div>
        </div>
      `
    },
    {
      title: 'הדברים שחייבים לזכור לבגרות',
      tag: 'טבלת השוואה',
      contentHtml: `
        <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed space-y-1">
          <p><strong>שומר סף:</strong> אובייקטיבי, ניטרלי, מציג עובדות בלבד, הקהל שופט בעצמו.</p>
          <p><strong>פרקליט:</strong> ערכי, מחנך, מציג נקודת מבט מסוימת, מנסה להשפיע על הקהל.</p>
        </div>
      `
    },
    {
      title: 'בואו ננסה להבין את הדברים בצורה פשוטה יותר',
      tag: 'דימוי מהחיים',
      contentHtml: `
        <div class="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-900 leading-relaxed">
          <strong>מצלמת אבטחה מול עורך דין:</strong> שומר סף הוא כמו מצלמת אבטחה - מתעד את המציאות כפי שהיא, ללא דעה. פרקליט הוא כמו עורך דין - מציג את הצד שהוא מייצג ומנסה לשכנע.
        </div>
      `
    },
    {
      title: 'איך עונים נכון במבחן וממה להיזהר?',
      tag: 'טיפ לבגרות',
      contentHtml: `
        <div class="p-3 rounded-xl bg-emerald-50 text-emerald-900 text-xs font-bold leading-relaxed">
          שימו לב לגוף הכתיבה: גוף שלישי ("הוא אמר...") מרמז על שומר סף; גוף ראשון ("אני חושב...") מרמז על פרקליט.
        </div>
      `
    }
  ],
  questions: [
    {
      question: 'מהו ההבדל המרכזי בין תפיסת "עיתונאי שומר סף" לתפיסת "עיתונאי פרקליט"?',
      options: [
        'שומר סף שואף לאובייקטיביות ולניטרליות; פרקליט מייצג בגלוי קבוצה או עמדה ומבקש להשפיע',
        'שומר סף כותב רק על ספורט, פרקליט כותב רק על פוליטיקה',
        'שני התפקידים זהים לחלוטין',
        'פרקליט הוא תמיד עיתונאי מוסמך יותר משומר סף'
      ],
      correct: 0,
      hint: 'חשבו על ניטרליות מול הבעת עמדה גלויה.',
      explanation: 'נכון! זהו ההבדל המהותי - עמדת הניטרליות מול מעורבות ערכית וגלויה בסיפור.'
    }
  ]
};
