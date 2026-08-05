import type { LocaleContent } from './data';

/** Lithuanian portfolio content. First-pass translation — review for voice.
 *  Structural fields (slug, tags, company, dates, url, skills) MUST match
 *  data.en.ts exactly — guarded by the parity test. */
export const ltContent: LocaleContent = {
  stats: [
    { value: '8+', label: 'metai kuriant produkcinę programinę įrangą' },
    { value: '15+', label: 'platformų pristatyta nuo pradžios iki galo' },
    { value: '-57%', label: 'LCP — sumažintas nuo 4,2s iki 1,8s' },
    { value: '100%', label: 'WCAG atitiktis, enterprise lygio' },
  ],

  services: [
    {
      title: 'Full-stack produktų inžinerija',
      description:
        'Nuo tuščio repozitorijaus iki produkcijos: projektuoju, kuriu ir pristatau pilnus web produktus — frontend, API, duomenų bazė, autentifikacija ir diegimas. Būtent tai dariau kaip pirmasis frontend inžinierius Šveicarijos SaaS, kuriuo dabar pasitiki stambūs bankai.',
      deliverables: [
        'React / Next.js aplikacijos',
        'Node.js REST API + PostgreSQL',
        'Autentifikacijos ir sesijų architektūra',
        'AWS / Vercel diegimas su CI/CD',
      ],
    },
    {
      title: 'Frontend architektūra ir migracijos',
      description:
        'Sena technologijų bazė stabdo? Planuoju ir vykdau framework migracijas nestabdydamas funkcijų kūrimo — vadovavau pilnai Angular → React/Next.js migracijai į produkciją veikiančiame enterprise produkte.',
      deliverables: [
        'Angular → React / Next.js migracijos',
        'Monorepo architektūra (Turborepo)',
        'Dizaino sistemos + Storybook',
        'Migracijos strategija, diegiama palaipsniui',
      ],
    },
    {
      title: 'Našumas ir prieinamumas',
      description:
        'Greitis ir atitiktis kaip išmatuojami rezultatai, ne nuojauta. Profiliuoju, pertvarkau ir optimizuoju, kol Core Web Vitals tampa žali — ir esu pasiekęs 100% WCAG atitiktį bankinio lygio klientams.',
      deliverables: [
        'Core Web Vitals optimizavimas (LCP, CLS)',
        'Bundle ir tinklo užklausų mažinimas',
        'WCAG prieinamumo auditai ir taisymai',
        'Talpyklos ir CDN strategija',
      ],
    },
    {
      title: 'AI pagreitintas pristatymas',
      description:
        'Kuriu su agentinėmis AI darbo eigomis — bet kiekvieną žingsnį nukreipiu, kiekvieną eilutę peržiūriu ir atsakau už rezultatą. Gaunate senior inžinieriaus kokybę tokiu greičiu, kokio tradicinė vieno žmogaus komanda pasiekti negali.',
      deliverables: [
        'Agentinės kūrimo darbo eigos',
        'Greitas prototipavimas → produkcijos stabilumas',
        'Figma-į-kodą procesai',
        'AI įrankių ir darbo eigų konsultacijos',
      ],
    },
  ],

  principles: [
    {
      title: 'AI rašo. Aš sprendžiu.',
      description:
        'Agentai greitai generuoja kodą — bet kiekvienas architektūrinis sprendimas, kompromisas ir sujungimas yra mano. Aštuonerių metų produkcinė patirtis yra filtras, per kurį praeina rezultatas.',
    },
    {
      title: 'Specifikacija prieš kodą',
      description:
        'Prieš paleisdamas agentą surašau tikslias specifikacijas — reikalavimus, apribojimus, kraštutinius atvejus. Aiški kryptis viduje — kokybė išorėje. Miglotos užklausos duoda miglotą programinę įrangą.',
    },
    {
      title: 'Apsaugos visur',
      description:
        'Tipams saugios schemos, testai, linting ir CI kontroliuoja viską, ką liečia AI. Niekas nepatenka į main neperėję to paties standarto, kurį taikau ranka rašytam kodui.',
    },
    {
      title: 'Greitis, kurį galima išmatuoti',
      description:
        'Rezultatas — pristatymo tempas, kuriam anksčiau reikėjo nedidelės komandos, neaukojant kodo peržiūros, prieinamumo ar našumo biudžetų.',
    },
  ],

  experience: [
    {
      company: 'Hypt AG',
      role: 'Senior frontend inžinierius',
      startDate: '2023',
      current: true,
      description:
        'Šveicarijos pokalbių atsiliepimų SaaS, aptarnaujantis UBS, Raiffeisen, Generali ir Nestlé. Prisijungiau kaip pirmasis frontend inžinierius ir sukūriau visą produktą nuo nulio kartu su vienu backend inžinieriumi.',
      highlights: [
        'Suprojektavau ir sukūriau visą frontend, CI/CD procesus ir pagrindinį produktą nuo nulio — juo dabar pasitiki stambios Šveicarijos bankininkystės ir draudimo įmonės.',
        'Kartu su CTO suprojektavau ir pristačiau pilną REST API — maitinantį funnel builder ir realaus laiko analitikos skydelius, paremtą PostgreSQL.',
        'Sukūriau Chatbot Builder nuo pradžios iki galo: pilnai pritaikomą funnel builder su RxJS pagrįstu būsenos valdymu, nuo produkto dizaino iki pristatymo.',
        'Įdiegiau autentifikacijos architektūrą su Ory SDK — pilną auth srautą, sesijų ir slapukų valdymą visoje platformoje.',
        'Pasiekiau 100% WCAG prieinamumo atitiktį, atitinkančią griežtus enterprise bankinių klientų standartus.',
        'Inicijavau technologijų migraciją į React + Next.js + Tailwind Turborepo monorepo viduje — ištyriau, pagrindžiau ir pristačiau į produkciją.',
      ],
      skills: [
        'React',
        'Next.js',
        'TypeScript',
        'Node.js',
        'PostgreSQL',
        'Tailwind CSS',
        'Turborepo',
        'Ory SDK',
        'AWS',
      ],
      url: 'https://hypt.io',
    },
    {
      company: 'Two Flamingos Ltd.',
      role: 'Full-Stack programuotojas',
      startDate: '2018',
      endDate: '2022',
      current: false,
      description:
        'Skaitmeninė agentūra Mančesteryje, JK. Pristačiau 15+ korporatyvinių ir e-komercijos platformų nuo pradžios iki galo, nuo architektūros iki diegimo.',
      highlights: [
        'Specializavausi našumo optimizavime globalaus prekės ženklo klientams — įskaitant LCP sumažinimą nuo 4,2s iki 1,8s ir bundle dydžio ~35% produkcinėse platformose.',
        'Integravau sudėtingus trečiųjų šalių API į produkcines aplinkas.',
        'Dirbau tiesiogiai su klientais, versdamas verslo reikalavimus į techninius sprendimus.',
      ],
      skills: ['JavaScript', 'TypeScript', 'PHP', 'MySQL', 'REST APIs', 'CSS'],
    },
    {
      company: 'Freelance',
      role: 'Frontend programuotojas',
      startDate: '2017',
      endDate: '2018',
      current: false,
      description:
        'Web kūrimo ir UI paslaugos Londono klientams — pagrindas, sukurtas per savarankišką mokymąsi ir realių projektų pristatymą.',
      highlights: [],
      skills: ['JavaScript', 'HTML & CSS', 'WordPress'],
    },
  ],

  projects: [
    {
      title: 'Portfelis',
      slug: 'portfolio',
      description:
        'Ši svetainė — tamsus, vientisai slenkamas portfelis su atvejų analizėmis, peržiūrų skaitikliais ir OG paveikslėlių generavimu. Sukurta su Next.js 16, Tailwind v4 ir Upstash Redis.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Upstash Redis'],
      repo: 'https://github.com/eskruolis/portfolio',
      featured: true,
    },
  ],

  workProjects: [
    {
      title: 'Chatbot Builder',
      company: 'Hypt AG',
      description:
        'Pilnai pritaikomas pokalbių funnel builder — drag-and-drop srautai, realaus laiko peržiūra, prekės ženklo stilius, analitika. Sukurta nuo pradžios iki galo kaip pirmojo frontend inžinieriaus; aptarnauja UBS, Raiffeisen, Generali ir Nestlé.',
      tags: ['Angular', 'RxJS', 'TypeScript', 'REST APIs'],
      url: 'https://hypt.io',
      caseStudy: 'chatbot-builder',
      private: true,
    },
    {
      title: 'Angular → React migracija',
      company: 'Hypt AG',
      description:
        'Pasiūliau, suplanavau ir vadovavau pilnai veikiančio enterprise produkto migracijai į React + Next.js + Tailwind Turborepo monorepo — pristatyta į produkciją nestabdant funkcijų kūrimo.',
      tags: ['React', 'Next.js', 'TypeScript', 'Turborepo'],
      caseStudy: 'react-migration',
      private: true,
    },
    {
      title: 'Našumo optimizavimas dideliu mastu',
      company: 'Two Flamingos Ltd.',
      description:
        'Sumažinau LCP nuo 4,2s iki 1,8s ir bundle dydį ~35% produkcinėse klientų platformose — per užklausų profiliavimą, kodo skaidymą, lazy-loading, duomenų mažinimą ir talpyklos/CDN strategiją.',
      tags: ['Core Web Vitals', 'JavaScript', 'Caching & CDN'],
      caseStudy: 'performance-optimisation',
      private: true,
    },
    {
      title: 'REST API ir autentifikacijos architektūra',
      company: 'Hypt AG',
      description:
        'Kartu su CTO suprojektavau platformos REST API — paremtą PostgreSQL, maitinantį funnel builder ir realaus laiko analitiką. Įdiegiau pilną auth architektūrą su Ory SDK.',
      tags: ['Node.js', 'PostgreSQL', 'Ory SDK', 'REST APIs'],
      private: true,
    },
    {
      title: 'Dizaino sistema ir Figma migracija',
      company: 'Hypt AG',
      description:
        'Kartu su vidaus dizaineriu sukūriau Figma pagrįstą dizaino sistemą — komponentų bibliotekas, dizaino tokenus ir komandos perėjimą nuo Adobe XD prie Figma kaip vienintelio tiesos šaltinio.',
      tags: ['Figma', 'Design systems', 'Storybook'],
      private: true,
    },
    {
      title: 'Korporatyvinės ir e-komercijos platformos',
      company: 'Two Flamingos Ltd.',
      description:
        '15+ pilnų platformų globalaus prekės ženklo klientams — nuo architektūros iki diegimo, našumo optimizavimo ir sudėtingų trečiųjų šalių API integracijų.',
      tags: ['JavaScript', 'PHP', 'MySQL', 'CSS'],
      private: true,
    },
  ],

  caseStudies: [
    {
      slug: 'chatbot-builder',
      title: 'Chatbot Builder',
      subtitle:
        'Enterprise pokalbių funnel builder kūrimas nuo nulio — dabar naudojamas UBS, Raiffeisen, Generali ir Nestlé.',
      company: 'Hypt AG',
      year: '2023 — dabar',
      role: 'Pirmasis frontend inžinierius',
      tags: ['Angular', 'Angular Material', 'RxJS', 'TypeScript', 'REST APIs'],
      challenge:
        'Hypt reikėjo produkto, leidžiančio enterprise komandoms kurti pilnai prekės ženklu pažymėtus, pritaikomus pokalbių atsiliepimų funnel — su realaus laiko peržiūra, giliu stiliaus valdymu ir analitika — sukurto dviejų žmonių inžinerijos komandos startuolio tempu, pagal standartus, pakankamai griežtus Šveicarijos bankininkystės ir draudimo klientams.',
      approach: [
        'Atsakiau už frontend nuo pradžios iki galo: architektūra, komponentų modelis, būsenos valdymas ir pristatymas — su RxJS srautais kaip realaus laiko peržiūros ir redaktoriaus būsenos pagrindu.',
        'Kartu su CTO suprojektavau REST API taip, kad duomenų modelis aptarnautų ir builder UX, ir analitikos skydelius be dubliavimo.',
        'Sukūriau stiliaus variklį, saugiai atskleidžiantį prekės ženklo lygio stiliaus valdiklius — enterprise klientai stilizuoja viską nepažeisdami išdėstymo ar prieinamumo.',
        'Nuo pirmos dienos nustačiau CI/CD procesus, kad kiekvienas pakeitimas nuolat pasiektų produkciją.',
      ],
      outcomes: [
        'Platformą perėmė stambios Šveicarijos įmonės, įskaitant UBS, Raiffeisen, Generali ir Nestlé.',
        '100% WCAG atitiktis chatbot produkte — griežtas bankinių klientų reikalavimas.',
        'Dviejų žmonių komanda pristatė ir valdė produktą, konkuruojantį su gerokai didesniais tiekėjais.',
      ],
    },
    {
      slug: 'react-migration',
      title: 'Angular → React migracija',
      subtitle:
        'Veikiančio enterprise SaaS migracija į React + Next.js nestabdant funkcijų kūrimo.',
      company: 'Hypt AG',
      year: '2024 — 2025',
      role: 'Senior frontend inžinierius',
      tags: ['React', 'Next.js', 'Tailwind CSS', 'Turborepo', 'TypeScript'],
      challenge:
        'Angular kodų bazė stabdė funkcijų greitį ir įdarbinimą. Perrašymas nuo nulio buvo per rizikingas produktui su veikiančiais enterprise klientais — migracija turėjo vykti palaipsniui, produkcijoje, su nuline regresijų tolerancija.',
      approach: [
        'Ištyriau galimybes, pagrindžiau techninį verslo atvejį ir gavau pritarimą — tada atsakiau už vykdymą.',
        'Sutvarkiau kodų bazę kaip Turborepo monorepo, kad Angular ir React aplikacijos galėtų egzistuoti kartu, dalindamosi tipais, tokenais ir įrankiais pereinamuoju laikotarpiu.',
        'Migravau funkciją po funkcijos už stabilių API kontraktų, pristatydamas kiekvieną dalį į produkciją, kai ji buvo paruošta.',
        'Naudojau AI pagrįstas darbo eigas mechaniniam konvertavimui pagreitinti, kiekvieną pakeitimą peržiūrint ir testuojant prieš sujungimą.',
      ],
      outcomes: [
        'Pilna migracija pristatyta į produkciją — be funkcijų įšaldymo, be klientams matomų regresijų.',
        'Naujas stack (React + Next.js + Tailwind) išmatuojamai pagerino kūrimo greitį ir įdarbinimo galimybes.',
        'Monorepo architektūra iki šiol yra platformos pagrindas.',
      ],
    },
    {
      slug: 'performance-optimisation',
      title: 'Našumo optimizavimas dideliu mastu',
      subtitle:
        'LCP mažinimas nuo 4,2s iki 1,8s (-57%) produkcinėse globalaus prekės ženklo klientų platformose.',
      company: 'Two Flamingos Ltd.',
      year: '2018 — 2022',
      role: 'Full-Stack programuotojas',
      tags: ['Core Web Vitals', 'JavaScript', 'Caching & CDN'],
      challenge:
        'Globalaus prekės ženklo klientai atėjo su produkcinėmis platformomis, kurios atrodė nublizgintos, bet krovėsi lėtai — sunkūs bundle, neoptimizuoti paveikslėliai ir grandininės tinklo užklausos, stumiančios LCP virš 4 sekundžių ir kenkiančios konversijai.',
      approach: [
        'Pirmiausia profiliavau LCP ir tinklo užklausas — matavimas prieš optimizavimą, kad kiekvienas pakeitimas taikytųsi į realią kliūtį.',
        'Skaidžiau kodą ir taikiau lazy-loading, optimizavau ir tinkamai dydžiavau paveikslėlius bei mažinau API duomenis.',
        'Pridėjau išmanią talpyklą ir CDN pristatymą bei apgalvotas krovimo ir klaidų būsenas.',
        'Pavertau procesą pakartojamu žaidimų planu, taikomu keliose klientų platformose.',
      ],
      outcomes: [
        'LCP sumažintas nuo 4,2s iki 1,8s (-57%).',
        'Bundle dydis sumažintas ~35%.',
        'Ta pati disciplina dabar taikoma viskam, ką pristatau — našumo biudžetai nuo pirmos dienos, ne kaip gelbėjimas.',
      ],
    },
  ],
};
