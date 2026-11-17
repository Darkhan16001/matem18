
"use strict";

const $ = id => document.getElementById(id);
const M = String.raw;

const lesson = {
  title: "Логарифмдік теңдеулер және олардың жүйелері",
  goal: "Логарифмдік теңдеулерді анықтама бойынша, логарифм қасиеттерімен, алмастыру әдісімен және жүйе құру арқылы шешуді меңгеру. Анықталу шарттарын тексеріп, бөгде түбірлерді алып тастау."
};

// =======================================
// 5 ТЕОРИЯЛЫҚ ТҮСІНДІРМЕ
// =======================================

const theory = [
  {
    title: "Логарифмдік теңдеудің анықтамасы",

    definition:
      "Айнымалысы логарифмнің аргументінде немесе негізінде орналасқан теңдеу логарифмдік теңдеу деп аталады. Логарифмдік теңдеуді шешкенде аргументтің оң болу шартын міндетті түрде тексереміз.",

    explain:
      "Логарифмдік теңдеу — логарифм мәні белгілі болғанда белгісіз аргументті табуға арналған теңдеу. Мысалы, x минус бір өрнегінің екі негізіндегі логарифмі үшке тең болсын. Бұл дегеніміз, екі санының үшінші дәрежесі x минус бірге тең деген сөз. Екінің кубы сегіз болатындықтан, x минус бір сегізге тең, ал x тоғызға тең болады. Табылған тоғыз саны бастапқы логарифмнің анықталу облысына кіреді.",

    rule:
      "Алдымен аргументтің оң болу шартын жазамыз. Содан кейін логарифмнің анықтамасын қолданып теңдеуді шешеміз және түбірді тексереміз.",

    formula:
      M`\log_a f(x)=c\iff f(x)=a^c`,

    steps: [
      M`\log_2(x-1)=3`,
      M`x-1>0`,
      M`x-1=2^3`,
      M`x-1=8`,
      M`x=9`
    ],

    warning:
      "Логарифмнің анықталу облысын тексермей жауап жазуға болмайды."
  },

  {
    title: "Бірдей негіздегі логарифмдер",

    definition:
      "Егер теңдеудің екі жағындағы логарифмдердің негіздері бірдей болса, олардың аргументтерін теңестіруге болады. Бірақ әр аргументтің оң болуы міндетті шарт.",

    explain:
      "Мысалы, x плюс төрт өрнегінің үш негізіндегі логарифмі жеті санының үш негізіндегі логарифміне тең делік. Екі логарифмнің негізі бірдей, сондықтан аргументтер тең болады. x плюс төрт жетіге тең, осыдан x үшке тең. Үш санын бастапқы теңдеуге қойып тексерсек, сол және оң жақта бірдей логарифм алынады.",

    rule:
      "Бірдей негіздегі екі логарифмнің теңдігі аргументтердің теңдігін білдіреді. Әуелі екі аргументтің де оң екенін тексереміз.",

    formula:
      M`\log_a f(x)=\log_a g(x)\iff f(x)=g(x)`,

    steps: [
      M`\log_3(x+4)=\log_3 7`,
      M`x+4>0`,
      M`x+4=7`,
      M`x=3`,
      M`3+4=7`
    ],

    warning:
      "Аргументтерді теңестіру үшін логарифмдердің негіздері бірдей және жарамды болуы керек."
  },

  {
    title: "Логарифм қасиеттерін пайдалану",

    definition:
      "Логарифмдер қосындысын көбейтіндінің логарифміне, ал айырмасын бөліндінің логарифміне айналдыру арқылы теңдеуді ықшамдауға болады.",

    explain:
      "Мысалы, x санының екі негізіндегі логарифміне x минус екі өрнегінің екі негізіндегі логарифмін қосайық. Нәтиже үшке тең болсын. Алдымен x және x минус екі аргументтерінің оң болуын тексереміз, сондықтан x екіден үлкен. Көбейтінді қасиеті арқылы логарифмдерді біріктіреміз. Одан кейін квадрат теңдеу шығады. Алынған екі түбірдің біреуі анықталу шартын бұзады, сондықтан тек жарамды түбір жауапқа жазылады.",

    rule:
      "Логарифмдерді біріктірер алдында барлық бастапқы аргументтердің оң болу шарттарын сақтаймыз. Соңында әр түбірді тексереміз.",

    formula:
      M`\log_a u+\log_a v=\log_a(uv)`,

    steps: [
      M`\log_2 x+\log_2(x-2)=3`,
      M`x>2`,
      M`x(x-2)=8`,
      M`x^2-2x-8=0`,
      M`(x-4)(x+2)=0`,
      M`x=4`
    ],

    warning:
      "x = −2 түбірі жарамсыз, өйткені логарифм аргументтері оң болмайды."
  },

  {
    title: "Жаңа айнымалы енгізу әдісі",

    definition:
      "Егер теңдеуде бір логарифмдік өрнек бірнеше рет кездессе, оны жаңа айнымалымен алмастыруға болады. Осылайша логарифмдік теңдеу қарапайым квадрат теңдеуге айналады.",

    explain:
      "Мысалы, x санының екі негізіндегі логарифмінің квадраты мен сол логарифмнің көбейтіндісі кездесетін теңдеуді қарастырайық. Логарифмді t әрпімен белгілейміз. Сонда квадрат теңдеу пайда болады. Оны шешіп t-нің екі мәнін табамыз. Әр мән үшін логарифмді қайта жазып, x санын анықтаймыз. Соңында екі түбірдің де оң екенін тексереміз.",

    rule:
      "Алмастыру енгізгенде бастапқы логарифмнің анықталу шартын жоғалтпау қажет. Жаңа айнымалы табылған соң бастапқы айнымалыға қайта ораламыз.",

    formula:
      M`t=\log_2 x`,

    steps: [
      M`(\log_2 x)^2-3\log_2 x+2=0`,
      M`t^2-3t+2=0`,
      M`(t-1)(t-2)=0`,
      M`t=1\quad\text{немесе}\quad t=2`,
      M`x=2\quad\text{немесе}\quad x=4`
    ],

    warning:
      "Жаңа айнымалының жауабын x жауабы деп қате жазбаңдар."
  },

  {
    title: "Логарифмдік теңдеулер жүйелері",

    definition:
      "Бірнеше логарифмдік теңдеуді бір уақытта қанағаттандыратын айнымалыларды табу логарифмдік теңдеулер жүйесін шешу деп аталады. Әр теңдеудегі барлық логарифм аргументтері оң болуы тиіс.",

    explain:
      "Мысалы, x пен y сандарының екі негізіндегі логарифмдерінің қосындысы үшке, айырмасы бірге тең болсын. x пен y оң болғандықтан, логарифмдерді u және v жаңа айнымалыларымен алмастыруға болады. Сонда екі сызықтық теңдеуден тұратын жүйе шығады. Жүйені шешкен соң логарифмдердің мәндері екі және бір екені анықталады. Демек, x төртке, y екіге тең болады. Бұл мәндерді бастапқы жүйеге қойып тексереміз.",

    rule:
      "Әуелі анықталу шарттарын жазамыз. Жүйені алмастыру арқылы шешеміз, содан кейін екі теңдеуге де қойып тексереміз.",

    formula:
      M`\begin{cases}
      \log_2 x+\log_2 y=3\\
      \log_2 x-\log_2 y=1
      \end{cases}`,

    steps: [
      M`x>0,\quad y>0`,
      M`u=\log_2 x,\quad v=\log_2 y`,
      M`\begin{cases}u+v=3\\u-v=1\end{cases}`,
      M`u=2,\quad v=1`,
      M`x=4,\quad y=2`
    ],

    warning:
      "Жүйенің шешімі екі теңдеуді де бір уақытта қанағаттандыруы керек."
  }
];

