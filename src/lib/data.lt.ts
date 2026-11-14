import type { LocaleContent } from './data';

/** Lithuanian portfolio content. Structural fields (slug, tags, company, dates,
 *  url, skills) MUST match data.en.ts exactly — guarded by the parity test. */
export const ltContent: LocaleContent = {
  stats: [
    { value: '8+', label: 'metai kuriant produkcinę programinę įrangą' },
    { value: '6 sav.', label: 'nuo pirmo commit iki veikiančios parduotuvės (myanart)' },
    { value: '-91%', label: 'backend užklausų vienai puslapio užklausai, gyvoje produkcijoje' },
    { value: '100%', label: 'WCAG atitiktis, enterprise lygio' },
  ],

  services: [
    {
      title: 'Full-stack produktų inžinerija',
      description:
        'Nuo tuščio repozitorijaus iki produkcijos: projektuoju, kuriu ir paleidžiu pilnus web produktus — frontend, API, duomenų bazė, autentifikacija, mokėjimai ir diegimas. Tai padariau Šveicarijos SaaS, kuriuo dabar pasitiki stambūs bankai, ir dar kartą su myanart, kurį įkūriau kartu su partneriu ir paleidau per šešias savaites.',
      deliverables: [
        'React / Next.js aplikacijos',
        'Node.js API, Medusa e-komercija + PostgreSQL',
        'Autentifikacija, mokėjimai ir sąskaitos faktūros',
        'Railway / Vercel / AWS diegimas su CI/CD',
      ],
    },
    {
      title: 'Veikiančių platformų perėmimas',
      description:
        'Paveldėjote kodą, kurio niekas iki galo nesupranta? Perimu veikiančias sistemas: jas stabilizuoju, padarau griežtai tipizuotas, atnaujinu framework ir sukuriu patikimą išleidimų procesą — nestabdydamas naujų funkcijų kūrimo. Šiuo metu tai darau kaip vienintelis inžinierius veikiančioje internetinėje parduotuvėje.',
      deliverables: [
        'Framework atnaujinimai su išbandytais runbook',
        'Griežto tipizavimo migracijos su CI apsaugomis',
        'Išleidimų procesai ir peržiūros aplinkos kiekvienam PR',
        'Angular → React / Next.js migracijos',
      ],
    },
    {
      title: 'Našumas ir patikimumas',
      description:
        'Greitis ir stabilumas kaip išmatuojami rezultatai, ne nuojauta. Nustatau atskaitos tašką, randu tikrąją kliūtį ir įrodau sprendimą — nuo skaitymo modelių, sumažinusių produkto puslapių vėlavimą, iki atminties nuotėkių, atsektų iki vienos eilutės. Produkcijos incidentams parašau pagrindinės priežasties analizę.',
      deliverables: [
        'Atskaitos taškai, atkūrimai ir KPI prieš bet kokį pakeitimą',
        'Skaitymo modeliai ir talpyklos (Meilisearch, Redis, CDN)',
        'Atminties, užklausų ir duomenų apimties optimizavimas',
        'Priežasčių analizės paprasta kalba',
        'WCAG prieinamumo auditai ir taisymai',
      ],
    },
    {
      title: 'AI pagreitintas pristatymas',
      description:
        'Kuriu su agentinėmis AI darbo eigomis — bet kiekvieną žingsnį nukreipiu, kiekvieną eilutę peržiūriu ir atsakau už rezultatą. Taip pat kuriu apsaugas aplink agentus: peržiūros vartus, tipizuotą kodą, CI patikras ir leidimų hooks, kad ir ne programuotojai galėtų saugiai prisidėti.',
      deliverables: [
        'Agentinės kūrimo darbo eigos',
        'Apsaugos: peržiūros vartai, hooks, CI apribojimai',
        'AI funkcijos produktuose (vaizdai, vertimai, duomenų ištraukimas)',
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
      company: 'myanart',
      role: 'Bendraįkūrėjas ir CTO',
      startDate: '2026',
      current: true,
      description:
        'AI meno studija jūsų nuotraukoms: klientas pasirenka stilių ir perkelia savo nuotrauką ant spaudinių, drobės, puodelių ir dovanų, kuriuos atspausdina ir išsiunčia Gelato. Įkūriau ją kartu su partneriu, o visą platformą kuriu ir prižiūriu pats.',
      highlights: [
        'Nuo pirmo commit iki viešo paleidimo per šešias savaites (2026 m. rugsėjis → lapkričio 1 d.); parduoda 52 šalyse, 5 kalbomis ir 3 valiutomis.',
        'Sukūriau spaudos procesą: kliento nuotrauka ir apkarpymas — arba AI stiliaus versija, padidinta iki maždaug 8 192 px — tampa 300 dpi spaudos failu, kuris automatiškai siunčiamas Gelato, su gyvais pristatymo kainų skaičiavimais.',
        'AI vaizdų modelius pasirinkau lygindamas juos tarpusavyje, o AI kainą įtraukiau į nedidelius stiliaus kreditus už kiekvieną peržiūrą.',
        'Medusa pagrindu sukūriau e-komercijos sistemą: rinkos su valiutų kursais ir kainomis su PVM, sąskaitos faktūros be numeracijos spragų, AI padedama buhalterija ir produktų srautai penkiems reklamos kanalams.',
        'Pats rūpinuosi augimu: Meta, Google, TikTok ir Pinterest kampanijos, analitika su Consent Mode ir išmatuotas pardavimų piltuvas, pagal kurį skirstau biudžetą.',
      ],
      skills: [
        'Next.js',
        'TypeScript',
        'Medusa',
        'PostgreSQL',
        'Stripe',
        'Cloudflare',
        'Railway',
        'Vercel',
      ],
      url: 'https://myanart.com',
    },
    {
      company: 'MyUrbanScoot',
      role: 'Laisvai samdomas konsultantas · Senior Full-Stack inžinierius',
      startDate: '2026',
      current: true,
      description:
        'Ispanijos internetinė parduotuvė ir dirbtuvės elektriniams paspirtukams, lipdukams ir dalims, sukurta su Medusa.js 2 ir Next.js. Konsultuoju šį verslą nuo 2026 m. birželio; nuo rugsėjo esu vienintelis platformos inžinierius ir atsakau už kodą, išleidimus, infrastruktūrą ir produkcinės duomenų bazės pakeitimus.',
      highlights: [
        'Perkėliau produktų puslapius į Meilisearch skaitymo modelį: atkurtoje produkcijos valandoje backend užklausų sumažėjo 74 %, o produkto puslapio p50 nukrito nuo 437 iki 69 ms.',
        'Atsekiau produkcinį atminties nuotėkį iki vertimų įskiepio ir jį ištaisiau (20+ GB su gedimais → stabilūs 12–13 GB; po vėlesnių darbų šiandien vidutiniškai apie 3,5 GB), o tada įskiepį pakeičiau nuosavu vertimų moduliu devynioms parduotuvės kalboms.',
        'Kodą padariau griežtai tipizuotą nestabdydamas funkcijų kūrimo: aiškių `any` nuo 4 594 iki 0, strict režimas abiejose aplikacijose ir CI patikra, blokuojanti naujus.',
        'Produkcijoje atnaujinau Medusa 2.8 → 2.19, runbook du kartus išbandęs su produkcinės duomenų bazės kopija.',
        'Sukūriau pristatymo procesą — CI, peržiūros aplinką kiekvienam pull request, automatinį versijavimą — ir nuo v1.0.0 išleidau 185 versijas.',
        'Produkcijos incidentams rašau pagrindinės priežasties analizes, perrašiau sunkiausias analitikos užklausas (bendras skydelis 13,6 s → 3,9 s).',
      ],
      skills: [
        'Medusa',
        'Next.js',
        'TypeScript',
        'Node.js',
        'PostgreSQL',
        'Meilisearch',
        'Redis',
        'Docker',
        'Railway',
        'Cloudflare',
      ],
      url: 'https://myurbanscoot.com',
    },
    {
      company: 'Hypt AG',
      role: 'Senior frontend inžinierius',
      startDate: '2023',
      endDate: '2026',
      current: false,
      description:
        'Šveicarijos pokalbių atsiliepimų SaaS, aptarnaujantis UBS, Raiffeisen, Generali ir Nestlé. Prisijungiau kaip pirmasis frontend inžinierius ir sukūriau visą produktą nuo nulio kartu su vienu backend inžinieriumi.',
      highlights: [
        'Suprojektavau ir sukūriau visą frontend, CI/CD procesus ir pagrindinį produktą nuo nulio — juo dabar pasitiki stambios Šveicarijos bankininkystės ir draudimo įmonės.',
        'Kartu su CTO suprojektavau ir pristačiau pilną REST API — maitinantį funnel builder ir realaus laiko analitikos skydelius, paremtą PostgreSQL.',
        'Sukūriau Chatbot Builder nuo pradžios iki galo: pilnai pritaikomą funnel builder su RxJS pagrįstu būsenos valdymu, nuo produkto dizaino iki pristatymo.',
        'Įdiegiau autentifikacijos architektūrą su Ory SDK — pilną auth srautą, sesijų ir slapukų valdymą visoje platformoje.',
        'Pasiekiau 100% WCAG prieinamumo atitiktį, atitinkančią griežtus enterprise bankinių klientų standartus.',
        'Atsakiau už frontend našumą: paveikslėlių optimizavimas, lengvesni API atsakymai, kodo skaidymas ir lazy loading, vadovaujantis LCP ir tinklo užklausų profiliavimu.',
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
        'Specializavausi našumo optimizavime globalaus prekės ženklo klientams.',
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
        'Ši svetainė — tamsus, vientisai slenkamas portfelis anglų ir lietuvių kalbomis, su atvejų analizėmis ir OG paveikslėlių generavimu. Sukurta su Next.js 16, Tailwind v4 ir Upstash Redis.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Upstash Redis'],
      repo: 'https://github.com/eskruolis/portfolio',
      featured: true,
    },
  ],

  workProjects: [
    {
      title: 'myanart: AI meno studija ir spaudos procesas',
      company: 'myanart',
      description:
        'Įkurta kartu su partneriu, sukurta vieno inžinieriaus: nuotraukų įkėlimas, AI stiliai, spaudos procesas į Gelato, mokėjimai, sąskaitos ir produktų srautai 52 šalims — nuo pirmo commit iki viešo paleidimo per šešias savaites.',
      tags: ['Next.js', 'Medusa', 'Stripe', 'Cloudflare', 'AI image generation'],
      url: 'https://myanart.com',
      caseStudy: 'myanart-launch',
      private: true,
    },
    {
      title: 'Greitesni produktų puslapiai veikiančioje parduotuvėje',
      company: 'MyUrbanScoot',
      description:
        'Produktų puslapius perkėliau į Meilisearch skaitymo modelį ir tai įrodžiau atkurtoje produkcijos valandoje: backend užklausų −74 %, produkto puslapio p50 437 → 69 ms, nulis klaidų.',
      tags: ['Meilisearch', 'Medusa', 'Next.js', 'Redis'],
      url: 'https://myurbanscoot.com',
      caseStudy: 'myurbanscoot-performance',
      private: true,
    },
    {
      title: 'Griežtas tipizavimas nestabdant darbų',
      company: 'MyUrbanScoot',
      description:
        '55 modulių e-komercijos kodą nuo 4 594 aiškių `any` nuvedžiau iki nulio, įjungiau strict režimą abiejose aplikacijose ir pridėjau CI patikrą, kad naujų nebeatsirastų.',
      tags: ['TypeScript', 'Medusa', 'CI/CD'],
      private: true,
    },
    {
      title: 'Pristatymo procesas ir Medusa atnaujinimas',
      company: 'MyUrbanScoot',
      description:
        'CI, peržiūros aplinkos kiekvienam PR, automatinis versijavimas ir 185 išleistos versijos; taip pat Medusa 2.8 → 2.19 atnaujinimas, du kartus išbandytas su produkcijos kopija.',
      tags: ['Docker', 'Railway', 'GitHub Actions', 'Medusa'],
      private: true,
    },
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
      slug: 'myanart-launch',
      title: 'myanart: nuo idėjos iki veikiančios parduotuvės per šešias savaites',
      subtitle:
        'AI meno studijos asmeninėms nuotraukoms bendrakūrimas ir visos jos platformos sukūrimas, būnant vieninteliu inžinieriumi.',
      company: 'myanart',
      year: '2026 — dabar',
      role: 'Bendraįkūrėjas ir CTO',
      tags: [
        'Next.js',
        'Medusa',
        'TypeScript',
        'Stripe',
        'Cloudflare',
        'AI image generation',
      ],
      challenge:
        'Su partneriu norėjome parduotuvės, kurioje bet kas galėtų nuotrauką paversti menu ir perkelti ją ant spaudinio, drobės ar puodelio. Dviese, be inžinierių komandos, viską turėjau sukurti pats: klientų naudojamą kūrimo įrankį, AI stilius, kurie gerai atrodo spaudoje, mokėjimus, mokesčius ir sąskaitas daugeliui šalių bei perdavimą spaudos partneriui.',
      approach: [
        'Rėmiausi valdomomis paslaugomis (Medusa, Stripe, Gelato, Cloudflare, Railway, Vercel), kad verslą galėtų valdyti du žmonės, o kodą rašiau taip, kad jį skaitytų AI agentai, kuriuos nukreipiu ir kurių darbą peržiūriu.',
        'AI vaizdų modelius pasirinkau palygindamas juos greta, o kiekvieną peržiūrą įkainojau kaip nedidelį stiliaus kreditą, padengiantį AI kainą.',
        'Sukūriau spaudos procesą: kliento apkarpymas — arba AI stilius, padidintas iki maždaug 8 192 px — tampa 300 dpi failu su užlaidomis ir drobės apvyniojimu, automatiškai siunčiamu Gelato su gyvais pristatymo kainų skaičiavimais.',
        'Rinkas aprašiau kaip duomenis (šalys, valiutos, kainos su PVM), pridėjau sąskaitas faktūras be numeracijos spragų ir AI padedamą buhalteriją.',
        'Paruošiau išmatuojamą augimą: produktų srautus penkiems reklamos kanalams, analitiką su Consent Mode ir pardavimų piltuvą, pagal kurį skirstomas reklamos biudžetas.',
      ],
      outcomes: [
        'Viešas paleidimas 2026 m. lapkričio 1 d., praėjus šešioms savaitėms nuo pirmo commit — iki lapkričio vidurio 429 sujungti pull request ir 78 versijos, kiekviena per CI.',
        'Parduoda 52 šalyse, 5 kalbomis ir 3 valiutomis.',
        'Pirmasis užsakymas iš nepažįstamo žmogaus — praėjus keturioms dienoms po paleidimo. Dar anksti: kiekvienas reklamos kanalas turi įrodyti savo vertę pagal kainą už įkėlimą ir užsakymą.',
      ],
    },
    {
      slug: 'myurbanscoot-performance',
      title: 'Greitesni produktų puslapiai veikiančioje parduotuvėje',
      subtitle:
        'Elektrinių paspirtukų parduotuvės produktų puslapių perkėlimas į Meilisearch skaitymo modelį — produkto puslapio p50 nuo 437 iki 69 ms atkurtoje produkcijos valandoje.',
      company: 'MyUrbanScoot',
      year: '2026',
      role: 'Laisvai samdomas konsultantas · vienintelis inžinierius',
      tags: ['Meilisearch', 'Medusa', 'Next.js', 'Redis', 'PostgreSQL'],
      challenge:
        'Kiekvienas produkto puslapio peržiūrėjimas kreipdavosi į e-komercijos backend dėl produktų ir vertimų. Šios užklausos sudarė apie tris ketvirtadalius viso backend srauto, o lėtoji dalis — p95 beveik sekundė — pasiekdavo pirkėjus. Pakeitimas turėjo būti įdiegtas veikiančioje parduotuvėje, nė vienam klientui nepakeičiant turinio, kainų ar likučių.',
      approach: [
        'Pirmiausia nustačiau atskaitos tašką: atkūriau tikrą produkcijos valandą staging aplinkoje ir užfiksavau KPI, kad pakeitimas būtų laikomas pagerinimu tik tada, kai išeina už įprasto kasdienio svyravimo ribų.',
        'Meilisearch sukūriau produkto dokumentą, kurį atnaujina vienas backend indeksuotojas, ir produktų puslapius generavau iš jo, o papildomus duomenis (tinkamos transporto priemonės, lipdukai, patobulinimai, atsiliepimai) — iš talpinamų maršrutų.',
        'Prieš perjungdamas patikrinau atitiktį: scenarijus palygino naujus dokumentus su senuoju API 100 tos produkcijos valandos URL, keturiomis kalbomis.',
        'Diegiau etapais — pirmiausia sąrašus ir paiešką su jungikliu kiekvienai aplinkai, tada produktų puslapius — ir palyginau tą pačią atkurtą valandą su senuoju ir naujuoju kodu.',
      ],
      outcomes: [
        'Toje pačioje atkurtoje produkcijos valandoje: backend užklausų −74 %, produkto puslapio p50 437 → 69 ms, p95 943 → 257 ms, abiem atvejais be klaidų.',
        'Gyvoje produkcijoje nuo tada — lapkričio savaitė, palyginti su rugsėjo 24 d. atskaitos tašku — backend užklausų vienai storefront užklausai sumažėjo nuo 1,33 iki 0,12 (−91 %), nors storefront srautas išaugo; tai skaitymo modelio ir po jo sekusių puslapių talpyklos bei CDN darbų rezultatas.',
        'Produktų katalogo užklausų iš produktų puslapių −94 %, jų CPU laiko −92 %.',
        'Atitiktis: kiekvienas imtyje esantis produktas sutapo su senuoju API pagal turinį, kainas, likučius, paveikslėlius ir vertimus.',
        'Susiję darbai toje pačioje parduotuvėje: storefront kompiliavimas ~10 → ~5 min, Docker atvaizdas 2,9 → 1,1 GB, puslapių talpyklos įrašai Redis 5–8 kartus mažesni.',
      ],
    },
    {
      slug: 'chatbot-builder',
      title: 'Chatbot Builder',
      subtitle:
        'Enterprise pokalbių funnel builder kūrimas nuo nulio — dabar naudojamas UBS, Raiffeisen, Generali ir Nestlé.',
      company: 'Hypt AG',
      year: '2023 — 2026',
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
  ],
};
