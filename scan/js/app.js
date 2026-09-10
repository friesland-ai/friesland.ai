/**
 * Friesland.AI - AI-Geletterdheidsscan
 * Gebaseerd op het UNESCO AI Competency Framework for Teachers (2024)
 * Huisstijl www.friesland.ai: Fries Blauw #244994, Pompeblêd Rood #c73326, Wit #FFFFFF, Slate neutralen
 */

// ==========================================
// 1. DATA: UNESCO ASPECTEN & VRAGEN
// ==========================================

const UNESCO_ASPECTS = [
  {
    id: 1,
    key: 'human_centred',
    title: 'Aspect 1: Mensgerichte denkwijze',
    shortTitle: 'Mensgerichte denkwijze',
    unescoName: 'Human-centred mindset',
    description: 'Het behouden van menselijke regie, vakmanschap en kritische autonomie in een wereld vol AI.',
    color: '#244994',
    accentClass: 'card-accent-blue',
    badgeColor: 'bg-[#eff4fa] text-[#244994] border border-[#d2e0f4] dark:bg-[#15233d] dark:text-[#8bb1ff] dark:border-[#243c68]',
    icon: 'user-check',
    focusMBO: 'Beroepsidentiteit, vakmanschap van de student en menselijk contact in de beroepspraktijk bewaken.'
  },
  {
    id: 2,
    key: 'ethics',
    title: 'Aspect 2: Ethiek van AI',
    shortTitle: 'Ethiek van AI',
    unescoName: 'Ethics of AI',
    description: 'Verantwoord en veilig omgaan met AI, privacy (AVG), data van leerbedrijven en het herkennen van bias.',
    color: '#c73326',
    accentClass: 'card-accent-red',
    badgeColor: 'bg-[#fdf2f1] text-[#c73326] border border-[#fad4d1] dark:bg-[#321715] dark:text-[#ff9288] dark:border-[#58211d]',
    icon: 'shield-alert',
    focusMBO: 'Integriteit bij beroepsproducten, bescherming van patiënt-/klantdata en eerlijke AI-toepassing.'
  },
  {
    id: 3,
    key: 'foundations',
    title: 'Aspect 3: Fundamenten en toepassingen van AI',
    shortTitle: 'Fundamenten & Toepassingen',
    unescoName: 'AI foundations and applications',
    description: 'Begrijpen hoe AI en LLM’s werken, tools effectief selecteren en doeltreffend prompten voor het vakgebied.',
    color: '#244994',
    accentClass: 'card-accent-blue',
    badgeColor: 'bg-[#eff4fa] text-[#244994] border border-[#d2e0f4] dark:bg-[#15233d] dark:text-[#8bb1ff] dark:border-[#243c68]',
    icon: 'cpu',
    focusMBO: 'Weten wat AI wel en niet kan, hallucinaties opsporen en branchespecifieke AI-tools beheersen.'
  },
  {
    id: 4,
    key: 'pedagogy',
    title: 'Aspect 4: AI-pedagogie in het MBO',
    shortTitle: 'AI-pedagogie in het MBO',
    unescoName: 'AI pedagogy',
    description: 'AI inzetten om krachtige beroepsgerichte leersituaties te ontwerpen, te differentiëren en formatief te handelen.',
    color: '#c73326',
    accentClass: 'card-accent-red',
    badgeColor: 'bg-[#fdf2f1] text-[#c73326] border border-[#fad4d1] dark:bg-[#321715] dark:text-[#ff9288] dark:border-[#58211d]',
    icon: 'graduation-cap',
    focusMBO: 'Realistische praktijkcasussen bouwen, differentiëren naar mbo 1-4 en gerichte feedback geven.'
  },
  {
    id: 5,
    key: 'professional_dev',
    title: 'Aspect 5: AI voor professionele ontwikkeling & BPV',
    shortTitle: 'Professionele ontwikkeling & BPV',
    unescoName: 'AI for professional development',
    description: 'Werkdruk verlagen met AI, samenwerken in het docententeam en afstemmen met het regionale bedrijfsleven (BPV).',
    color: '#244994',
    accentClass: 'card-accent-gradient',
    badgeColor: 'bg-[#eff4fa] text-[#244994] border border-[#d2e0f4] dark:bg-[#15233d] dark:text-[#8bb1ff] dark:border-[#243c68]',
    icon: 'sparkles',
    focusMBO: 'Tijd besparen bij administratie/lesontwerp, kennisdelen en aansluiten bij ontwikkelingen in het leerbedrijf.'
  }
];