// =======================================
// 10 КОНСПЕКТ — 20 ӨЗІНДІК ЕСЕП
// =======================================

const notes = [
  {
    title: "Логарифмдік теңдеудің анықтамасы",
    text:
      "Логарифмдік теңдеуде айнымалы логарифм аргументінде немесе негізінде кездеседі. Логарифмнің анықтамасын пайдаланып, мұндай теңдеуді көрсеткіштік түрге ауыстыруға болады.",
    formula: M`\log_a f(x)=b\iff f(x)=a^b`,
    example: [
      M`\log_2 x=4`,
      M`x=2^4`,
      M`x=16`
    ],
    self: [
      {
        q: M`\log_3 x=2`,
        steps: [M`x=3^2`],
        answer: M`x=9`
      },
      {
        q: M`\log_5 x=3`,
        steps: [M`x=5^3`],
        answer: M`x=125`
      }
    ]
  },

  {
    title: "Анықталу облысы",
    text:
      "Логарифм аргументі міндетті түрде оң болуы қажет. Егер аргумент айнымалы өрнек болса, осы өрнектен қатаң теңсіздік құрамыз. Теңдеуді шешкен соң түбірдің осы шартты қанағаттандыратынын тексереміз.",
    formula: M`f(x)>0`,
    example: [
      M`\log_2(x-3)=2`,
      M`x>3`,
      M`x-3=4`,
      M`x=7`
    ],
    self: [
      {
        q: M`\log_2(x-1)=3`,
        steps: [M`x>1`,M`x-1=8`],
        answer: M`x=9`
      },
      {
        q: M`\log_3(x+2)=2`,
        steps: [M`x>-2`,M`x+2=9`],
        answer: M`x=7`
      }
    ]
  },

  {
    title: "Бірдей негіздегі логарифмдер",
    text:
      "Егер теңдеудің екі жағында негіздері бірдей логарифмдер болса, олардың аргументтерін теңестіреміз. Бастапқы аргументтер нөлден үлкен болуы тиіс.",
    formula: M`\log_a u=\log_a v\iff u=v`,
    example: [
      M`\log_2(x+3)=\log_2 8`,
      M`x+3=8`,
      M`x=5`
    ],
    self: [
      {
        q: M`\log_3(x+1)=\log_3 7`,
        steps: [M`x+1=7`],
        answer: M`x=6`
      },
      {
        q: M`\log_5(2x-1)=\log_5 9`,
        steps: [M`2x-1=9`,M`2x=10`],
        answer: M`x=5`
      }
    ]
  },

  {
    title: "Логарифмдер қосындысы",
    text:
      "Негіздері бірдей екі логарифмнің қосындысын бір көбейтіндінің логарифміне айналдырамыз. Бұл әдісте екі аргументтің де оң болуы міндетті.",
    formula: M`\log_a u+\log_a v=\log_a(uv)`,
    example: [
      M`\log_2 x+\log_2 4=5`,
      M`\log_2(4x)=5`,
      M`4x=32`,
      M`x=8`
    ],
    self: [
      {
        q: M`\log_2 x+\log_2 2=4`,
        steps: [M`2x=16`],
        answer: M`x=8`
      },
      {
        q: M`\log_3 x+\log_3 9=4`,
        steps: [M`9x=81`],
        answer: M`x=9`
      }
    ]
  },

  {
    title: "Логарифмдер айырмасы",
    text:
      "Бірдей негіздегі логарифмдер айырмасы бөліндінің логарифміне тең болады. Аргументтердің оң болуын тексеріп, алынған теңдеуді шешеміз.",
    formula: M`\log_a u-\log_a v=\log_a\frac uv`,
    example: [
      M`\log_2 x-\log_2 4=2`,
      M`\log_2\frac x4=2`,
      M`\frac x4=4`,
      M`x=16`
    ],
    self: [
      {
        q: M`\log_2 x-\log_2 2=3`,
        steps: [M`\frac x2=8`],
        answer: M`x=16`
      },
      {
        q: M`\log_3 x-\log_3 3=2`,
        steps: [M`\frac x3=9`],
        answer: M`x=27`
      }
    ]
  },

  {
    title: "Квадрат теңдеуге келтіру",
    text:
      "Логарифмдік теңдеуді түрлендіргенде квадрат теңдеу шығуы мүмкін. Алдымен квадрат теңдеудің түбірлерін табамыз. Кейін бастапқы логарифмнің анықталу облысы бойынша жарамсыз түбірлерді алып тастаймыз.",
    formula: M`\log_2(x^2-5x+8)=2`,
    example: [
      M`x^2-5x+8=4`,
      M`x^2-5x+4=0`,
      M`(x-1)(x-4)=0`,
      M`x=1,\quad x=4`
    ],
    self: [
      {
        q: M`\log_2(x^2-3x+4)=1`,
        steps: [M`x^2-3x+4=2`,M`(x-1)(x-2)=0`],
        answer: M`x=1,\quad x=2`
      },
      {
        q: M`\log_3(x^2-4x+6)=1`,
        steps: [M`x^2-4x+6=3`,M`(x-1)(x-3)=0`],
        answer: M`x=1,\quad x=3`
      }
    ]
  },

  {
    title: "Бөгде түбірлерді тексеру",
    text:
      "Логарифмдік өрнектерді түрлендіргенде кейбір алынған түбірлер бастапқы теңдеуге жарамсыз болуы мүмкін. Әр логарифмнің аргументін тексеріп, оң болмайтын мәндерді жауаптан алып тастаймыз.",
    formula: M`\log_2 x+\log_2(x-2)=3`,
    example: [
      M`x>2`,
      M`x(x-2)=8`,
      M`(x-4)(x+2)=0`,
      M`x=4`
    ],
    self: [
      {
        q: M`\log_2 x+\log_2(x-2)=3`,
        steps: [M`x>2`,M`(x-4)(x+2)=0`],
        answer: M`x=4`
      },
      {
        q: M`\log_3 x+\log_3(x-2)=2`,
        steps: [M`x>2`,M`x(x-2)=9`,M`x=1+\sqrt{10}`],
        answer: M`x=1+\sqrt{10}`
      }
    ]
  },

  {
    title: "Жаңа айнымалы енгізу",
    text:
      "Бір логарифмдік өрнек бірнеше рет кездессе, оны t айнымалысымен алмастырамыз. Одан кейін квадрат теңдеуді шешіп, әр табылған t мәнінен бастапқы x айнымалысын анықтаймыз.",
    formula: M`t=\log_2 x`,
    example: [
      M`(\log_2 x)^2-3\log_2 x+2=0`,
      M`t^2-3t+2=0`,
      M`t=1,\quad t=2`,
      M`x=2,\quad x=4`
    ],
    self: [
      {
        q: M`(\log_2 x)^2-5\log_2 x+6=0`,
        steps: [M`t^2-5t+6=0`,M`t=2,\quad t=3`],
        answer: M`x=4,\quad x=8`
      },
      {
        q: M`(\log_3 x)^2-3\log_3 x+2=0`,
        steps: [M`t^2-3t+2=0`,M`t=1,\quad t=2`],
        answer: M`x=3,\quad x=9`
      }
    ]
  },

  {
    title: "Логарифмдік теңдеулер жүйесі",
    text:
      "Логарифмдік теңдеулер жүйесінде барлық теңдеулер бір мезгілде орындалуы керек. Алдымен аргументтердің оң болуын тексереміз. Содан кейін алмастыру арқылы жүйені шешеміз.",
    formula: M`\begin{cases}\log_2 x+\log_2 y=3\\\log_2 x-\log_2 y=1\end{cases}`,
    example: [
      M`u=\log_2 x,\quad v=\log_2 y`,
      M`u+v=3,\quad u-v=1`,
      M`u=2,\quad v=1`,
      M`x=4,\quad y=2`
    ],
    self: [
      {
        q: M`\begin{cases}\log_2 x+\log_2 y=4\\\log_2 x-\log_2 y=2\end{cases}`,
        steps: [M`u=3,\quad v=1`],
        answer: M`(x;y)=(8;2)`
      },
      {
        q: M`\begin{cases}\log_3 x+\log_3 y=3\\\log_3 x-\log_3 y=1\end{cases}`,
        steps: [M`u=2,\quad v=1`],
        answer: M`(x;y)=(9;3)`
      }
    ]
  },

  {
    title: "Теңдеулерді тексеру және қорытындылау",
    text:
      "Логарифмдік теңдеуді шешудің негізгі реті: анықталу шартын жазу, логарифм қасиеттерін қолдану, теңдеуді шешу, алынған түбірлерді тексеру және дұрыс жауапты жазу. Жүйелерде әр теңдеуді қатар тексеру қажет.",
    formula: M`\log_a f(x)=b\iff f(x)=a^b`,
    example: [
      M`\log_5(x+1)=2`,
      M`x+1=25`,
      M`x=24`,
      M`24+1>0`
    ],
    self: [
      {
        q: M`\log_2(x+4)=4`,
        steps: [M`x+4=16`],
        answer: M`x=12`
      },
      {
        q: M`\log_3(2x+1)=2`,
        steps: [M`2x+1=9`],
        answer: M`x=4`
      }
    ]
  }
];

