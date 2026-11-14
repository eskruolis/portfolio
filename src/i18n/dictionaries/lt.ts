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
    intro:
      'Kuriu ir pristatau produkcinę web programinę įrangą nuo pradžios iki galo — React ir Next.js frontend, Node.js API, PostgreSQL, autentifikacija ir diegimas debesyje. Šiuo metu konsultuoju MyUrbanScoot, kur esu vienintelis veikiančios internetinės parduotuvės inžinierius, ir kartu su partneriu įkūriau myanart, kurį nuo pirmo commit iki paleidimo nuvedžiau per šešias savaites. Prieš tai buvau pirmasis frontend inžinierius Šveicarijos SaaS, kuriuo pasitiki stambūs bankai ir draudikai. Dirbu AI greičiu su agentinėmis darbo eigomis — ',
    introEmphasis: 'kiekvieną žingsnį valdau ir peržiūriu pats',
    startProject: 'Pradėti projektą',
    viewCv: 'Peržiūrėti CV',
    trustStrip: 'Sukūriau produktus, kuriais pasitiki komandos',
    cvModalTitle: 'CV',
    cvDownload: 'Atsisiųsti',
    cvClose: 'Užverti CV peržiūrą',
  },

  services: {
    label: 'Paslaugos',
    title: 'Ką galiu jums sukurti',
    intro:
      'Dirbu su visu stack — nauji produktai, gelbėjimo darbai, migracijos ir našumo gerinimas esamose kodų bazėse. Prieinamas kaip freelanceris ar rangovas, taip pat pasiruošęs visą laiką skirti vienam ambicingam produktui.',
  },

  howIWork: {
    label: 'Kaip dirbu',
    title: 'Pagreitinta AI. Kryptį nurodo inžinierius.',
    intro:
      'Anksti perėjau prie agentinio AI kūrimo — ne tam, kad pakeisčiau inžinerinį sprendimą, o kad jį sustiprinčiau. Agentai rašo kodą; aš galvoju, peržiūriu ir pristatau.',
  },

  skills: {
    label: 'Įgūdžiai',
    title: 'Full-stack įrankių rinkinys',
    intro:
      'Dauguma esamų technologijų — vienas inžinierius. Jei jūsų stack čia nėra, tikriausiai esu pristatęs ką nors panašaus — greitas prisitaikymas ir yra tikrasis įgūdis.',
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
      'Priimu freelance ir rangos darbus — arba galiu visą laiką skirti vienam dideliam projektui jūsų komandoje. Pilni produktai, migracijos, našumo gelbėjimas ar senior full-stack inžinieriaus etatas. Papasakokite, ką kuriate, ir nuoširdžiai pasakysiu, ar esu tinkamas žmogus tam.',
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
    stack: 'Technologijos',
    metaSuffix: 'Atvejo analizė',
    ctaTitle: 'Turite panašią problemą?',
    ctaBody:
      'Priimu freelance, rangos ir etatinį darbą — mielai aptarsiu jūsų situaciją ir ar galiu padėti.',
    ctaButton: 'Susisiekti',
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