const QUESTIONS = [
  // ASPECT 1: MENSGERICHTE DENKWIJZE
  {
    id: 'q1_1',
    aspectId: 1,
    aspectKey: 'human_centred',
    number: 1,
    unescoCompetency: '1. Menselijke regie & vakmanschap (Human Agency)',
    statement: 'Ik zorg ervoor dat AI in mijn onderwijs altijd ondergeschikt blijft aan menselijke regie en het vakmanschap van de mbo-student.',
    description: 'AI is een ondersteunend instrument. De student moet zelf de verantwoordelijkheid, de controle en het kritische eindoordeel houden over het werk.',
    mboExample: 'In een technische of zorgopleiding laat je studenten niet blind varen op een door AI gegenereerd werkplan of zorgplan, maar laat je hen uitleggen waarom bepaalde keuzes vakinhoudelijk juist of onveilig zijn.'
  },
  {
    id: 'q1_2',
    aspectId: 1,
    aspectKey: 'human_centred',
    number: 2,
    unescoCompetency: '2. Welzijn, sociale veiligheid en kansengelijkheid',
    statement: 'Ik ben alert op de invloed van AI op het welzijn, de motivatie en de gelijke kansen van al mijn mbo-studenten.',
    description: 'Niet iedere student heeft gelijke toegang tot betaalde AI-tools of evenveel digitale zelfredzaamheid. AI mag geen nieuwe kloof creëren.',
    mboExample: 'Je zorgt dat opdrachten uitvoerbaar zijn met gratis/toegankelijke tools en dat studenten niet ontmoedigd raken of een "AI-luie" houding aannemen.'
  },
  {
    id: 'q1_3',
    aspectId: 1,
    aspectKey: 'human_centred',
    number: 3,
    unescoCompetency: '3. Kritisch burgerschap & mediawijsheid op de werkvloer',
    statement: 'Ik stimuleer mbo-studenten om kritisch na te denken over de maatschappelijke en professionele impact van AI in hun toekomstige beroep.',
    description: 'Studenten leren begrijpen hoe AI banen, werkprocessen en klantcontact in hun vakgebied verandert.',
    mboExample: 'Je voert met studenten een klassengesprek over hoe AI het werk van een administratief medewerker, monteur of verpleegkundige verandert en welke menselijke kwaliteiten juist onvervangbaar blijven.'
  },

  // ASPECT 2: ETHIEK VAN AI
  {
    id: 'q2_1',
    aspectId: 2,
    aspectKey: 'ethics',
    number: 4,
    unescoCompetency: '4. Ethische richtlijnen & integriteit bij beroepsproducten',
    statement: 'Ik maak heldere afspraken met mbo-studenten over wanneer en hoe AI ethisch en transparant mag worden ingezet bij opdrachten en portfolio’s.',
    description: 'Duidelijkheid over bronvermelding, transparantie bij AI-gebruik en het voorkomen van oneigenlijk gebruik bij examens en verslagen.',
    mboExample: 'Je hanteert een duidelijke richtlijn: "Je mag AI gebruiken voor brainstormen of tekstredactie, mits je je prompts vermeldt en toelicht wat je zelf hebt aangepast."'
  },
  {
    id: 'q2_2',
    aspectId: 2,
    aspectKey: 'ethics',
    number: 5,
    unescoCompetency: '5. Privacy (AVG), auteursrecht & data van leerbedrijven (BPV)',
    statement: 'Ik weet hoe ik en mijn studenten zorgvuldig moeten omgaan met privacy (AVG), persoonsgegevens en gevoelige informatie van stage- en leerbedrijven.',
    description: 'Voorkomen dat privacygevoelige patiëntendossiers, bedrijfsgeheimen of persoonsgegevens in openbare AI-modellen worden geplakt.',
    mboExample: 'Je leert studenten tijdens BPV-opdrachten dat zij nóóit herleidbare cliëntgegevens, logboeken met privégegevens of interne bedrijfscijfers in een openbaar AI-model mogen invoeren.'
  },
  {
    id: 'q2_3',
    aspectId: 2,
    aspectKey: 'ethics',
    number: 6,
    unescoCompetency: '6. Bias, vooroordelen en discriminatie herkennen',
    statement: 'Ik kan studenten uitleggen hoe AI-systemen vooroordelen (bias) kunnen bevatten en hoe dit kan doorwerken in de beroepspraktijk.',
    description: 'Begrip van hoe trainingsdata kan leiden tot stereotypering bij werving & selectie, gezichtsherkenning of geautomatiseerde risico-inschattingen.',
    mboExample: 'Met studenten Zakelijke Dienstverlening onderzoek je hoe een AI-cv-screeningstool bepaalde groepen kan bevoordelen of benadelen.'
  },

  // ASPECT 3: FUNDAMENTEN EN TOEPASSINGEN VAN AI
  {
    id: 'q3_1',
    aspectId: 3,
    aspectKey: 'foundations',
    number: 7,
    unescoCompetency: '7. Basiskennis van AI-werking, LLM’s & hallucinaties',
    statement: 'Ik begrijp de basisprincipes van hoe generatieve AI werkt (patroonherkenning, kansberekening) en herken de beperkingen zoals hallucinaties en verouderde kennis.',
    description: 'Weten dat een taalmodel geen "waarheidsmachine" is, maar statistische voorspellingen doet op basis van trainingsdata.',
    mboExample: 'Je weet waarom ChatGPT overtuigend klinkende maar feitelijk onjuiste artikelnummers, wetgeving of vakliteratuur kan verzinnen.'
  },
  {
    id: 'q3_2',
    aspectId: 3,
    aspectKey: 'foundations',
    number: 8,
    unescoCompetency: '8. Beoordelen en selecteren van AI-tools voor de opleiding',
    statement: 'Ik kan beoordelen welke AI-tools geschikt en veilig zijn voor mijn specifieke mbo-vakgebied of onderwijspraktijk.',
    description: 'In staat zijn om zin van onzin te scheiden bij het groeiende aanbod aan AI-applicaties (tekst, beeld, audio, data, branchetools).',
    mboExample: 'Je kiest bewust tussen een algemeen taalmodel (zoals Copilot/ChatGPT) en een vakspecifieke AI-toepassing (zoals AI-calculatiesoftware, ontwerptools of simulator-assistenten).'
  },
  {
    id: 'q3_3',
    aspectId: 3,
    aspectKey: 'foundations',
    number: 9,
    unescoCompetency: '9. Doeltreffend prompten in de beroeps- en onderwijscontext',
    statement: 'Ik beheers de vaardigheid om effectieve, gestructureerde prompts te schrijven met rol, context, instructie en gewenst uitvoerformaat.',
    description: 'Weten hoe je met duidelijke context, stappenplannen en voorbeelden (few-shot prompting) kwalitatief hoogwaardige output krijgt.',
    mboExample: 'Je formuleert een prompt: "Handel als een ervaren praktijkbegeleider in de installatietechniek. Maak 3 realistische storingsscenario’s voor niveau 3 studenten inclusief meetstappen."'
  },

  // ASPECT 4: AI-PEDAGOGIE IN HET MBO
  {
    id: 'q4_1',
    aspectId: 4,
    aspectKey: 'pedagogy',
    number: 10,
    unescoCompetency: '10. Ontwerpen van AI-verrijkte beroepsgerichte opdrachten',
    statement: 'Ik ontwerp leeractiviteiten waarin studenten AI doelgericht inzetten om realistische beroepsproblemen en praktijkcasussen op te lossen.',
    description: 'AI integreren in het leerproces zodat studenten leren werken zóals de moderne praktijk dat straks van hen vraagt.',
    mboExample: 'Studenten Horeca/Toerisme gebruiken AI om een duurzaam menu-concept te berekenen of een marketingcampagne te ontwikkelen, en verantwoorden daarna mondeling hun keuzes.'
  },
  {
    id: 'q4_2',
    aspectId: 4,
    aspectKey: 'pedagogy',
    number: 11,
    unescoCompetency: '11. Differentiëren en personaliseren (mbo-niveau 1 t/m 4)',
    statement: 'Ik gebruik AI om lesstof aan te passen aan verschillende taalniveaus, leertempo’s en speciale ondersteuningsbehoeften van mbo-studenten.',
    description: 'AI inzetten om ingewikkelde vakteksten te hertalen (bijv. naar B1/A2), visuele stappenplannen te genereren of verdiepende opdrachten te maken.',
    mboExample: 'Je laat AI een technisch kwalificatiedossier of wetgevingstekst omzetten in een eenvoudig stappenplan met pictogram-suggesties voor niveau 2 studenten.'
  },
  {
    id: 'q4_3',
    aspectId: 4,
    aspectKey: 'pedagogy',
    number: 12,
    unescoCompetency: '12. Formatieve evaluatie & gerichte feedback met AI',
    statement: 'Ik zet AI in om sneller en gerichter formatieve feedback te geven op tussenproducten of om studenten zelfreflectie te laten oefenen.',
    description: 'AI als assistent bij het formuleren van opbouwende tips & tops op basis van vooraf gedefinieerde beoordelingscriteria (rubrics).',
    mboExample: 'Je gebruikt een gestructureerde prompt met je beoordelingsrubric om eerste conceptverslagen snel van constructieve feedbacksuggesties te voorzien, waarna jij het definitieve oordeel velt.'
  },

  // ASPECT 5: PROFESSIONELE ONTWIKKELING & WERKVELD
  {
    id: 'q5_1',
    aspectId: 5,
    aspectKey: 'professional_dev',
    number: 13,
    unescoCompetency: '13. Werkdrukverlaging en persoonlijke productiviteit',
    statement: 'Ik gebruik AI-toepassingen effectief om routinematige taken (zoals e-mails opstellen, lesvoorbereiding, formats maken) te versnellen en mijn werkdruk te verlagen.',
    description: 'Slimme inzet van AI voor repetitieve administratieve taken zodat er meer tijd en energie overblijft voor persoonlijk contact met studenten.',
    mboExample: 'Binnen enkele minuten een complete lesopzet, discussievragen of een ouderbrief laten opstellen en fijnslijpen met AI.'
  },
  {
    id: 'q5_2',
    aspectId: 5,
    aspectKey: 'professional_dev',
    number: 14,
    unescoCompetency: '14. Samenwerking en kennisdeling in het mbo-onderwijsteam',
    statement: 'Ik wissel actief ervaringen, prompts en best practices rondom AI uit met collega’s binnen mijn opleiding of onderwijsteam.',
    description: 'Samen leren en als team één consistente lijn ontwikkelen over het gebruik van AI binnen de opleiding.',
    mboExample: 'In de vakgroep of teamvergadering prompts delen voor het maken van BPV-opdrachten of gezamenlijk richtlijnen afstemmen voor toetsing.'
  },
  {
    id: 'q5_3',
    aspectId: 5,
    aspectKey: 'professional_dev',
    number: 15,
    unescoCompetency: '15. Aansluiting bij beroepspraktijk (BPV) en schoolvisie',
    statement: 'Ik zoek actief de verbinding met het regionale werkveld (leerbedrijven/stageplekken) om te begrijpen hoe AI hún praktijk verandert en draag bij aan de schoolvisie.',
    description: 'Weten hoe praktijkopleiders omgaan met AI en zorgen dat het mbo-curriculum aansluit op de moderne werkelijkheid van het beroep.',
    mboExample: 'Tijdens een BPV-bezoek met de praktijkbegeleider bespreken welke AI-toepassingen zij al gebruiken op de werkvloer en wat dit vraagt van toekomstige afstudeerders.'
  }
];