// =======================================
// 4 ДЕҢГЕЙ — 20 ЕСЕП
// =======================================

const levels = [
  {
    name: "I деңгей — Жеңіл",
    points: 5,
    tasks: [
      {
        q: M`\log_2 x=3`,
        value: 8,
        steps: [M`x=2^3`, M`x=8`]
      },
      {
        q: M`\log_3 x=2`,
        value: 9,
        steps: [M`x=3^2`, M`x=9`]
      },
      {
        q: M`\log_5 x=2`,
        value: 25,
        steps: [M`x=5^2`, M`x=25`]
      },
      {
        q: M`\log_2(x-1)=2`,
        value: 5,
        steps: [M`x-1=4`, M`x=5`]
      },
      {
        q: M`\log_3(x+2)=2`,
        value: 7,
        steps: [M`x+2=9`, M`x=7`]
      }
    ]
  },

  {
    name: "II деңгей — Орташа",
    points: 10,
    tasks: [
      {
        q: M`\log_2(2x-2)=3`,
        value: 5,
        steps: [M`2x-2=8`, M`2x=10`, M`x=5`]
      },
      {
        q: M`\log_3(3x+3)=3`,
        value: 8,
        steps: [M`3x+3=27`, M`3x=24`, M`x=8`]
      },
      {
        q: M`\log_2 x+\log_2 4=5`,
        value: 8,
        steps: [M`4x=32`, M`x=8`]
      },
      {
        q: M`\log_3 x-\log_3 3=2`,
        value: 27,
        steps: [M`\frac x3=9`, M`x=27`]
      },
      {
        q: M`\log_{0.5}x=-3`,
        value: 8,
        steps: [M`x=(0.5)^{-3}`, M`x=8`]
      }
    ]
  },

  {
    name: "III деңгей — Қиын",
    points: 15,
    tasks: [
      {
        q: M`\log_2 x+\log_2(x-2)=3`,
        value: 4,
        steps: [
          M`x>2`,
          M`x(x-2)=8`,
          M`(x-4)(x+2)=0`,
          M`x=4`
        ]
      },
      {
        q: M`\log_3(x+1)=\log_3 10`,
        value: 9,
        steps: [M`x+1=10`, M`x=9`]
      },
      {
        q: M`\log_2(x^2-3x+4)=1`,
        values: [1, 2],
        steps: [
          M`x^2-3x+4=2`,
          M`x^2-3x+2=0`,
          M`(x-1)(x-2)=0`,
          M`x=1,\quad x=2`
        ]
      },
      {
        q: M`\log_2 x-\log_2(x-2)=2`,
        value: 8 / 3,
        steps: [
          M`x>2`,
          M`\frac{x}{x-2}=4`,
          M`x=4x-8`,
          M`x=\frac83`
        ]
      },
      {
        q: M`\log_2(3x-1)=\log_2(x+5)`,
        value: 3,
        steps: [
          M`3x-1=x+5`,
          M`2x=6`,
          M`x=3`
        ]
      }
    ]
  },

  {
    name: "IV деңгей — Өте қиын",
    points: 20,
    tasks: [
      {
        q: M`(\log_2 x)^2-5\log_2 x+6=0`,
        values: [4, 8],
        steps: [
          M`t=\log_2 x`,
          M`t^2-5t+6=0`,
          M`t=2,\quad t=3`,
          M`x=4,\quad x=8`
        ]
      },
      {
        q: M`(\log_3 x)^2-3\log_3 x+2=0`,
        values: [3, 9],
        steps: [
          M`t=\log_3 x`,
          M`t^2-3t+2=0`,
          M`t=1,\quad t=2`,
          M`x=3,\quad x=9`
        ]
      },
      {
        q: M`\log_2(x-1)+\log_2(x+2)=2`,
        value: (-1 + Math.sqrt(25)) / 2,
        steps: [
          M`x>1`,
          M`(x-1)(x+2)=4`,
          M`x^2+x-6=0`,
          M`(x+3)(x-2)=0`,
          M`x=2`
        ]
      },
      {
        q: M`\log_3(x+2)-\log_3(x-2)=1`,
        value: 4,
        steps: [
          M`x>2`,
          M`\frac{x+2}{x-2}=3`,
          M`x+2=3x-6`,
          M`x=4`
        ]
      },
      {
        q: M`\log_2(x-1)=\log_2(7-x)`,
        value: 4,
        steps: [
          M`1<x<7`,
          M`x-1=7-x`,
          M`2x=8`,
          M`x=4`
        ]
      }
    ]
  }
];

