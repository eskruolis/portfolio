import type { Dictionary } from '../dictionaries';

/**
 * Lithuanian dictionary. First-pass translation — review for tone/voice.
 * Typed as `Dictionary`, so any missing or renamed key fails the build.
 * Tech terms (React, Next.js, PostgreSQL, WCAG…) intentionally stay in English.
 */
export const lt: Dictionary = {
  nav: {
    about: 'Apie',
    services: 'Paslaugos',
    howIWork: 'Kaip dirbu',
    skills: 'Įgūdžiai',
    experience: 'Patirtis',
    work: 'Darbai',
    blog: 'Tinklaraštis',
    contact: 'Kontaktai',
  },

  common: {
    availability: 'Priimu freelance ir etatinį darbą',
    siteNavigation: 'Svetainės navigacija',
    pageSections: 'Puslapio skiltys',
  },

  sidebar: {
    role: 'Senior programinės įrangos inžinierius',
    roleSub: 'Full-Stack · React / Next.js / Node',
    githubAria: 'GitHub profilis',
    linkedinAria: 'LinkedIn profilis',
    emailAria: 'Siųsti el. laišką',
    downloadCv: 'Atsisiųsti CV',
    openMenu: 'Atverti navigacijos meniu',
    closeMenu: 'Užverti navigacijos meniu',
    menuLabel: 'Navigacijos meniu',
  },

  languageSwitcher: {
    label: 'Kalba',
  },

  hero: {
    ariaLabel: 'Įžanga',
    role: 'Senior programinės įrangos inžinierius · Full-Stack',
    headline:
      'Web produktus nuvedu nuo idėjos iki produkcijos — ir atsakau už kiekvieną sluoksnį tarp jų.',
    intro:
      'Šiuo metu vadovauju MyUrbanScoot — Ispanijos elektrinių paspirtukų parduotuvės ir dirbtuvių — inžinerijai: atsakau už veikiančią parduotuvę nuo pradžios iki galo ir už įrankius, kuriais dirba visa komanda. Taip pat esu myanart bendraįkūrėjas ir CTO — tai AI meno studija, kuri klientų nuotraukas paverčia spaudiniais, drobėmis ir dovanomis, siunčiamomis į 52 šalis; nuo pirmo commit iki paleidimo ją nuvedžiau per šešias savaites. Prieš tai vadovavau Šveicarijos SaaS, kuriuo pasitiki stambūs bankai ir draudikai, frontend kūrimui. Dirbu AI greičiu su agentinėmis darbo eigomis — ',
    introEmphasis: 'kiekvieną žingsnį valdau ir peržiūriu pats',
    lifecycleLabel: 'Kiekvienas sluoksnis, nuo pradžios iki galo',
    startProject: 'Pradėti projektą',
    viewCv: 'Peržiūrėti CV',
    trustStrip: 'Dirbdamas Hypt AG kūriau produktus, kuriais naudojasi komandos iš',
    cvModalTitle: 'CV',
    cvDownload: 'Atsisiųsti',
    cvClose: 'Užverti CV peržiūrą',
  },

  services: {
    label: 'Paslaugos',
    title: 'Ką galiu jums sukurti',
    intro:
      'Dirbu su visu stack: nauji produktai, gelbėjimo darbai, migracijos ir našumo gerinimas esamose kodų bazėse.',
  },

  howIWork: {
    label: 'Kaip dirbu',
    title: 'Kaip sprendžiu problemas',
    intro:
      'Tie patys žingsniai kiekviename projekte — ar tai naujas produktas, ar veikianti sistema, kurią sukūrė kiti. Prie kiekvieno — pavyzdys iš tikro darbo.',
  },

  skills: {
    label: 'Įgūdžiai',
    title: 'Full-stack įrankių rinkinys',
    intro:
      'Įrankiai, su kuriais esu pristatęs produkcinius darbus, sugrupuoti pagal sluoksnį. Naujus išmokstu tada, kai jų prireikia projektui.',
    categories: {
      languages: 'Kalbos ir pagrindai',
      frontend: 'Frontend',
      backend: 'Backend ir duomenys',
      infra: 'Autentifikacija ir infrastruktūra',
      practices: 'Inžinerinės praktikos',
      ai: 'AI pagrįstas kūrimas',
    },
  },

  experience: {
    label: 'Patirtis',
    title: 'Kur pristačiau',
    ariaLabel: 'Darbo patirtis',
    historyLabel: 'Darbo istorija',
    present: 'Dabar',
  },

  projects: {
    ariaLabel: 'Projektai',
    label: 'Darbai',
    title: 'Atrinkti darbai ir projektai',
    intro:
      'Klientų darbai slepiami už NDA ir prisijungimų — istoriją pasakoja atvejų analizės. GitHub skiltis tiesiogiai traukia mano viešus repozitorijus.',
    tabWork: 'Darbai',
    tabGithub: 'GitHub',
    filterAria: 'Filtruoti pagal technologiją',
    filterAll: 'Visi',
    readCaseStudy: 'Skaityti atvejo analizę',
    privateLabel: 'Privatus projektas',
    noWork: 'Nėra projektų, atitinkančių šį filtrą.',
    noRepos: 'Nėra repozitorijų, atitinkančių šį filtrą.',
  },

  contact: {
    ariaLabel: 'Kontaktai',
    label: 'Kontaktai',
    title: 'Sukurkime ką nors kartu',
    intro:
      'Priimu freelance ir rangos darbus, taip pat svarstyčiau etatinį darbą prie tinkamo produkto. Papasakokite, ką kuriate, ir nuoširdžiai pasakysiu, ar esu tinkamas žmogus tam.',
    yourName: 'Jūsų vardas',
    placeholders: [
      'Mums reikia full-stack inžinieriaus...',
      'Štai produktas, kurį kuriame...',
      'Mūsų frontend reikia gelbėti...',
      'Gal išgerkime virtualios kavos?',
    ],
    sendMessage: 'Siųsti žinutę',
    sending: 'Atveriama jūsų el. pašto programa...',
    emailSubjectFrom: 'Sveiki, Eigirdai — nuo',
    emailSubjectFallback: 'jūsų portfelio',
    orReach: 'Arba susisiekite tiesiogiai',
    basedIn:
      'Įsikūręs Valensijoje, Ispanijoje (CET) — dirbu su komandomis visoje Europoje ir už jos ribų.',
  },

  caseStudy: {
    back: 'Grįžti į darbus',
    label: 'Atvejo analizė',
    company: 'Įmonė',
    timeline: 'Laikotarpis',
    role: 'Vaidmuo',
    challenge: 'Iššūkis',
    approach: 'Sprendimas',
    outcome: 'Rezultatas',
    stillOpen: 'Kas dar neišspręsta',
    stack: 'Technologijos',
    metaSuffix: 'Atvejo analizė',
    ctaTitle: 'Turite panašią problemą?',
    ctaBody:
      'Papasakokite, su kuo susiduriate, ir nuoširdžiai pasakysiu, ar galiu padėti.',
    ctaButton: 'Susisiekti',
  },

  cv: {
    title: 'CV',
    location: 'Valensija, Ispanija',
    summary: 'Santrauka',
    experience: 'Patirtis',
    skills: 'Įgūdžiai',
    education: 'Išsilavinimas',
    languages: 'Kalbos',
  },

  blog: {
    ariaLabel: 'Tinklaraštis',
    title: 'Rašau',
    allPosts: 'Visi įrašai',
    minRead: 'min. skaitymo',
    view: 'peržiūra',
    views: 'peržiūros',
    tagsAria: 'Žymos',
  },

  footer: {
    builtWith: 'Sukurta su',
    and: 'ir',
  },
};
