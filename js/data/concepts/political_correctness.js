export default {
  id: 'political_correctness',
  title: 'תקינות פוליטית',
  arena: 'זירת העל',
  shortDesc: 'אופן ביטוי שמטרתו להימנע מפגיעה בקבוצות או יחידים על רקע מוצא, מין, מעמד ועוד, כדי ליצור שיח מכבד.',
  slides: [
    {
      title: 'מה זה אומר במילים פשוטות?',
      tag: 'ההגדרה הבסיסית',
      contentHtml: `
              <div class="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  <strong>תקינות פוליטית (PC)</strong> - אופן ביטוי שמטרתו להימנע מפגיעה בקבוצות או יחידים בחברה, על רקע מוצא, מין, צבע, העדפה מינית, מעמד חברתי ועוד.
                </p>
                <div class="p-3.5 rounded-2xl bg-amber-50 border border-amber-200">
                  <span class="font-bold text-amber-900 block mb-1">💬 השפה מעצבת מציאות:</span>
                  המושג מדגיש שהשפה היא אבן יסוד בעיצוב משמעויות בתקשורת - איך אנחנו מדברים משפיע על איך אנחנו חושבים.
                </div>
              </div>
            `
    },
    {
      title: 'הדברים שחייבים לזכור לבגרות',
      tag: 'הדילמה המרכזית',
      contentHtml: `
              <ul class="space-y-2 text-xs text-slate-700 leading-relaxed">
                <li class="p-2.5 rounded-xl bg-slate-50 border border-slate-200"><strong>בעד:</strong> יצירת שיח מכבד וסובלני, הגנה על קבוצות מיעוט.</li>
                <li class="p-2.5 rounded-xl bg-slate-50 border border-slate-200"><strong>נגד:</strong> פגיעה בחופש הביטוי, "יפוי" שפה שמסתיר ומעוות מציאות.</li>
                <li class="p-2.5 rounded-xl bg-slate-50 border border-slate-200"><strong>שאלת מפתח:</strong> האם דאגה אמיתית לזכויות מיעוטים, או "מראית עין" שלא משנה את המציאות בפועל?</li>
              </ul>
            `
    },
    {
      title: 'בואו ננסה להבין את הדברים בצורה פשוטה יותר',
      tag: 'דימוי מהחיים',
      contentHtml: `
              <div class="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-900 leading-relaxed">
                <strong>שפה כמו לבוש:</strong> בדיוק כמו שאדם בוחר בגדים לפי הקשר (חתונה, ראיון עבודה), כך גם השפה מותאמת לקהל ולהקשר - השאלה היא האם ההתאמה הזו באמת משנה משהו, או רק "מסווה" את המחשבות האמיתיות.
              </div>
            `
    },
    {
      title: 'איך עונים נכון במבחן וממה להיזהר?',
      tag: 'טיפ לבגרות',
      contentHtml: `
              <div class="p-3 rounded-xl bg-emerald-50 text-emerald-900 text-xs font-bold leading-relaxed">
                אל תציגו את הנושא באופן חד-צדדי - הביאו תמיד את שני צדי הדילמה: כבוד לקבוצות מיעוט מול חשש לפגיעה בחופש הביטוי.
              </div>
            `
    }
  ],
  questions: [
    {
      question: 'מהי הדילמה המרכזית סביב תקינות פוליטית, לפי הלומדה?',
      options: [
        'הרצון ליצור שיח מכבד ולא פוגעני מול החשש לפגיעה בחופש הביטוי',
        'האם להשתמש בעברית או באנגלית בתקשורת',
        'האם לחייב את כל האזרחים לדבר באותה שפה',
        'אין שום דילמה, זהו מושג פשוט וחד-משמעי'
      ],
      correct: 0,
      hint: 'חשבו על שני ערכים חשובים שיכולים להתנגש: כבוד מול חופש.',
      explanation: 'נכון! זו דילמה מהותית בין הרצון להימנע מפגיעה בקבוצות מיעוט לבין החשש שההגבלה על השפה תפגע בחופש הביטוי.'
    }
  ]
};