// Ескерту:
// Бірнеше түбірі бар есептерге
// values: [бірінші, екінші] қолданылады.
// Оқушы екі санды үтірлі нүктемен енгізеді.

// =======================================
// 15 ОЙЫН СҰРАҒЫ
// =======================================

const quiz = [
  {
    q: "Логарифмдік теңдеуде ең алдымен не тексеріледі?",
    options: [
      "Түбір саны",
      "Анықталу облысы",
      "Квадрат түбір",
      "Функцияның түсі"
    ],
    correct: 1
  },
  {
    q: "log₂x = 3 теңдеуінің түбірі?",
    options: ["3", "6", "8", "9"],
    correct: 2
  },
  {
    q: "Логарифм аргументінің шарты қандай?",
    options: [
      "Аргумент оң",
      "Аргумент теріс",
      "Аргумент нөл",
      "Кез келген сан"
    ],
    correct: 0
  },
  {
    q: "log₃(x+1)=2 теңдеуінің түбірі?",
    options: ["7", "9", "6", "8"],
    correct: 3
  },
  {
    q: "Бірдей негіздегі логарифмдер тең болса?",
    options: [
      "Негіздер қосылады",
      "Аргументтер теңестіріледі",
      "Көрсеткіштер көбейеді",
      "Жауап болмайды"
    ],
    correct: 1
  },
  {
    q: "log₂x + log₂4 = 5 теңдеуінің түбірі?",
    options: ["2", "4", "8", "16"],
    correct: 2
  },
  {
    q: "log₂(x−3) анықталуы үшін?",
    options: [
      "x > 3",
      "x < 3",
      "x = 3",
      "x ≥ 0"
    ],
    correct: 0
  },
  {
    q: "log₅x = 2 теңдеуінің түбірі?",
    options: ["5", "10", "50", "25"],
    correct: 3
  },
  {
    q: "Логарифмдер айырмасы қандай амалға келеді?",
    options: [
      "Қосуға",
      "Бөліндіге",
      "Көбейтіндіге",
      "Түбірге"
    ],
    correct: 1
  },
  {
    q: "log₂(x−1)=3 теңдеуінің түбірі?",
    options: ["7", "8", "9", "10"],
    correct: 2
  },
  {
    q: "Бөгде түбір дегеніміз не?",
    options: [
      "Бастапқы теңдеуге жарамсыз түбір",
      "Дұрыс түбір",
      "Нөлге тең түбір",
      "Оң түбір"
    ],
    correct: 0
  },
  {
    q: "log₃x = 0 теңдеуінің түбірі?",
    options: ["0", "3", "9", "1"],
    correct: 3
  },
  {
    q: "log₂x − log₂2 = 3 теңдеуінің түбірі?",
    options: ["8", "16", "4", "32"],
    correct: 1
  },
  {
    q: "log₂x + log₂(x−2)=3 теңдеуінің жарамды түбірі?",
    options: ["−2", "2", "4", "8"],
    correct: 2
  },
  {
    q: "Логарифмдік теңдеулер жүйесінде шешім нені қанағаттандыруы керек?",
    options: [
      "Жүйедегі барлық теңдеуді",
      "Тек бірінші теңдеуді",
      "Тек екінші теңдеуді",
      "Тек бір логарифмді"
    ],
    correct: 0
  }
];

// =======================================
// ҮЙ ЖҰМЫСЫ
// =======================================

const homework = [
  {
    title: "1. Логарифмдік теңдеулер",
    text:
      "Төмендегі теңдеулерді логарифмнің анықтамасы және қасиеттері арқылы шешіңдер. Әр есепте анықталу шартын және түбірді тексеру қадамын жазыңдар.",
    formulas: [
      M`\log_2(3x-1)=4`,
      M`\log_3(x+5)=3`,
      M`\log_2 x+\log_2(x-4)=5`
    ]
  },
  {
    title: "2. Логарифмдік теңдеулер жүйесі",
    text:
      "Жүйелерді жаңа айнымалы енгізу әдісімен шешіңдер. Барлық аргументтердің оң болуын тексеріп, алынған жұптарды бастапқы жүйелерге қойып тексеріңдер.",
    formulas: [
      M`\begin{cases}\log_2 x+\log_2 y=5\\\log_2 x-\log_2 y=1\end{cases}`,
      M`\begin{cases}\log_3 x+\log_3 y=4\\\log_3 x-\log_3 y=2\end{cases}`
    ]
  },
  {
    title: "3. Теориялық тапсырма",
    text:
      "«Логарифмдік теңдеулерді шешу жолдары» тақырыбында 8–10 сөйлем жазыңдар. Анықталу облысы, жаңа айнымалы енгізу және бөгде түбірді тексеру туралы түсіндіріңдер. Келесі сабақта бір есепті тақтада ауызша қорғаңдар.",
    formulas: [
      M`\log_a f(x)=b`,
      M`f(x)>0`
    ]
  }
];

// =======================================
// 37 СЛАЙД
// =======================================

const slides = [{type:"intro",title:"Кіріспе"}];

theory.forEach((_,i)=>slides.push({
  type:"theory",index:i,title:`Түсіндірме ${i+1}`
}));

notes.forEach((_,i)=>slides.push({
  type:"note",index:i,title:`Конспект ${i+1}`
}));

levels.forEach((_,i)=>slides.push({
  type:"level",index:i,title:`${i+1}-деңгей`
}));

quiz.forEach((_,i)=>slides.push({
  type:"game",index:i,
  title:`${i%3+1}-топ, ${i+1}-сұрақ`
}));

slides.push(
  {type:"homework",title:"Үй жұмысы"},
  {type:"finish",title:"Қорытынды"}
);

// =======================================
// САЙТ КҮЙІ
// =======================================

let page = 0;
let individualScore = 0;
let teamScores = [0,0,0];

const completed = new Set();
const gameAnswers = new Map();

const TOTAL_SECONDS = 4800;
let secondsLeft = TOTAL_SECONDS;
let timerID = null;
let deadline = 0;

// =======================================
// HTML ҚОРҒАУ
// =======================================

function safe(value) {
  return String(value).replace(/[&<>"']/g,ch=>({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#39;"
  })[ch]);
}

// =======================================
// ФОРМУЛАНЫ ДАЙЫНДАУ
// =======================================

// Негіздегі күрделі бөлшектерді
// ықшам жазуға келтіреміз.
// \boxed қолданылмайды.

function normalizeMath(value) {
  return String(value)
    .replace(/\\boxed\{([^{}]*)\}/g,"$1")
    .replaceAll("\\log_{\\frac13}","\\log_{1/3}")
    .replaceAll("\\text{немесе}","\\lor");
}

// HTML талдағышы математикалық
// < және > таңбаларын бұзбауы үшін
// TeX мәтінін кодтап сақтаймыз.

function math(tex) {
  const encoded = encodeURIComponent(
    normalizeMath(tex)
  );

  return `<div class="math" data-tex="${encoded}"></div>`;
}