const LIKERT_OPTIONS = [
  { 
    value: 1, 
    label: 'Helemaal oneens', 
    sublabel: 'Nog niet mee bezig / Geen ervaring',
    colorHex: '#64748b',
    activeClass: 'bg-[#475569] text-white border-[#334155] shadow-md ring-2 ring-[#475569]/30',
    hoverBorder: 'hover:border-[#94a3b8] hover:bg-[#f8fafc] dark:hover:bg-[#1e293b]',
    activeSubtext: 'text-slate-200',
    activeNum: 'text-white'
  },
  { 
    value: 2, 
    label: 'Enigszins oneens', 
    sublabel: 'Verkennend / Beperkte ervaring',
    colorHex: '#475569',
    activeClass: 'bg-[#334155] text-white border-[#1e293b] shadow-md ring-2 ring-[#334155]/30',
    hoverBorder: 'hover:border-[#64748b] hover:bg-[#f8fafc] dark:hover:bg-[#1e293b]',
    activeSubtext: 'text-slate-200',
    activeNum: 'text-white'
  },
  { 
    value: 3, 
    label: 'Neutraal', 
    sublabel: 'Incidenteel / Af en toe in praktijk',
    colorHex: '#c73326',
    activeClass: 'bg-[#c73326] text-white border-[#ad2b20] shadow-md ring-2 ring-[#c73326]/30',
    hoverBorder: 'hover:border-[#c73326] hover:bg-[#fdf2f1] dark:hover:bg-[#321715]',
    activeSubtext: 'text-red-100',
    activeNum: 'text-white'
  },
  { 
    value: 4, 
    label: 'Grotendeels eens', 
    sublabel: 'Doelgericht & Bewust toegepast',
    colorHex: '#3862b8',
    activeClass: 'bg-[#3862b8] text-white border-[#274c96] shadow-md ring-2 ring-[#3862b8]/30',
    hoverBorder: 'hover:border-[#3862b8] hover:bg-[#eff4fa] dark:hover:bg-[#15233d]',
    activeSubtext: 'text-blue-100',
    activeNum: 'text-white'
  },
  { 
    value: 5, 
    label: 'Volledig mee eens', 
    sublabel: 'Structureel & Voorbeeldrol',
    colorHex: '#244994',
    activeClass: 'bg-[#244994] text-white border-[#1a3773] shadow-lg ring-2 ring-[#244994]/40',
    hoverBorder: 'hover:border-[#244994] hover:bg-[#eff4fa] dark:hover:bg-[#15233d]',
    activeSubtext: 'text-blue-100',
    activeNum: 'text-white'
  }
];

const ASPECT_RECOMMENDATIONS = {
  human_centred: {
    acquire: {
      title: 'Verken de rol van menselijk vakmanschap',
      points: [
        'Organiseer een open gesprek in de klas: waar kan AI helpen in het beroep en waar is menselijke intuïtie en handwerk onvervangbaar?',
        'Zorg dat opdrachten altijd een mondelinge of praktische verantwoording bevatten, zodat de student zelf de regie aantoont.',
        'Houd rekening met verschillen in digitale vaardigheden en toegang tot tools tussen studenten.'
      ]
    },
    deepen: {
      title: 'Versterk kritisch burgerschap en autonomie',
      points: [
        'Laat studenten AI-antwoorden systematisch vergelijken met officiële vakvoorschriften, NEN-normen of protocollen.',
        'Ontwerp opdrachten waarin studenten bewust fouten in AI-outputs moeten opsporen en corrigeren.',
        'Bespreek de impact van AI op beroepen: hoe voorkom je dat een vakman louter een "knopjesdrukker" wordt?'
      ]
    },
    create: {
      title: 'Neem de leiding in mensgericht onderwijsontwerp',
      points: [
        'Ontwikkel samen met collega’s een opleidingsvisie waarin menselijk vakmanschap en AI elkaar versterken.',
        'Deel best practices met andere mbo-teams over hoe je formatief toetst op menselijke vakkennis en beroepshouding.',
        'Werk samen met BPV-bedrijven aan richtlijnen voor een veilige en menswaardige inzet van AI op de werkplek.'
      ]
    }
  },
  ethics: {
    acquire: {
      title: 'Zorg voor duidelijke basisafspraken',
      points: [
        'Maak eenvoudige, transparante spelregels: AI mag gebruikt worden als denkpartner, mits vermeld in het verslag.',
        'Hamer op AVG-regels: leg studenten uit dat persoonsgegevens van cliënten of klanten nóóit in openbare AI horen.',
        'Voorkom een verbodscultuur; creëer een sfeer waarin studenten open durven vertellen wanneer en hoe ze AI hebben geraadpleegd.'
      ]
    },
    deepen: {
      title: 'Borg ethiek en privacy in BPV en opdrachten',
      points: [
        'Voeg een vaste disclaimer/verantwoording toe aan portfolio-templates waarin studenten hun AI-prompts toelichten.',
        'Bespreek casussen over bias en vooroordelen in selectie- en wervingsalgoritmes op de arbeidsmarkt.',
        'Onderzoek samen met studenten auteursrecht en intellectueel eigendom bij door AI gegenereerde afbeeldingen en teksten.'
      ]
    },
    create: {
      title: 'Vorm beleid en train collega’s in ethische kaders',
      points: [
        'Draag bij aan het instellingsbrede AI-beleid en de implementatie van de EU AI Act binnen het MBO.',
        'Ontwikkel richtlijnen voor examencommissies over de validiteit van beroepsproducten in relatie tot AI.',
        'Zet een ethische intervisie op binnen het team over dilemma’s bij het beoordelen van studentenwerk.'
      ]
    }
  },
  foundations: {
    acquire: {
      title: 'Bouw basisbegrip en verken AI-tools',
      points: [
        'Leer hoe taalmodellen werken als statistische voorspellers en waarom ze met grote stelligheid kunnen hallucineren.',
        'Experimenteer met de basisstructuur van een prompt: Rol + Doelgroep + Taak + Voorwaarden + Uitvoerformaat.',
        'Volg een korte webinar of e-learning over AI in het mbo (bijv. via Npuls of Kennisnet).'
      ]
    },
    deepen: {
      title: 'Verfijn prompting en verken vactools',
      points: [
        'Gebruik geavanceerdere prompttechnieken (zoals chain-of-thought en few-shot examples) voor specifieke vakdidactiek.',
        'Verken branchespecifieke AI-applicaties die in jouw sector worden gebruikt (bijv. in CAD, diagnostiek, e-commerce).',
        'Stel een gecureerde lijst samen van veilige, goedgekeurde AI-tools voor jouw onderwijsteam.'
      ]
    },
    create: {
      title: 'Ontwikkel innovatieve workflows en tools',
      points: [
        'Bouw op maat gemaakte Custom GPT’s of assistenten die afgestemd zijn op specifieke mbo-keuzedelen of BPV-eisen.',
        'Geef hands-on workshops aan collega’s over slimme prompttechnieken voor lesvoorbereiding en casusontwikkeling.',
        'Evalueer samen met ICTO de privacy- en veiligheidsvoorwaarden van nieuwe educatieve AI-software.'
      ]
    }
  },
  pedagogy: {
    acquire: {
      title: 'Start met kleine AI-lesinterventies',
      points: [
        'Gebruik AI om snel twee verschillende niveaus van een leestekst te maken voor niveau 2 en niveau 4 studenten.',
        'Laat studenten een AI-antwoord analyseren op vakfouten als actieve werkvorm.',
        'Vraag AI om suggesties voor praktijkgerichte energizers of activerende werkvormen rondom je vakonderwerp.'
      ]
    },
    deepen: {
      title: 'Integreer AI in het complete didactische proces',
      points: [
        'Ontwerp opdrachten waarbij AI fungeert als virtuele klant, simulator of sparringpartner voor de student.',
        'Zet AI in om sneller formatieve feedbacksuggesties te formuleren op basis van duidelijke beoordelingsrubrics.',
        'Laat studenten met behulp van AI complexe beroepsprojecten opdelen in behapbare deelstappen.'
      ]
    },
    create: {
      title: 'Herontwerp curriculum en toetsing voor de AI-tijd',
      points: [
        'Herontwerp toetsvormen met de nadruk op procesbeoordeling, criteriumgerichte interviews en live demonstraties.',
        'Ontwikkel samen met collega’s integrale beroepsopdrachten waarin AI als volwaardige collega fungeert.',
        'Publiceer of deel innovatieve lesmodules binnen het landelijke MBO-netwerk (bijv. Npuls / Kennisnet).'
      ]
    }
  },
  professional_dev: {
    acquire: {
      title: 'Bespaar tijd bij dagelijkse routines',
      points: [
        'Zet AI in voor het opstellen van lesplannen, toetsvragen, ouderbrieven of standaard administratieve e-mails.',
        'Start een informeel "AI-kwartiertje" in je vakgroep om elkaar handige prompts en ontdekkingen te laten zien.',
        'Houd een overzicht bij van taken waar AI je daadwerkelijk tijd heeft bespaard.'
      ]
    },
    deepen: {
      title: 'Werk samen in het team en betrek het werkveld',
      points: [
        'Bouw een gedeelde prompt-bibliotheek in Teams of SharePoint voor jouw hele mbo-opleidingsteam.',
        'Bespreek tijdens stagebezoeken met praktijkopleiders hoe AI hun branche transformeert en vertaal dit naar lessen.',
        'Neem deel aan intercollegiale netwerken of scholing rondom AI in het beroepsonderwijs.'
      ]
    },
    create: {
      title: 'Vorm de strategische brug tussen onderwijs en regio',
      points: [
        'Initieer gezamenlijke projecten tussen studenten, docenten en regionale bedrijven rondom AI-toepassingen.',
        'Coach collega-docenten en praktijkinstructeurs bij het ontwikkelen van hun AI-geletterdheid.',
        'Draag actief bij aan de beleidsvorming en professionaliseringsagenda van je mbo-instelling.'
      ]
    }
  }
};