// =======================================
// MATHJAX SVG
// =======================================

let formulaVersion = 0;
let formulaQueue = Promise.resolve();

function drawFormulas() {
  const version = ++formulaVersion;

  const elements = Array.from(
    $("content").querySelectorAll(".math[data-tex]")
  );

  // MathJax жүктелмесе,
  // бастапқы мәтін экраннан жоғалмайды.
  elements.forEach(el=>{
    el.textContent = decodeURIComponent(el.dataset.tex);
    el.classList.add("fallback");
  });

  formulaQueue = formulaQueue.then(async()=>{
    if (!window.MathJax) return;

    await MathJax.startup.promise;

    if (typeof MathJax.tex2svgPromise !== "function") {
      return;
    }

    for (const el of elements) {
      if (version !== formulaVersion) return;
      if (!el.isConnected) continue;

      const tex = decodeURIComponent(el.dataset.tex);

      try {
        const result = await MathJax.tex2svgPromise(
          tex,{display:true}
        );

        if (version !== formulaVersion || !el.isConnected) {
          return;
        }

        el.replaceChildren(result);
        el.classList.remove("fallback");
        el.removeAttribute("data-tex");

      } catch(error) {
        console.warn("Формула қатесі:",tex,error);
        el.textContent = tex;
        el.classList.add("fallback");
      }
    }
  }).catch(error=>{
    console.warn("MathJax қатесі:",error);
  });
}

// =======================================
// КАРТОЧКАЛАР
// =======================================

function card(color,title,body) {
  return `<section class="card ${color}">
    <h3>${safe(title)}</h3>${body}
  </section>`;
}

function stepsHTML(items) {
  return items.map((item,i)=>`
    <div class="step">
      <strong>${i+1}-қадам</strong>
      ${math(item)}
    </div>
  `).join("");
}

function selfHTML(items,noteIndex) {
  return items.map((task,i)=>{
    const id=`self_${noteIndex}_${i}`;

    return `<section class="self-task">
      <h3>✏️ ${i+1}-өзіндік есеп</h3>
      ${math(task.q)}
      <p>Алдымен дәптерге шығарыңдар.</p>
      <button class="action" data-toggle="${id}">
        Шешу жолын көрсету
      </button>
      <div class="solution" id="${id}" hidden>
        ${stepsHTML(task.steps)}
        <h3>Дұрыс жауап</h3>
        ${math(task.answer)}
      </div>
    </section>`;
  }).join("");
}

// =======================================
// КІРІСПЕ
// =======================================

function introHTML() {
  return `<div class="slide">
    <div class="eyebrow">
      МАТЕМАТИКА • 1 КУРС • 80 МИНУТ
    </div>

    <h1 class="gradient">
      §17. ${safe(lesson.title)}
    </h1>

    ${card("blue","Сабақтың мақсаты",`
      <p>${safe(lesson.goal)}</p>
    `)}

    ${card("gold","Негізгі формула",
      math(M`\log_a f(x)=b\iff f(x)=a^b`)
    )}

    ${card("purple","Ең маңызды шарт",
      math(M`f(x)>0`)
    )}

    ${card("green","Сабақ бөлімдері",`
      <p>5 теориялық түсіндірме</p>
      <p>10 конспект және 20 өзіндік есеп</p>
      <p>4 деңгей бойынша 20 есеп</p>
      <p>3 топқа арналған 15 сұрақ</p>
      <p>Үй жұмысы және қорытынды</p>
    `)}

    ${card("blue","80 минуттық жоспар",`
      <p>Кіріспе — 5 минут</p>
      <p>Түсіндірмелер — 20 минут</p>
      <p>Конспект — 15 минут</p>
      <p>Деңгейлік есептер — 20 минут</p>
      <p>Топтық ойын — 15 минут</p>
      <p>Үй жұмысы мен қорытынды — 5 минут</p>
    `)}
  </div>`;
}

// =======================================
// ТҮСІНДІРМЕ
// =======================================

function theoryHTML(i) {
  const t=theory[i];

  return `<div class="slide">
    <div class="eyebrow">ТҮСІНДІРМЕ ${i+1}/5</div>
    <h2>${safe(t.title)}</h2>

    ${card("blue","Анықтама",
      `<p>${safe(t.definition)}</p>`)}

    ${card("purple","Толық түсіндірме",
      `<p>${safe(t.explain)}</p>`)}

    ${card("green","Ереже",
      `<p>${safe(t.rule)}</p>`)}

    ${card("gold","Формула",math(t.formula))}

    ${card("green","Толық шығарылған мысал",
      stepsHTML(t.steps))}

    ${card("red","Маңызды ескерту",
      `<p>${safe(t.warning)}</p>`)}
  </div>`;
}

// =======================================
// КОНСПЕКТ
// =======================================

function noteHTML(i) {
  const n=notes[i];

  return `<div class="slide">
    <div class="eyebrow">КОНСПЕКТ ${i+1}/10</div>
    <h2>${safe(n.title)}</h2>

    <div class="notebook">
      <h3>✍ Дәптерге жазып алыңдар</h3>
      <p>${safe(n.text)}</p>
    </div>

    ${card("gold","Формула",math(n.formula))}
    ${card("green","Шығарылған мысал",
      stepsHTML(n.example))}

    <div class="eyebrow">ӨЗІНДІК ЖҰМЫС</div>
    <h2>Екі есеп</h2>
    ${selfHTML(n.self,i)}
  </div>`;
}

// =======================================
// ДЕҢГЕЙЛІК ЕСЕПТЕР
// =======================================

function levelHTML(i) {
  const level=levels[i];

  return `<div class="slide">
    <div class="eyebrow">ДЕҢГЕЙ ${i+1}/4</div>
    <h2>📐 ${safe(level.name)}</h2>

    <div class="level-header">
      <span>5 есеп</span>
      <span>Дұрыс жауап: +${level.points} ұпай</span>
    </div>

    <p>
      Бір түбірі бар есепке сан енгізіңдер.
      Екі түбірі бар есепте екі санды
      нүктелі үтірмен жазыңдар: 4;8.
      Бөлшекке 8/3 түрін пайдалануға болады.
    </p>

    <div class="level-grid">
      ${level.tasks.map((task,j)=>{
        const key=`${i}_${j}`;
        const done=completed.has(key);

        return `<section class="level-task">
          <h3>${j+1}-есеп</h3>
          ${math(task.q)}

          <div class="answer-row">
            <input id="answer_${key}"
              type="text"
              placeholder="${task.values?'Мысалы: 4;8':'Жауап'}"
              ${done?"disabled":""}>

            <button data-check="${key}"
              ${done?"disabled":""}>
              ${done?"✓ Дұрыс":"Тексеру"}
            </button>
          </div>

          <p id="feedback_${key}"
            class="feedback ${done?"correct":""}">
            ${done
              ? `✓ +${level.points} ұпай`
              : "Жауапты енгізіңдер."}
          </p>

          <button class="action"
            data-toggle="solution_${key}">
            Шешу жолын көрсету
          </button>

          <div class="solution"
            id="solution_${key}" hidden>
            ${stepsHTML(task.steps)}
            <h3>Дұрыс жауап</h3>
            ${task.values
              ? task.values.join("; ")
              : String(task.value)}
          </div>
        </section>`;
      }).join("")}
    </div>
  </div>`;
}

// =======================================
// ТОПТЫҚ ОЙЫН
// =======================================

function gameHTML(i) {
  const q=quiz[i];
  const active=i%3;
  const chosen=gameAnswers.get(i);

  return `<div class="slide">
    <div class="eyebrow">ТОПТЫҚ ОЙЫН ${i+1}/15</div>
    <h2>🏆 ${active+1}-топ жауап береді</h2>

    <div class="scores">
      ${teamScores.map((score,j)=>`
        <div class="team ${j===active?"current":""}">
          ${j+1}-топ
          <strong>${score}</strong>
        </div>
      `).join("")}
    </div>

    ${card("gold",`${i+1}-сұрақ`,`
      <p>${safe(q.q)}</p>

      <div class="answers">
        ${q.options.map((option,j)=>{
          let cls="";

          if(chosen!==undefined) {
            if(j===q.correct) cls="correct";
            else if(j===chosen) cls="wrong";
          }

          return `<button data-choice="${j}"
            class="${cls}"
            ${chosen!==undefined?"disabled":""}>
            ${"ABCD"[j]}. ${safe(option)}
          </button>`;
        }).join("")}
      </div>

      <p>${chosen===undefined
        ? "Бір дұрыс жауапты таңдаңдар."
        : chosen===q.correct
          ? "✓ Дұрыс! +10 ұпай."
          : "Дұрыс жауап: "+safe(q.options[q.correct])}
      </p>
    `)}

    ${card("blue","Ойын ережесі",`
      <p>Топтар 1 → 2 → 3 ретімен ауысады.</p>
      <p>Әр дұрыс жауап үшін 10 ұпай беріледі.</p>
      <p>Жауаптан кейін «Келесі» басыңдар.</p>
    `)}
  </div>`;
}

// =======================================
// ҮЙ ЖҰМЫСЫ
// =======================================

function homeworkHTML() {
  return `<div class="slide">
    <div class="eyebrow">ҮЙ ТАПСЫРМАСЫ</div>
    <h2>📚 Үй жұмысы</h2>

    ${homework.map((item,i)=>card(
      ["blue","gold","green"][i],
      item.title,
      `<p>${safe(item.text)}</p>`+
      item.formulas.map(math).join("")
    )).join("")}
  </div>`;
}

// =======================================
// ҚОРЫТЫНДЫ
// =======================================

function finishHTML() {
  const maximum=Math.max(...teamScores);

  const winners=teamScores
    .map((score,i)=>score===maximum?`${i+1}-топ`:null)
    .filter(Boolean);

  const finished=gameAnswers.size===quiz.length;

  return `<div class="slide">
    <div class="eyebrow">САБАҚ ҚОРЫТЫНДЫСЫ</div>
    <h1 class="gradient">Сабақ аяқталды!</h1>

    <div class="scores">
      ${teamScores.map((score,i)=>`
        <div class="team">
          ${i+1}-топ
          <strong>${score}</strong>
        </div>
      `).join("")}
    </div>

    ${card("green","Топтық ойын",`
      <p>Орындалған сұрақтар: ${gameAnswers.size}/15</p>
      <p>${finished
        ? winners.join(", ")+
          (winners.length===1
            ? " — жеңімпаз!"
            : " — тең ұпай жинады!")
        : "Ойын әлі толық аяқталмаған."}
      </p>
    `)}

    ${card("blue","Жеке тапсырмалар",`
      <p>Дұрыс шешілген есеп: ${completed.size}/20</p>
      <p>Жеке ұпай: ${individualScore}</p>
    `)}

    ${card("gold","Бүгін не үйрендік?",`
      <p>Логарифмдік теңдеулерді шештік.</p>
      <p>Анықталу облысын тексердік.</p>
      <p>Логарифм қасиеттерін қолдандық.</p>
      <p>Бөгде түбірлерді анықтадық.</p>
      <p>Теңдеулер жүйелерін шештік.</p>
    `)}

    <h2>Сау болыңыздар!</h2>
  </div>`;
}

// =======================================
// СЛАЙДТЫ КӨРСЕТУ
// =======================================

function updateScore() {
  $("totalScore").textContent=
    individualScore+
    teamScores.reduce((sum,value)=>sum+value,0);
}

function render() {
  const slide=slides[page];

  // Алдыңғы формула көрсетілімін жарамсыз ету
  formulaVersion++;

  const views={
    intro:()=>introHTML(),
    theory:()=>theoryHTML(slide.index),
    note:()=>noteHTML(slide.index),
    level:()=>levelHTML(slide.index),
    game:()=>gameHTML(slide.index),
    homework:()=>homeworkHTML(),
    finish:()=>finishHTML()
  };

  const content=$("content");

  content.innerHTML=views[slide.type]();
  content.scrollTop=0;

  $("pageCounter").textContent=
    `${page+1} / ${slides.length}`;

  $("pageTitle").textContent=slide.title;

  $("pageProgress").style.width=
    `${(page+1)/slides.length*100}%`;

  $("prevPage").disabled=page===0;
  $("nextPage").disabled=page===slides.length-1;

  document.querySelectorAll("[data-section]")
    .forEach(btn=>{
      btn.classList.toggle(
        "active",
        btn.dataset.section===slide.type
      );
    });

  updateScore();
  drawFormulas();
}

// =======================================
// НАВИГАЦИЯ
// =======================================

$("nextPage").addEventListener("click",()=>{
  if(page<slides.length-1) {
    page++;
    render();
  }
});

$("prevPage").addEventListener("click",()=>{
  if(page>0) {
    page--;
    render();
  }
});

document.querySelectorAll("[data-section]")
  .forEach(btn=>{
    btn.addEventListener("click",()=>{
      const index=slides.findIndex(
        slide=>slide.type===btn.dataset.section
      );
      if(index>=0) {
        page=index;
        render();
      }
    });
  });

// =======================================
// ЕСЕП ЖӘНЕ ОЙЫН БАТЫРМАЛАРЫ
// =======================================

$("content").addEventListener("click",event=>{
  const toggle=event.target.closest("[data-toggle]");

  if(toggle) {
    const target=$(toggle.dataset.toggle);
    if(target)target.hidden=!target.hidden;
    return;
  }

  const check=event.target.closest("[data-check]");

  if(check) {
    checkLevel(check.dataset.check);
    return;
  }

  const choice=event.target.closest("[data-choice]");

  if(choice) {
    chooseAnswer(Number(choice.dataset.choice));
  }
});

// =======================================
// ДЕҢГЕЙЛІК ЕСЕПТЕРДІ ТЕКСЕРУ
// =======================================

function sameNumber(a,b) {
  return Number.isFinite(a) &&
    Math.abs(a-b)<=1e-7*Math.max(1,Math.abs(b));
}