// ==========================================
// 2. SCORING & PROFIEL BEREKENING
// ==========================================

function calculateScores(answers) {
  const aspectScores = [];
  let totalScoreSum = 0;
  let answeredCount = 0;

  UNESCO_ASPECTS.forEach(aspect => {
    const aspectQuestions = QUESTIONS.filter(q => q.aspectId === aspect.id);
    let aspectSum = 0;
    let count = 0;

    aspectQuestions.forEach(q => {
      const val = answers[q.id];
      if (val !== undefined && val !== null) {
        aspectSum += Number(val);
        count++;
      }
    });

    const average = count > 0 ? aspectSum / count : 0;
    const percentage = Math.round((average / 5) * 100);

    totalScoreSum += aspectSum;
    answeredCount += count;

    let unescoLevel = 'Niveau 1: Begrijpen (Acquire)';
    let levelKey = 'acquire';
    let levelBadge = 'Basis / Oriënterend';
    let levelColor = 'bg-[#eff4fa] text-[#244994] border border-[#d2e0f4] dark:bg-[#15233d] dark:text-[#8bb1ff]';

    if (average >= 3.8) {
      unescoLevel = 'Niveau 3: Innoveren & Leiden (Create)';
      levelKey = 'create';
      levelBadge = 'Expert / Innovator';
      levelColor = 'bg-[#c73326] text-white shadow-sm';
    } else if (average >= 2.5) {
      unescoLevel = 'Niveau 2: Toepassen / Verdiepen (Deepen)';
      levelKey = 'deepen';
      levelBadge = 'Gevorderd / Toepasser';
      levelColor = 'bg-[#244994] text-white';
    }

    aspectScores.push({
      aspectId: aspect.id,
      key: aspect.key,
      title: aspect.title,
      shortTitle: aspect.shortTitle,
      unescoName: aspect.unescoName,
      color: aspect.color,
      badgeColor: aspect.badgeColor,
      icon: aspect.icon,
      focusMBO: aspect.focusMBO,
      rawSum: aspectSum,
      maxSum: aspectQuestions.length * 5,
      average: parseFloat(average.toFixed(1)),
      percentage,
      unescoLevel,
      levelKey,
      levelBadge,
      levelColor
    });
  });

  const totalQuestions = QUESTIONS.length;
  const overallAverage = answeredCount > 0 ? parseFloat((totalScoreSum / answeredCount).toFixed(1)) : 0;
  const overallPercentage = Math.round((overallAverage / 5) * 100);

  let profile = {
    title: 'AI-Oriënteerder in het Onderwijs',
    subtitle: 'Niveau 1: Verkennende fase',
    badge: 'Startende Ontdekker',
    badgeClass: 'bg-[#244994] text-white',
    bgClass: 'bg-white border-slate-200 dark:bg-[#131c2e] dark:border-slate-800',
    summary: 'Je staat aan het begin van je AI-reis in het beroepsonderwijs. Je verkent wat AI inhoudt en wat het kan betekenen voor jouw vakgebied. Deze scan biedt je overzichtelijke handvatten om veilig en laagdrempelig te starten.'
  };

  if (overallPercentage >= 80) {
    profile = {
      title: 'AI-Pionier & Innovator',
      subtitle: 'Niveau 3: Creëren, Coachen & Innoveren',
      badge: 'Beroepsgericht Innovator & Coach',
      badgeClass: 'bg-[#c73326] text-white shadow-sm',
      bgClass: 'bg-[#fdf2f1]/80 border-[#fad4d1] dark:bg-[#201416] dark:border-[#522421]',
      summary: 'Je bent een koploper in het onderwijs. Je zet AI niet alleen didactisch krachtig in voor jouw studenten en beroepsopdrachten, maar bewaakt scherp de ethiek, stimuleert menselijke regie en fungeert als inspirator en vraagbaak voor je team en de regio Friesland.'
    };
  } else if (overallPercentage >= 60) {
    profile = {
      title: 'AI-Toepasser & Verdieper',
      subtitle: 'Niveau 2: Doelgerichte Integratie in de Lespraktijk',
      badge: 'Praktijkgerichte Toepasser',
      badgeClass: 'bg-[#244994] text-white',
      bgClass: 'bg-[#eff4fa]/70 border-[#d2e0f4] dark:bg-[#131c2e] dark:border-[#21385e]',
      summary: 'Je gebruikt AI al bewust en regelmatig in je onderwijs. Je weet hoe je prompts formuleert, differentieert voor studenten en routines versnelt. De volgende stap is om samen met je team afspraken te borgen en studenten nog scherper te trainen in kritisch AI-gebruik op de werkplek.'
    };
  } else if (overallPercentage >= 40) {
    profile = {
      title: 'AI-Verkenner in het Onderwijs',
      subtitle: 'Niveau 1-2: Actieve Verkenning & Eerste Toepassingen',
      badge: 'Actieve Praktijkverkenner',
      badgeClass: 'bg-[#244994] text-white',
      bgClass: 'bg-[#f8fafc] border-slate-200 dark:bg-[#131c2e] dark:border-slate-800',
      summary: 'Je experimenteert zo nu en dan met AI-tools en ziet de mogelijkheden voor het onderwijs. Er liggen mooie kansen om AI gerichter in te zetten voor werkdrukverlaging bij lesvoorbereiding, differentiëren naar niveaus en duidelijke afspraken over ethiek.'
    };
  }

  return {
    aspectScores,
    overallAverage,
    overallPercentage,
    answeredCount,
    totalQuestions,
    isComplete: answeredCount === totalQuestions,
    profile
  };
}