function checkLevel(key) {
  if(completed.has(key))return;

  const [i,j]=key.split("_").map(Number);
  const level=levels[i];
  const task=level.tasks[j];

  const input=$("answer_"+key);
  const feedback=$("feedback_"+key);
  const raw=input.value.trim();

  if(!raw) {
    feedback.textContent="Алдымен жауап енгізіңдер.";
    return;
  }

  let correct=false;

  try {
    if(Array.isArray(task.values)) {
      const parts=raw.split(";").map(s=>s.trim());

      if(parts.length!==task.values.length) {
        throw Error("Екі жауапты нүктелі үтірмен бөл");
      }

      const entered=parts.map(s=>calculate(s))
        .sort((a,b)=>a-b);

      const expected=[...task.values].sort((a,b)=>a-b);

      correct=entered.every((n,k)=>
        sameNumber(n,expected[k])
      );
    } else {
      if(raw.includes(";"))throw Error("Бір сан қажет");
      correct=sameNumber(calculate(raw),task.value);
    }
  } catch(error) {
    feedback.textContent=
      "Жауап үлгісі: 3 немесе 8/3 немесе 4;8";
    return;
  }

  if(correct) {
    completed.add(key);
    individualScore+=level.points;

    input.disabled=true;

    const button=document.querySelector(
      `[data-check="${key}"]`
    );

    if(button) {
      button.disabled=true;
      button.textContent="✓ Дұрыс";
    }

    feedback.textContent=
      `✓ Дұрыс! +${level.points} ұпай`;

    feedback.classList.add("correct");
    updateScore();
  } else {
    feedback.textContent=
      "Қате жауап. Шешу жолын қайта тексеріңдер.";
  }
}

// =======================================
// ТОПТЫҚ ОЙЫН
// =======================================

function chooseAnswer(choice) {
  const slide=slides[page];

  if(slide.type!=="game")return;
  if(gameAnswers.has(slide.index))return;

  gameAnswers.set(slide.index,choice);

  if(choice===quiz[slide.index].correct) {
    teamScores[slide.index%3]+=10;
  }

  render();
}

$("resetGame").addEventListener("click",()=>{
  gameAnswers.clear();
  teamScores=[0,0,0];
  render();
});

// =======================================
// ТОЛЫҚ ЭКРАН
// =======================================

$("fullscreenBtn").addEventListener("click",async()=>{
  try {
    if(document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await document.documentElement.requestFullscreen();
    }
  } catch(error) {
    console.warn(error);
  }
});

// =======================================
// 80 МИНУТТЫҚ ТАЙМЕР
// =======================================

function formatTime(seconds) {
  return String(Math.floor(seconds/60)).padStart(2,"0")+
    ":"+String(seconds%60).padStart(2,"0");
}

function updateTimer() {
  $("remaining").textContent=formatTime(secondsLeft);
  $("elapsed").textContent=
    formatTime(TOTAL_SECONDS-secondsLeft);

  $("timeProgress").style.width=
    `${(TOTAL_SECONDS-secondsLeft)/TOTAL_SECONDS*100}%`;
}

function pauseTimer() {
  if(timerID!==null) {
    clearInterval(timerID);
    timerID=null;
  }
}

function startTimer() {
  if(timerID!==null||secondsLeft<=0)return;

  deadline=Date.now()+secondsLeft*1000;

  timerID=setInterval(()=>{
    secondsLeft=Math.max(
      0,
      Math.ceil((deadline-Date.now())/1000)
    );

    updateTimer();

    if(secondsLeft===0)pauseTimer();
  },250);
}

function resetTimer() {
  pauseTimer();
  secondsLeft=TOTAL_SECONDS;
  updateTimer();
}

$("timerStart").addEventListener("click",startTimer);
$("timerPause").addEventListener("click",pauseTimer);
$("timerReset").addEventListener("click",resetTimer);

// =======================================
// АЛМАТЫ УАҚЫТЫ
// =======================================

function updateClock() {
  $("clock").textContent=
    new Intl.DateTimeFormat("kk-KZ",{
      timeZone:"Asia/Almaty",
      hour:"2-digit",
      minute:"2-digit",
      second:"2-digit",
      hour12:false
    }).format(new Date());
}

updateClock();
setInterval(updateClock,1000);

// =======================================
// ЕКІ КАЛЬКУЛЯТОР
// =======================================

const calcValues = {
  basic:"",
  science:""
};

const calcKeys = {
  basic: [
    "C","⌫","(",")",
    "7","8","9","÷",
    "4","5","6","×",
    "1","2","3","−",
    "%","0",".","+",
    "="
  ],
  science: [
    "C","⌫","(",")",
    "sin","cos","tg","ctg",
    "√","∛","x²","xʸ",
    "log","ln","π","e",
    "7","8","9","÷",
    "4","5","6","×",
    "1","2","3","−",
    "%","0",".","+",
    "="
  ]
};

const calcMap = {
  "×":"*",
  "÷":"/",
  "−":"-",
  "sin":"sin(",
  "cos":"cos(",
  "tg":"tan(",
  "ctg":"ctg(",
  "√":"sqrt(",
  "∛":"cbrt(",
  "log":"log(",
  "ln":"ln(",
  "π":"pi",
  "x²":"^2",
  "xʸ":"^"
};

// =======================================
// КАЛЬКУЛЯТОР БАТЫРМАЛАРЫ
// =======================================

function createCalculator(type) {
  const grid=$("keys-"+type);
  grid.replaceChildren();

  calcKeys[type].forEach(key=>{
    const button=document.createElement("button");

    button.type="button";
    button.textContent=key;

    if(key==="C")button.classList.add("clear");
    if(key==="=")button.classList.add("equal");

    if(["sin","cos","tg","ctg","log","ln"]
      .includes(key)) {
      button.classList.add("trig");
    }

    if(["+","−","×","÷","√","∛","x²","xʸ"]
      .includes(key)) {
      button.classList.add("op");
    }

    button.addEventListener("click",()=>{
      pressCalculator(type,key);
    });

    grid.appendChild(button);
  });
}

function pressCalculator(type,key) {
  let value=calcValues[type];

  if(key==="C") {
    value="";
  } else if(key==="⌫") {
    value=value==="Қате"?"":value.slice(0,-1);
  } else if(key==="=") {
    try {
      value=String(
        Number(calculate(value).toPrecision(12))
      );
    } catch(error) {
      value="Қате";
    }
  } else {
    if(value==="Қате")value="";
    value+=calcMap[key]??key;
  }

  calcValues[type]=value;

  const display=$("display-"+type);
  display.textContent=value||"0";
  display.scrollLeft=display.scrollWidth;
}

// =======================================
// ЕСЕПТЕУ ЖҮЙЕСІ
// eval() ҚОЛДАНЫЛМАЙДЫ
// =======================================