// ==========================================
// 3. RADAR CHART VISUALISATIE (CHART.JS)
// ==========================================

let radarChartInstance = null;

function renderRadarChart(canvasId, aspectScores, isDarkMode = false) {
  if (typeof Chart === 'undefined') return;
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  if (radarChartInstance) {
    radarChartInstance.destroy();
    radarChartInstance = null;
  }

  const labels = aspectScores.map(a => a.shortTitle);
  const dataValues = aspectScores.map(a => a.average);

  const gridColor = isDarkMode ? 'rgba(148, 163, 184, 0.18)' : 'rgba(203, 213, 225, 0.7)';
  const angleLineColor = isDarkMode ? 'rgba(148, 163, 184, 0.22)' : 'rgba(203, 213, 225, 0.85)';
  const labelColor = isDarkMode ? '#f1f5f9' : '#0f172a';

  const ctx = canvas.getContext('2d');

  radarChartInstance = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Jouw AI-Profiel (Friesland.AI)',
          data: dataValues,
          backgroundColor: isDarkMode ? 'rgba(77, 121, 216, 0.32)' : 'rgba(36, 73, 148, 0.20)',
          borderColor: '#244994',
          borderWidth: 2.5,
          pointBackgroundColor: '#FFFFFF',
          pointBorderColor: '#244994',
          pointBorderWidth: 2,
          pointRadius: 5,
          pointHoverRadius: 7,
          pointHoverBackgroundColor: '#244994',
          pointHoverBorderColor: '#FFFFFF',
          fill: true
        },
        {
          label: 'Streefniveau Gevorderd (4.0)',
          data: [4.0, 4.0, 4.0, 4.0, 4.0],
          backgroundColor: 'transparent',
          borderColor: '#c73326',
          borderWidth: 2,
          borderDash: [5, 5],
          pointRadius: 0,
          pointHoverRadius: 0,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 600, easing: 'easeOutQuart' },
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            color: labelColor,
            font: { family: "'Outfit', 'Inter', system-ui, sans-serif", size: 12, weight: '600' },
            padding: 16,
            usePointStyle: true,
            boxWidth: 8
          }
        },
        tooltip: {
          backgroundColor: isDarkMode ? '#0f172a' : '#1e293b',
          titleColor: '#FFFFFF',
          bodyColor: '#e2e8f0',
          borderColor: '#244994',
          borderWidth: 1,
          padding: 12,
          callbacks: {
            title: (context) => aspectScores[context[0].dataIndex].title,
            label: (context) => ` ${context.dataset.label}: ${context.raw.toFixed(1)} / 5.0 (${Math.round((context.raw / 5) * 100)}%)`,
            afterLabel: (context) => context.datasetIndex === 0 ? `UNESCO Niveau: ${aspectScores[context.dataIndex].levelBadge}` : null
          }
        }
      },
      scales: {
        r: {
          min: 0,
          max: 5,
          ticks: {
            stepSize: 1,
            display: true,
            backdropColor: 'transparent',
            color: isDarkMode ? '#88A3A3' : '#688282',
            font: { size: 10 }
          },
          grid: { color: gridColor },
          angleLines: { color: angleLineColor },
          pointLabels: {
            color: labelColor,
            font: { family: "'Plus Jakarta Sans', system-ui, sans-serif", size: 11, weight: '600' },
            padding: 10
          }
        }
      }
    }
  });
}

function updateChartTheme(isDarkMode) {
  if (radarChartInstance) {
    const gridColor = isDarkMode ? 'rgba(148, 163, 184, 0.18)' : 'rgba(203, 213, 225, 0.7)';
    const angleLineColor = isDarkMode ? 'rgba(148, 163, 184, 0.22)' : 'rgba(203, 213, 225, 0.85)';
    const labelColor = isDarkMode ? '#f1f5f9' : '#0f172a';

    radarChartInstance.options.scales.r.grid.color = gridColor;
    radarChartInstance.options.scales.r.angleLines.color = angleLineColor;
    radarChartInstance.options.scales.r.pointLabels.color = labelColor;
    radarChartInstance.options.scales.r.ticks.color = isDarkMode ? '#94a3b8' : '#64748b';
    radarChartInstance.options.plugins.legend.labels.color = labelColor;
    radarChartInstance.data.datasets[0].backgroundColor = isDarkMode ? 'rgba(77, 121, 216, 0.32)' : 'rgba(36, 73, 148, 0.20)';
    radarChartInstance.update();
  }
}

// ==========================================
// 4. APPLICATIE LOGICA & STATE
// ==========================================

const STORAGE_KEY = 'mbo_ai_geletterdheid_scan_v1';
let state = {
  answers: {},
  currentAspectId: 1,
  theme: 'light',
  currentView: 'intro'
};

function safeIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      state = { ...state, ...parsed };
    }
  } catch (e) {
    console.warn('Geen eerdere staat geladen:', e);
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      answers: state.answers,
      currentAspectId: state.currentAspectId,
      theme: state.theme,
      currentView: state.currentView
    }));
  } catch (e) {
    console.warn('Kon staat niet opslaan:', e);
  }
}

function applyTheme(theme) {
  state.theme = theme;
  const html = document.documentElement;
  const themeToggleIcon = document.getElementById('theme-toggle-icon');

  if (theme === 'dark') {
    html.classList.add('dark');
    if (themeToggleIcon) themeToggleIcon.setAttribute('data-lucide', 'sun');
  } else {
    html.classList.remove('dark');
    if (themeToggleIcon) themeToggleIcon.setAttribute('data-lucide', 'moon');
  }

  updateChartTheme(theme === 'dark');
  safeIcons();
  saveState();
}

function renderScanView() {
  const aspectNavContainer = document.getElementById('aspect-nav-tabs');
  const questionsContainer = document.getElementById('questions-container');
  const progressPercentEl = document.getElementById('scan-progress-percentage');
  const progressBarEl = document.getElementById('scan-progress-bar');
  const progressTextEl = document.getElementById('scan-progress-text');

  const answeredCount = Object.keys(state.answers).length;
  const progressPct = Math.round((answeredCount / QUESTIONS.length) * 100);

  if (progressPercentEl) progressPercentEl.textContent = `${progressPct}%`;
  if (progressBarEl) progressBarEl.style.width = `${progressPct}%`;
  if (progressTextEl) progressTextEl.textContent = `${answeredCount} van de ${QUESTIONS.length} stellingen ingevuld`;

  // Aspect Tabs
  if (aspectNavContainer) {
    aspectNavContainer.innerHTML = UNESCO_ASPECTS.map(asp => {
      const aspQuestions = QUESTIONS.filter(q => q.aspectId === asp.id);
      const aspAnswered = aspQuestions.filter(q => state.answers[q.id] !== undefined).length;
      const isComplete = aspAnswered === aspQuestions.length;
      const isActive = state.currentAspectId === asp.id;

      return `
        <button type="button" 
          data-aspect-tab="${asp.id}"
          class="flex-1 min-w-[170px] p-3 rounded-2xl border text-left transition-all duration-200 relative cursor-pointer
            ${isActive 
              ? 'bg-white dark:bg-[#131c2e] border-[#244994] shadow-sm ring-2 ring-[#244994]/20 text-slate-900 dark:text-white font-bold' 
              : 'bg-[#f8fafc] dark:bg-[#0f172a] border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-[#244994]/40'
            }">
          <div class="flex items-center justify-between mb-1.5 pointer-events-none">
            <span class="text-xs font-semibold uppercase tracking-wider ${isActive ? 'text-[#244994] dark:text-[#8bb1ff]' : 'text-slate-500'}">
              Aspect ${asp.id}
            </span>
            ${isComplete 
              ? '<span class="inline-flex items-center text-[#244994] dark:text-[#8bb1ff] text-xs font-bold"><i data-lucide="check-circle-2" class="w-3.5 h-3.5 mr-0.5"></i> Voltooid</span>' 
              : `<span class="text-xs text-slate-400 font-medium">${aspAnswered}/${aspQuestions.length}</span>`
            }
          </div>
          <div class="text-sm font-bold truncate pointer-events-none">${asp.shortTitle}</div>
        </button>
      `;
    }).join('');
  }

  // Active Aspect Header
  const currentAspect = UNESCO_ASPECTS.find(a => a.id === state.currentAspectId) || UNESCO_ASPECTS[0];
  const aspectHeaderEl = document.getElementById('current-aspect-header');
  if (aspectHeaderEl) {
    aspectHeaderEl.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-3 mb-2">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${currentAspect.badgeColor}">
          <i data-lucide="${currentAspect.icon}" class="w-3.5 h-3.5"></i>
          <span>${currentAspect.unescoName}</span>
        </div>
        <span class="text-xs text-[#557070] dark:text-[#8AA3A3] font-medium">
          MBO-Focus: ${currentAspect.focusMBO}
        </span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-[#1E2E2E] dark:text-white tracking-tight">
        ${currentAspect.title}
      </h2>
      <p class="text-sm sm:text-base text-[#4F6969] dark:text-[#A1B8B8] mt-1 max-w-3xl">
        ${currentAspect.description}
      </p>
    `;
  }

  // Questions Container
  const aspectQuestions = QUESTIONS.filter(q => q.aspectId === currentAspect.id);
  if (questionsContainer) {
    questionsContainer.innerHTML = aspectQuestions.map((q) => {
      const selectedVal = state.answers[q.id];

      return `
        <div class="question-card bg-white dark:bg-[#162424] rounded-2xl p-6 sm:p-8 border border-[#E0EBEB] dark:border-[#223636] shadow-sm relative" id="card-${q.id}">
          <div class="flex items-start justify-between gap-4 mb-4">
            <div class="flex items-center gap-2">
              <span class="flex items-center justify-center w-7 h-7 rounded-xl bg-[#eff4fa] dark:bg-[#15233d] text-[#244994] dark:text-[#8bb1ff] font-bold text-xs border border-[#d2e0f4] dark:border-[#243c68]">
                ${q.number}
              </span>
              <span class="text-xs font-semibold text-[#557070] dark:text-[#8AA3A3] tracking-wide">
                ${q.unescoCompetency}
              </span>
            </div>
            ${selectedVal !== undefined ? `
              <span class="inline-flex items-center gap-1 text-xs font-bold text-[#244994] dark:text-[#8bb1ff] bg-[#eff4fa] dark:bg-[#15233d] px-2.5 py-1 rounded-full border border-[#d2e0f4] dark:border-[#243c68]">
                <i data-lucide="check" class="w-3.5 h-3.5"></i> Beantwoord
              </span>
            ` : ''}
          </div>

          <h3 class="text-base sm:text-lg font-bold text-[#1E2E2E] dark:text-white leading-relaxed mb-3">
            "${q.statement}"
          </h3>

          <p class="text-sm text-[#4F6969] dark:text-[#A1B8B8] mb-4 leading-normal">
            ${q.description}
          </p>

          <!-- Inklapbaar MBO Praktijkvoorbeeld -->
          <div class="mb-5">
            <button type="button" 
              data-toggle-example="${q.id}"
              class="inline-flex items-center gap-2 text-xs font-semibold text-[#244994] dark:text-[#8bb1ff] bg-[#eff4fa] dark:bg-[#15233d] hover:bg-[#dbe6f6] dark:hover:bg-[#1c2e4f] border border-[#bcd2ee] dark:border-[#243c68] px-3.5 py-1.5 rounded-xl transition cursor-pointer">
              <i data-lucide="info" class="w-3.5 h-3.5 text-[#244994] dark:text-[#8bb1ff] pointer-events-none"></i>
              <span class="pointer-events-none">Praktijkvoorbeeld tonen</span>
              <i data-lucide="chevron-down" id="example-icon-${q.id}" class="w-3.5 h-3.5 pointer-events-none transition-transform"></i>
            </button>

            <div id="example-box-${q.id}" class="hidden mt-2.5 bg-[#FAFDFD] dark:bg-[#111C1C] rounded-xl border border-[#E5EEEE] dark:border-[#1E3030] p-4 text-xs sm:text-sm">
              <div class="flex items-start gap-2.5 text-[#244994] dark:text-[#8bb1ff]">
                <i data-lucide="sparkles" class="w-4 h-4 text-[#c73326] shrink-0 mt-0.5"></i>
                <div>
                  <strong class="font-semibold text-[#1E2E2E] dark:text-white block mb-0.5">MBO Praktijkvoorbeeld:</strong>
                  <span class="text-[#4F6969] dark:text-[#A1B8B8]">${q.mboExample}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-2">
            <label class="block text-xs font-bold uppercase tracking-wider text-[#557070] dark:text-[#8AA3A3] mb-2">
              In hoeverre is dit van toepassing op jouw les- of werkpraktijk?
            </label>
            <div class="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
              ${LIKERT_OPTIONS.map(opt => {
                const isChecked = selectedVal === opt.value;
                return `
                  <button type="button"
                    data-likert-qid="${q.id}"
                    data-likert-val="${opt.value}"
                    class="relative flex flex-col items-center justify-center p-3.5 rounded-xl border text-center transition-all duration-150 cursor-pointer group
                      ${isChecked 
                        ? opt.activeClass 
                        : `bg-white dark:bg-[#182828] text-[#2D4545] dark:text-[#D1E3E3] border-[#E0EBEB] dark:border-[#253939] ${opt.hoverBorder} dark:hover:bg-[#1C2F2F]`
                      }">
                    
                    <span class="text-base font-extrabold mb-0.5 pointer-events-none ${isChecked ? opt.activeNum : 'text-[#1E2E2E] dark:text-white'}">
                      ${opt.value}
                    </span>
                    <span class="text-xs font-semibold leading-tight pointer-events-none ${isChecked ? '' : 'text-[#2D4545] dark:text-[#C3DADA]'}">
                      ${opt.label}
                    </span>
                    <span class="text-[10px] mt-1 leading-tight pointer-events-none ${isChecked ? opt.activeSubtext : 'text-[#6C8787] dark:text-[#7A9999]'}">
                      ${opt.sublabel}
                    </span>
                  </button>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Scan Nav Footer
  const navFooterEl = document.getElementById('scan-nav-footer');
  if (navFooterEl) {
    const isFirstAspect = state.currentAspectId === 1;
    const isLastAspect = state.currentAspectId === UNESCO_ASPECTS.length;
    const allAnswered = Object.keys(state.answers).length === QUESTIONS.length;

    navFooterEl.innerHTML = `
      <div class="flex items-center justify-between gap-4 pt-6 border-t border-[#E0EBEB] dark:border-[#223636]">
        <button type="button" 
          data-nav-action="prev-aspect"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#CBDDDD] dark:border-[#2E4545] bg-white dark:bg-[#162424] text-[#2D4545] dark:text-[#D1E3E3] font-semibold text-sm hover:bg-[#F5FAFA] dark:hover:bg-[#1D3030] transition cursor-pointer ${isFirstAspect ? 'opacity-50 cursor-not-allowed' : ''}"
          ${isFirstAspect ? 'disabled' : ''}>
          <i data-lucide="chevron-left" class="w-4 h-4 pointer-events-none"></i>
          <span class="pointer-events-none">Vorig Aspect</span>
        </button>

        <div class="flex items-center gap-3">
          ${allAnswered ? `
            <button type="button" 
              data-nav-action="view-results"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#244994] hover:bg-[#1c3b77] text-white font-bold text-sm shadow-md transition scale-105 cursor-pointer">
              <i data-lucide="bar-chart-3" class="w-4 h-4 pointer-events-none"></i>
              <span class="pointer-events-none">Bekijk Volledig Resultaat</span>
            </button>
          ` : isLastAspect ? `
            <button type="button" 
              data-nav-action="view-results"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#244994] text-white font-bold text-sm shadow-md hover:bg-[#2C4444] transition cursor-pointer">
              <span class="pointer-events-none">Rond Scan Af (${answeredCount}/${QUESTIONS.length})</span>
              <i data-lucide="arrow-right" class="w-4 h-4 pointer-events-none"></i>
            </button>
          ` : `
            <button type="button" 
              data-nav-action="next-aspect"
              class="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#244994] text-white font-bold text-sm shadow-sm hover:bg-[#2C4444] transition cursor-pointer">
              <span class="pointer-events-none">Volgend Aspect</span>
              <i data-lucide="chevron-right" class="w-4 h-4 pointer-events-none"></i>
            </button>
          `}
        </div>
      </div>
    `;
  }

  safeIcons();
}

function renderResultsView() {
  const scores = calculateScores(state.answers);

  const profileContainer = document.getElementById('profile-summary-container');
  if (profileContainer) {
    profileContainer.innerHTML = `
      <div class="p-6 sm:p-8 rounded-3xl ${scores.profile.bgClass} border relative overflow-hidden">
        <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div class="space-y-3 max-w-2xl">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${scores.profile.badgeClass}">
              <i data-lucide="award" class="w-3.5 h-3.5 text-white"></i>
              <span>${scores.profile.badge}</span>
            </div>
            <h2 class="text-2xl sm:text-4xl font-extrabold text-[#1E2E2E] dark:text-white tracking-tight">
              ${scores.profile.title}
            </h2>
            <p class="text-sm sm:text-base text-[#445E5E] dark:text-[#C4DADB] leading-relaxed">
              ${scores.profile.summary}
            </p>
            <div class="pt-1 flex flex-wrap items-center gap-4 text-xs font-medium text-[#557070] dark:text-[#8AA3A3]">
              <span class="inline-flex items-center gap-1.5 bg-white dark:bg-[#182828] px-3 py-1.5 rounded-lg border border-[#E0EBEB] dark:border-[#263D3D]">
                <i data-lucide="book-open" class="w-3.5 h-3.5 text-[#244994] dark:text-[#8bb1ff]"></i>
                UNESCO Kader: <strong>15 Competenties</strong>
              </span>
            </div>
          </div>

          <div class="flex flex-row lg:flex-col items-center justify-center p-6 bg-white dark:bg-[#162424] rounded-2xl border border-[#E0EBEB] dark:border-[#223636] shadow-sm shrink-0 w-full lg:w-48 text-center">
            <div class="text-4xl sm:text-5xl font-black text-[#244994] dark:text-[#8bb1ff]">
              ${scores.overallPercentage}%
            </div>
            <div class="text-xs font-bold uppercase tracking-wider text-[#557070] dark:text-[#8AA3A3] mt-1">
              Totale AI-Score
            </div>
            <div class="text-xs text-[#7A9696] dark:text-[#688282] mt-0.5">
              ${scores.overallAverage.toFixed(1)} van 5.0
            </div>
          </div>
        </div>
      </div>
    `;
  }

  setTimeout(() => {
    renderRadarChart('results-radar-chart', scores.aspectScores, state.theme === 'dark');
  }, 50);

  const aspectGridEl = document.getElementById('results-aspects-grid');
  if (aspectGridEl) {
    aspectGridEl.innerHTML = scores.aspectScores.map(asp => {
      const recs = ASPECT_RECOMMENDATIONS[asp.key]?.[asp.levelKey] || {
        title: 'Verdiep je vaardigheden',
        points: ['Blijf experimenteren in je onderwijspraktijk.']
      };

      return `
        <div class="bg-white dark:bg-[#131c2e] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition overflow-hidden">
          <div class="card-accent-line ${asp.accentClass || 'card-accent-blue'}"></div>
          <div class="p-6 sm:p-7">
          <div class="flex items-start justify-between gap-3 mb-3">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${asp.badgeColor}">
              <i data-lucide="${asp.icon}" class="w-3.5 h-3.5"></i>
              <span>${asp.unescoName}</span>
            </div>
            <span class="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold ${asp.levelColor}">
              ${asp.levelBadge}
            </span>
          </div>

          <h3 class="text-lg font-bold text-[#1E2E2E] dark:text-white mb-2">
            ${asp.title}
          </h3>

          <div class="space-y-1.5 mb-5">
            <div class="flex items-center justify-between text-xs font-bold text-[#445E5E] dark:text-[#C4DADB]">
              <span>Score: ${asp.average.toFixed(1)} / 5.0</span>
              <span class="text-[#244994] dark:text-[#8bb1ff] font-extrabold">${asp.percentage}%</span>
            </div>
            <div class="w-full h-2.5 bg-[#E8F0F0] dark:bg-[#1F3333] rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-[#244994] to-[#c73326] rounded-full" style="width: ${asp.percentage}%;"></div>
            </div>
          </div>

          <div class="bg-[#f8fafc] dark:bg-[#0b111e] rounded-2xl p-4 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm">
            <div class="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-1.5">
              <i data-lucide="check-circle" class="w-4 h-4 text-[#244994] dark:text-[#8bb1ff]"></i>
              <span>${recs.title}</span>
            </div>
            <ul class="space-y-1.5 text-slate-600 dark:text-slate-400 list-disc list-inside">
              ${recs.points.map(pt => `<li>${pt}</li>`).join('')}
            </ul>
          </div>
          </div>
        </div>
      `;
    }).join('');
  }

  safeIcons();
}

function renderApp() {
  const introView = document.getElementById('view-intro');
  const scanView = document.getElementById('view-scan');
  const resultsView = document.getElementById('view-results');

  const answeredCount = Object.keys(state.answers).length;
  const resumeContainer = document.getElementById('resume-container');
  if (resumeContainer) {
    if (answeredCount > 0 && answeredCount < QUESTIONS.length) {
      resumeContainer.classList.remove('hidden');
      const resumeCount = document.getElementById('resume-count');
      if (resumeCount) resumeCount.textContent = `${answeredCount} van de ${QUESTIONS.length}`;
    } else {
      resumeContainer.classList.add('hidden');
    }
  }

  if (state.currentView === 'intro') {
    if (introView) introView.classList.remove('hidden');
    if (scanView) scanView.classList.add('hidden');
    if (resultsView) resultsView.classList.add('hidden');
  } else if (state.currentView === 'scan') {
    if (introView) introView.classList.add('hidden');
    if (scanView) scanView.classList.remove('hidden');
    if (resultsView) resultsView.classList.add('hidden');
    renderScanView();
  } else if (state.currentView === 'results') {
    if (introView) introView.classList.add('hidden');
    if (scanView) scanView.classList.add('hidden');
    if (resultsView) resultsView.classList.remove('hidden');
    renderResultsView();
  }

  safeIcons();
}

// ==========================================
// 5. EVENT DELEGATION
// ==========================================

function handleGlobalClicks(e) {
  const target = e.target;

  // 1. Start Scan
  const startBtn = target.closest('#start-scan-btn');
  if (startBtn) {
    e.preventDefault();
    state.currentView = 'scan';
    state.currentAspectId = 1;
    saveState();
    renderApp();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  // 2. Resume Scan
  const resumeBtn = target.closest('#resume-scan-btn');
  if (resumeBtn) {
    e.preventDefault();
    state.currentView = 'scan';
    saveState();
    renderApp();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  // 3. Home / Overzicht
  const homeBtn = target.closest('.go-home-btn');
  if (homeBtn) {
    e.preventDefault();
    state.currentView = 'intro';
    saveState();
    renderApp();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  // 4. Theme Toggle
  const themeToggle = target.closest('#theme-toggle-btn');
  if (themeToggle) {
    e.preventDefault();
    const newTheme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    return;
  }

  // 5. Reset Scan
  const resetBtn = target.closest('.reset-scan-btn');
  if (resetBtn) {
    e.preventDefault();
    if (confirm('Weet je zeker dat je alle antwoorden wilt wissen en opnieuw wilt beginnen?')) {
      state.answers = {};
      state.currentAspectId = 1;
      state.currentView = 'intro';
      saveState();
      renderApp();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return;
  }

  // 6. Likert Button Click
  const likertBtn = target.closest('[data-likert-qid]');
  if (likertBtn) {
    e.preventDefault();
    const qid = likertBtn.getAttribute('data-likert-qid');
    const val = parseInt(likertBtn.getAttribute('data-likert-val'), 10);
    state.answers[qid] = val;
    saveState();
    renderScanView();
    return;
  }

  // 7. Toggle Praktijkvoorbeeld Info Knop
  const toggleExBtn = target.closest('[data-toggle-example]');
  if (toggleExBtn) {
    e.preventDefault();
    const qid = toggleExBtn.getAttribute('data-toggle-example');
    const box = document.getElementById(`example-box-${qid}`);
    const icon = document.getElementById(`example-icon-${qid}`);
    const textSpan = toggleExBtn.querySelector('span');
    if (box) {
      const isHidden = box.classList.contains('hidden');
      if (isHidden) {
        box.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
        if (textSpan) textSpan.textContent = 'Praktijkvoorbeeld verbergen';
      } else {
        box.classList.add('hidden');
        if (icon) icon.style.transform = '';
        if (textSpan) textSpan.textContent = 'Praktijkvoorbeeld tonen';
      }
    }
    return;
  }

  // 8. Aspect Tab Click (Onderkant van de pagina)
  const aspectTab = target.closest('[data-aspect-tab]');
  if (aspectTab) {
    e.preventDefault();
    const aspId = parseInt(aspectTab.getAttribute('data-aspect-tab'), 10);
    state.currentAspectId = aspId;
    saveState();
    renderScanView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  // 9. Scan Nav Actions (Vorig, Volgend, Afronden)
  const navActionBtn = target.closest('[data-nav-action]');
  if (navActionBtn) {
    e.preventDefault();
    const action = navActionBtn.getAttribute('data-nav-action');
    if (action === 'prev-aspect' && state.currentAspectId > 1) {
      state.currentAspectId -= 1;
      saveState();
      renderScanView();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (action === 'next-aspect' && state.currentAspectId < UNESCO_ASPECTS.length) {
      state.currentAspectId += 1;
      saveState();
      renderScanView();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (action === 'view-results') {
      state.currentView = 'results';
      saveState();
      renderApp();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return;
  }

  // 10. Print Report
  const printBtn = target.closest('.print-report-btn');
  if (printBtn) {
    e.preventDefault();
    window.print();
    return;
  }

  // 10. Copy Summary
  const copySumBtn = target.closest('.copy-summary-btn');
  if (copySumBtn) {
    e.preventDefault();
    const scores = calculateScores(state.answers);

    const summaryText = `Friesland.AI | AI-Geletterdheidsscan Resultaat (UNESCO AI CFT) (UNESCO AI CFT Kader)
--------------------------------------------------
Profiel: ${scores.profile.title} (${scores.overallPercentage}%)
Niveau: ${scores.profile.badge}

Scores per UNESCO Aspect:
1. Mensgerichte denkwijze: ${scores.aspectScores[0].average} / 5.0 (${scores.aspectScores[0].levelBadge})
2. Ethiek van AI: ${scores.aspectScores[1].average} / 5.0 (${scores.aspectScores[1].levelBadge})
3. Fundamenten & Toepassingen: ${scores.aspectScores[2].average} / 5.0 (${scores.aspectScores[2].levelBadge})
4. AI-pedagogie in het MBO: ${scores.aspectScores[3].average} / 5.0 (${scores.aspectScores[3].levelBadge})
5. Professionele Ontwikkeling & BPV: ${scores.aspectScores[4].average} / 5.0 (${scores.aspectScores[4].levelBadge})

Gemaakt met Friesland.AI - www.friesland.ai`;

    navigator.clipboard.writeText(summaryText).then(() => {
      const originalHTML = copySumBtn.innerHTML;
      copySumBtn.innerHTML = '<i data-lucide="check" class="w-4 h-4 text-[#244994] dark:text-[#8bb1ff]"></i> <span>Gekopieerd!</span>';
      safeIcons();
      setTimeout(() => {
        copySumBtn.innerHTML = originalHTML;
        safeIcons();
      }, 2500);
    });
    return;
  }

  // 11. Modals Open / Close
  const modalTrigger = target.closest('[data-modal-target]');
  if (modalTrigger) {
    e.preventDefault();
    const targetId = modalTrigger.getAttribute('data-modal-target');
    const modal = document.getElementById(targetId);
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.style.overflow = 'hidden';
    }
    return;
  }

  const modalClose = target.closest('[data-modal-close]');
  if (modalClose) {
    e.preventDefault();
    const modal = modalClose.closest('.modal-container');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow = '';
    }
    return;
  }

  if (target.classList.contains('modal-container')) {
    target.classList.add('hidden');
    target.classList.remove('flex');
    document.body.style.overflow = '';
    return;
  }
}

// Initialiseer direct bij script load en bij DOMContentLoaded
function initializeApplication() {
  loadState();
  initTheme();
  document.addEventListener('click', handleGlobalClicks);
  renderApp();
}

function initTheme() {
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (!state.theme) {
    state.theme = prefersDark ? 'dark' : 'light';
  }
  applyTheme(state.theme);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApplication);
} else {
  initializeApplication();
}