function calculate(input) {
  const source=String(input)
    .replace(/\s+/g,"")
    .replace(/,/g,".")
    .replace(/−/g,"-")
    .replace(/×/g,"*")
    .replace(/÷/g,"/");

  let pos=0;

  const rad=x=>x*Math.PI/180;

  const funcs={
    sin:x=>Math.sin(rad(x)),
    cos:x=>Math.cos(rad(x)),
    tan:x=>{
      if(Math.abs(Math.cos(rad(x)))<1e-12) {
        throw Error("Тангенс анықталмаған");
      }
      return Math.tan(rad(x));
    },
    ctg:x=>{
      if(Math.abs(Math.sin(rad(x)))<1e-12) {
        throw Error("Котангенс анықталмаған");
      }
      return Math.cos(rad(x))/Math.sin(rad(x));
    },
    sqrt:x=>Math.sqrt(x),
    cbrt:x=>Math.cbrt(x),
    log:x=>Math.log10(x),
    ln:x=>Math.log(x)
  };

  function take(char) {
    if(source[pos]===char) {
      pos++;
      return true;
    }
    return false;
  }

  function atom() {
    if(take("(")) {
      const value=expression();

      if(!take(")")) {
        throw Error("Жақша жабылмаған");
      }

      return value;
    }

    const rest=source.slice(pos);
    const number=rest.match(
      /^(?:\d+\.?\d*|\.\d+)/
    );

    if(number) {
      pos+=number[0].length;
      return Number(number[0]);
    }

    for(const name of Object.keys(funcs)) {
      if(rest.startsWith(name+"(")) {
        pos+=name.length+1;

        const argument=expression();

        if(!take(")")) {
          throw Error("Жақша жабылмаған");
        }

        const result=funcs[name](argument);

        if(!Number.isFinite(result)) {
          throw Error("Функция анықталмаған");
        }

        return result;
      }
    }

    if(rest.startsWith("pi")) {
      pos+=2;
      return Math.PI;
    }

    if(rest.startsWith("e")) {
      pos++;
      return Math.E;
    }

    throw Error("Өрнек дұрыс емес");
  }

  function postfix() {
    let value=atom();

    while(take("%"))value/=100;
    return value;
  }

  function power() {
    let value=postfix();

    if(take("^")) {
      value=Math.pow(value,unary());
    }

    return value;
  }

  function unary() {
    if(take("+"))return unary();
    if(take("-"))return -unary();
    return power();
  }

  function term() {
    let value=unary();

    while(true) {
      if(take("*")) {
        value*=unary();
      } else if(take("/")) {
        const divisor=unary();

        if(divisor===0) {
          throw Error("Нөлге бөлуге болмайды");
        }
        value/=divisor;
      } else {
        break;
      }
    }

    return value;
  }

  function expression() {
    let value=term();

    while(true) {
      if(take("+"))value+=term();
      else if(take("-"))value-=term();
      else break;
    }

    return value;
  }

  if(!source)throw Error("Бос өрнек");

  const result=expression();

  if(pos!==source.length||!Number.isFinite(result)) {
    throw Error("Есептеу қатесі");
  }

  return Math.abs(result)<1e-12?0:result;
}

// =======================================
// КАЛЬКУЛЯТОРДЫ АШУ
// =======================================

function toggleCalculator(type) {
  const element=$("calc-"+type);
  const opening=!element.classList.contains("visible");

  element.classList.toggle("visible",opening);

  if(opening) {
    const rect=element.getBoundingClientRect();

    const maxX=Math.max(
      0,innerWidth-element.offsetWidth
    );
    const maxY=Math.max(
      0,innerHeight-element.offsetHeight
    );

    element.style.left=
      Math.max(0,Math.min(maxX,rect.left))+"px";
    element.style.top=
      Math.max(0,Math.min(maxY,rect.top))+"px";
  }
}

$("basicOpen").addEventListener("click",()=>{
  toggleCalculator("basic");
});

$("scienceOpen").addEventListener("click",()=>{
  toggleCalculator("science");
});

document.querySelectorAll("[data-close]")
  .forEach(button=>{
    button.addEventListener("click",()=>{
      $("calc-"+button.dataset.close)
        .classList.remove("visible");
    });
  });

// =======================================
// КАЛЬКУЛЯТОРДЫ ЖЫЛЖЫТУ
// =======================================

function makeDraggable(element) {
  const handle=element.querySelector(".calc-head");
  let drag=null;

  handle.addEventListener("pointerdown",event=>{
    if(event.target.closest("button"))return;

    if(event.pointerType==="mouse"&&event.button!==0) {
      return;
    }

    const rect=element.getBoundingClientRect();

    drag={
      id:event.pointerId,
      x:event.clientX,
      y:event.clientY,
      left:rect.left,
      top:rect.top
    };

    handle.setPointerCapture(event.pointerId);
  });

  handle.addEventListener("pointermove",event=>{
    if(!drag||event.pointerId!==drag.id)return;

    const dx=event.clientX-drag.x;
    const dy=event.clientY-drag.y;

    const maxX=Math.max(
      0,innerWidth-element.offsetWidth
    );
    const maxY=Math.max(
      0,innerHeight-element.offsetHeight
    );

    element.style.left=
      Math.max(0,Math.min(maxX,drag.left+dx))+"px";

    element.style.top=
      Math.max(0,Math.min(maxY,drag.top+dy))+"px";
  });

  handle.addEventListener("pointerup",()=>drag=null);
  handle.addEventListener("pointercancel",()=>drag=null);
}

// =======================================
// АВТОМАТТЫ ТЕКСЕРУ
// =======================================

function runChecks() {
  const test=(condition,message)=>{
    console.assert(condition,message);
    if(!condition)throw Error(message);
  };

  test(theory.length===5,"5 түсіндірме қажет");
  test(notes.length===10,"10 конспект қажет");

  test(
    notes.every(n=>n.self.length===2),
    "Әр конспектте 2 есеп болуы керек"
  );

  test(
    levels.length===4 &&
    levels.every(l=>l.tasks.length===5),
    "4 деңгейде 20 есеп болуы керек"
  );

  test(quiz.length===15,"15 ойын сұрағы қажет");
  test(slides.length===37,"37 слайд қажет");

  test(calculate("2^5")===32,"Дәреже қатесі");
  test(calculate("log(100)")===2,"log қатесі");
  test(calculate("ln(e)")===1,"ln қатесі");
  test(calculate("8/3")>2.66,"Бөлшек қатесі");

  // Теңдеулердің жауаптарын тексеруге
  // арналған эталондық мәндер
  const expected=[
    [8,9,25,5,7],
    [5,8,8,27,8],
    [4,9,null,8/3,3],
    [null,null,2,4,4]
  ];

  levels.forEach((level,i)=>{
    level.tasks.forEach((task,j)=>{
      const exp=expected[i][j];

      if(exp!==null) {
        test(
          Math.abs(task.value-exp)<1e-9,
          `Деңгей ${i+1}, есеп ${j+1}`
        );
      } else {
        test(
          Array.isArray(task.values) &&
          task.values.length===2,
          `Екі түбір: деңгей ${i+1}, есеп ${j+1}`
        );
      }
    });
  });

  console.log("§17: құрылымдық тексеру сәтті.");
}

// =======================================
// ІСКЕ ҚОСУ
// =======================================

runChecks();

createCalculator("basic");
createCalculator("science");

makeDraggable($("calc-basic"));
makeDraggable($("calc-science"));

updateTimer();
render();
