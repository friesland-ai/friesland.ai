/**
 * AI-Geletterdheidsscan voor het MBO
 * Gebaseerd op het UNESCO AI Competency Framework for Teachers (2024)
 * 
 * 5 Kernaspecten met elk 3 representatieve competenties (15 stellingen)
 * Toegespitst op de praktijk van het Middelbaar Beroepsonderwijs (MBO).
 */

export const MBO_SECTORS = [
  { id: 'all', name: 'Alle sectoren / Algemeen', icon: 'layers' },
  { id: 'techniek', name: 'Techniek & Gebouwde Omgeving', icon: 'wrench' },
  { id: 'zorg', name: 'Zorg, Welzijn & Sport', icon: 'heart-pulse' },
  { id: 'economie', name: 'Economie, Handel & Zakelijke Dienstverlening', icon: 'briefcase' },
  { id: 'ict', name: 'ICT, Media & Creatieve Industrie', icon: 'cpu' },
  { id: 'horeca', name: 'Horeca, Bakkerij & Toerisme', icon: 'utensils' },
  { id: 'groen', name: 'Groen, Voeding & Leefomgeving', icon: 'sprout' },
  { id: 'entree', name: 'Entree & Niveau 2 Specialist', icon: 'compass' }
];

export const UNESCO_ASPECTS = [
  {
    id: 1,
    key: 'human_centred',
    title: 'Aspect 1: Mensgerichte denkwijze',
    shortTitle: 'Mensgerichte denkwijze',
    unescoName: 'Human-centred mindset',
    description: 'Het behouden van menselijke regie, vakmanschap en kritische autonomie in een wereld vol AI.',
    color: '#244994', // Indigo
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-800/60',
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
    color: '#0891B2', // Cyan
    badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/40 dark:text-cyan-300 dark:border-cyan-800/60',
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
    color: '#0D9488', // Teal
    badgeColor: 'bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/40 dark:text-teal-300 dark:border-teal-800/60',
    icon: 'cpu',
    focusMBO: 'Weten wat AI wel en niet kan, hallucinaties opsporen en branchespecifieke AI-tools beheersen.'
  },
  {
    id: 4,
    key: 'pedagogy',
    title: 'Aspect 4: AI-pedagogie',
    shortTitle: 'AI-pedagogie in het MBO',
    unescoName: 'AI pedagogy',
    description: 'AI inzetten om krachtige beroepsgerichte leersituaties te ontwerpen, te differentiëren en formatief te handelen.',
    color: '#059669', // Emerald
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/60',
    icon: 'graduation-cap',
    focusMBO: 'Realistische praktijkcasussen bouwen, differentiëren naar mbo 1-4 en gerichte feedback geven.'
  },
  {
    id: 5,
    key: 'professional_dev',
    title: 'Aspect 5: AI voor professionele ontwikkeling',
    shortTitle: 'Professionele ontwikkeling & Werkveld',
    unescoName: 'AI for professional development',
    description: 'Werkdruk verlagen met AI, samenwerken in het docententeam en afstemmen met het regionale bedrijfsleven (BPV).',
    color: '#D97706', // Amber
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/60',
    icon: 'sparkles',
    focusMBO: 'Tijd besparen bij administratie/lesontwerp, kennisdelen en aansluiten bij ontwikkelingen in het leerbedrijf.'
  }
];

export const QUESTIONS = [
  // ==========================================
  // ASPECT 1: MENSGERICHTE DENKWIJZE
  // ==========================================
  {
    id: 'q1_1',
    aspectId: 1,
    aspectKey: 'human_centred',
    number: 1,
    unescoCompetency: '1. Menselijke regie & vakmanschap (Human Agency)',
    statement: 'Ik zorg ervoor dat AI in mijn onderwijs altijd ondergeschikt blijft aan menselijke regie en het vakmanschap van de mbo-student.',
    description: 'AI is een ondersteunend instrument. De student moet zelf de verantwoordelijkheid, de controle en het kritische eindoordeel houden over het werk.',
    mboExample: 'Voorbeeld: In een technische of zorgopleiding laat je studenten niet blind varen op een door AI gegenereerd werkplan of zorgplan, maar laat je hen uitleggen waarom bepaalde keuzes vakinhoudelijk juist of onveilig zijn.',
    whyItMatters: 'Voorkomt dat toekomstige vakmensen blindelings vertrouwen op geautomatiseerde systemen zonder eigen vakkennis toe te passen.'
  },
  {
    id: 'q1_2',
    aspectId: 1,
    aspectKey: 'human_centred',
    number: 2,
    unescoCompetency: '2. Welzijn, sociale veiligheid en kansengelijkheid',
    statement: 'Ik ben alert op de invloed van AI op het welzijn, de motivatie en de gelijke kansen van al mijn mbo-studenten.',
    description: 'Niet iedere student heeft gelijke toegang tot betaalde AI-tools of evenveel digitale zelfredzaamheid. AI mag geen nieuwe kloof creëren.',
    mboExample: 'Voorbeeld: Je zorgt dat opdrachten uitvoerbaar zijn met gratis/toegankelijke tools en dat studenten niet ontmoedigd raken of een "AI-luie" houding aannemen.',
    whyItMatters: 'Garandeert een inclusieve leeromgeving waarin studenten van elk niveau (entree t/m niveau 4) gelijke ontwikkelkansen behouden.'
  },
  {
    id: 'q1_3',
    aspectId: 1,
    aspectKey: 'human_centred',
    number: 3,
    unescoCompetency: '3. Kritisch burgerschap & mediawijsheid op de werkvloer',
    statement: 'Ik stimuleer mbo-studenten om kritisch na te denken over de maatschappelijke en professionele impact van AI in hun toekomstige beroep.',
    description: 'Studenten leren begrijpen hoe AI banen, werkprocessen en klantcontact in hun vakgebied verandert.',
    mboExample: 'Voorbeeld: Je voert met studenten een klassengesprek over hoe AI het werk van een administratief medewerker, monteur of verpleegkundige verandert en welke menselijke kwaliteiten juist onvervangbaar blijven.',
    whyItMatters: 'Bereidt mbo-studenten voor op een duurzame loopbaan waarin zij wendbaar en kritisch kunnen meebewegen met technologische transities.'
  },

  // ==========================================
  // ASPECT 2: ETHIEK VAN AI
  // ==========================================
  {
    id: 'q2_1',
    aspectId: 2,
    aspectKey: 'ethics',
    number: 4,
    unescoCompetency: '4. Ethische richtlijnen & integriteit bij beroepsproducten',
    statement: 'Ik maak heldere afspraken met mbo-studenten over wanneer en hoe AI ethisch en transparant mag worden ingezet bij opdrachten en portfolio’s.',
    description: 'Duidelijkheid over bronvermelding, transparantie bij AI-gebruik en het voorkomen van oneigenlijk gebruik bij examens en verslagen.',
    mboExample: 'Voorbeeld: Je hanteert een duidelijke richtlijn: "Je mag AI gebruiken voor brainstormen of tekstredactie, mits je je prompts vermeldt en toelicht wat je zelf hebt aangepast."',
    whyItMatters: 'Creëert openheid en integriteit in plaats van een "politie-en-boefjes"-dynamiek rondom AI-gebruik.'
  },
  {
    id: 'q2_2',
    aspectId: 2,
    aspectKey: 'ethics',
    number: 5,
    unescoCompetency: '5. Privacy (AVG), auteursrecht & data van leerbedrijven (BPV)',
    statement: 'Ik weet hoe ik en mijn studenten zorgvuldig moeten omgaan met privacy (AVG), persoonsgegevens en gevoelige informatie van stage- en leerbedrijven.',
    description: 'Voorkomen dat privacygevoelige patiëntendossiers, bedrijfsgeheimen of persoonsgegevens in openbare AI-modellen worden geplakt.',
    mboExample: 'Voorbeeld: Je leert studenten tijdens BPV-opdrachten dat zij nóóit herleidbare cliëntgegevens, logboeken met privégegevens of interne bedrijfscijfers in een openbaar AI-model mogen invoeren.',
    whyItMatters: 'Essentieel voor de juridische veiligheid van de school, de student en de samenwerkingsrelatie met het regionale werkveld.'
  },
  {
    id: 'q2_3',
    aspectId: 2,
    aspectKey: 'ethics',
    number: 6,
    unescoCompetency: '6. Bias, vooroordelen en discriminatie herkennen',
    statement: 'Ik kan studenten uitleggen hoe AI-systemen vooroordelen (bias) kunnen bevatten en hoe dit kan doorwerken in de beroepspraktijk.',
    description: 'Begrip van hoe trainingsdata kan leiden tot stereotypering bij werving & selectie, gezichtsherkenning of geautomatiseerde risico-inschattingen.',
    mboExample: 'Voorbeeld: Met studenten Zakelijke Dienstverlening onderzoek je hoe een AI-cv-screeningstool bepaalde groepen kan bevoordelen of benadelen.',
    whyItMatters: 'Zorgt dat studenten zich bewust zijn van ethische valkuilen in moderne software en algoritmes op de werkvloer.'
  },

  // ==========================================
  // ASPECT 3: FUNDAMENTEN EN TOEPASSINGEN VAN AI
  // ==========================================
  {
    id: 'q3_1',
    aspectId: 3,
    aspectKey: 'foundations',
    number: 7,
    unescoCompetency: '7. Basiskennis van AI-werking, LLM’s & hallucinaties',
    statement: 'Ik begrijp de basisprincipes van hoe generatieve AI werkt (patroonherkenning, kansberekening) en herken de beperkingen zoals hallucinaties en verouderde kennis.',
    description: 'Weten dat een taalmodel geen "waarheidsmachine" is, maar statistische voorspellingen doet op basis van trainingsdata.',
    mboExample: 'Voorbeeld: Je weet waarom ChatGPT overtuigend klinkende maar feitelijk onjuiste artikelnummers, wetgeving of vakliteratuur kan verzinnen.',
    whyItMatters: 'Stelt je in staat om de betrouwbaarheid van AI-antwoorden direct op waarde te schatten en studenten dit te leren.'
  },
  {
    id: 'q3_2',
    aspectId: 3,
    aspectKey: 'foundations',
    number: 8,
    unescoCompetency: '8. Beoordelen en selecteren van AI-tools voor de opleiding',
    statement: 'Ik kan beoordelen welke AI-tools geschikt en veilig zijn voor mijn specifieke mbo-vakgebied of onderwijspraktijk.',
    description: 'In staat zijn om zin van onzin te scheiden bij het groeiende aanbod aan AI-applicaties (tekst, beeld, audio, data, branchetools).',
    mboExample: 'Voorbeeld: Je kiest bewust tussen een algemeen taalmodel (zoals Copilot/ChatGPT) en een vakspecifieke AI-toepassing (zoals AI-calculatiesoftware, ontwerptools of simulator-assistenten).',
    whyItMatters: 'Voorkomt versnippering en zorgt voor de inzet van veilige, didactisch relevante technologie.'
  },
  {
    id: 'q3_3',
    aspectId: 3,
    aspectKey: 'foundations',
    number: 9,
    unescoCompetency: '9. Doeltreffend prompten in de beroeps- en onderwijscontext',
    statement: 'Ik beheers de vaardigheid om effectieve, gestructureerde prompts te schrijven met rol, context, instructie en gewenst uitvoerformaat.',
    description: 'Weten hoe je met duidelijke context, stappenplannen en voorbeelden (few-shot prompting) kwalitatief hoogwaardige output krijgt.',
    mboExample: 'Voorbeeld: Je formuleert een prompt: "Handel als een ervaren praktijkbegeleider in de installatietechniek. Maak 3 realistische storingsscenario’s voor niveau 3 studenten inclusief meetstappen."',
    whyItMatters: 'Bespaart veel tijd en levert direct bruikbare, beroepsauthentieke resultaten op in plaats van nietszeggende algemene teksten.'
  },

  // ==========================================
  // ASPECT 4: AI-PEDAGOGIE IN HET MBO
  // ==========================================
  {
    id: 'q4_1',
    aspectId: 4,
    aspectKey: 'pedagogy',
    number: 10,
    unescoCompetency: '10. Ontwerpen van AI-verrijkte beroepsgerichte opdrachten',
    statement: 'Ik ontwerp leeractiviteiten waarin studenten AI doelgericht inzetten om realistische beroepsproblemen en praktijkcasussen op te lossen.',
    description: 'AI integreren in het leerproces zodat studenten leren werken zóals de moderne praktijk dat straks van hen vraagt.',
    mboExample: 'Voorbeeld: Studenten Horeca/Toerisme gebruiken AI om een duurzaam menu-concept te berekenen of een marketingcampagne te ontwikkelen, en verantwoorden daarna mondeling hun keuzes.',
    whyItMatters: 'Maakt het onderwijs actueel, beroepsrelevant en stimuleert authentieke competentieontwikkeling.'
  },
  {
    id: 'q4_2',
    aspectId: 4,
    aspectKey: 'pedagogy',
    number: 11,
    unescoCompetency: '11. Differentiëren en personaliseren (mbo-niveau 1 t/m 4)',
    statement: 'Ik gebruik AI om lesstof aan te passen aan verschillende taalniveaus, leertempo’s en speciale ondersteuningsbehoeften van mbo-studenten.',
    description: 'AI inzetten om ingewikkelde vakteksten te hertalen (bijv. naar B1/A2), visuele stappenplannen te genereren of verdiepende opdrachten te maken.',
    mboExample: 'Voorbeeld: Je laat AI een technisch kwalificatiedossier of wetgevingstekst omzetten in een eenvoudig stappenplan met pictogram-suggesties voor niveau 2 studenten.',
    whyItMatters: 'Verhoogt de toegankelijkheid van het onderwijs en biedt gerichte maatwerkondersteuning zonder oneindige extra voorbereidingstijd.'
  },
  {
    id: 'q4_3',
    aspectId: 4,
    aspectKey: 'pedagogy',
    number: 12,
    unescoCompetency: '12. Formatieve evaluatie & gerichte feedback met AI',
    statement: 'Ik zet AI in om sneller en gerichter formatieve feedback te geven op tussenproducten of om studenten zelfreflectie te laten oefenen.',
    description: 'AI als assistent bij het formuleren van opbouwende tips & tops op basis van vooraf gedefinieerde beoordelingscriteria (rubrics).',
    mboExample: 'Voorbeeld: Je gebruikt een gestructureerde prompt met je beoordelingsrubric om eerste conceptverslagen snel van constructieve feedbacksuggesties te voorzien, waarna jij het definitieve oordeel velt.',
    whyItMatters: 'Studenten krijgen vaker en sneller feedback in hun leerproces, wat het leereffect en de motivatie enorm vergroot.'
  },

  // ==========================================
  // ASPECT 5: PROFESSIONELE ONTWIKKELING & WERKVELD
  // ==========================================
  {
    id: 'q5_1',
    aspectId: 5,
    aspectKey: 'professional_dev',
    number: 13,
    unescoCompetency: '13. Werkdrukverlaging en persoonlijke productiviteit',
    statement: 'Ik gebruik AI-toepassingen effectief om routinematige taken (zoals e-mails opstellen, lesvoorbereiding, formats maken) te versnellen en mijn werkdruk te verlagen.',
    description: 'Slimme inzet van AI voor repetitieve administratieve taken zodat er meer tijd en energie overblijft voor persoonlijk contact met studenten.',
    mboExample: 'Voorbeeld: Binnen enkele minuten een complete lesopzet, discussievragen of een ouderbrief laten opstellen en fijnslijpen met AI.',
    whyItMatters: 'Draagt direct bij aan duurzame inzetbaarheid en meer tijd voor pedagogisch-didactisch contact in de klas of praktijkruimte.'
  },
  {
    id: 'q5_2',
    aspectId: 5,
    aspectKey: 'professional_dev',
    number: 14,
    unescoCompetency: '14. Samenwerking en kennisdeling in het mbo-onderwijsteam',
    statement: 'Ik wissel actief ervaringen, prompts en best practices rondom AI uit met collega’s binnen mijn opleiding of onderwijsteam.',
    description: 'Samen leren en als team één consistente lijn ontwikkelen over het gebruik van AI binnen de opleiding.',
    mboExample: 'Voorbeeld: In de vakgroep of teamvergadering prompts delen voor het maken van BPV-opdrachten of gezamenlijk richtlijnen afstemmen voor toetsing.',
    whyItMatters: 'Voorkomt dat individuele docenten het wiel opnieuw moeten uitvinden en zorgt voor duidelijkheid naar studenten.'
  },
  {
    id: 'q5_3',
    aspectId: 5,
    aspectKey: 'professional_dev',
    number: 15,
    unescoCompetency: '15. Aansluiting bij beroepspraktijk (BPV) en schoolvisie',
    statement: 'Ik zoek actief de verbinding met het regionale werkveld (leerbedrijven/stageplekken) om te begrijpen hoe AI hún praktijk verandert en draag bij aan de schoolvisie.',
    description: 'Weten hoe praktijkopleiders omgaan met AI en zorgen dat het mbo-curriculum aansluit op de moderne werkelijkheid van het beroep.',
    mboExample: 'Voorbeeld: Tijdens een BPV-bezoek met de praktijkbegeleider bespreken welke AI-toepassingen zij al gebruiken op de werkvloer en wat dit vraagt van toekomstige afstudeerders.',
    whyItMatters: 'Borgt dat het mbo-onderwijs nauw aansluit op de daadwerkelijke behoeften van de arbeidsmarkt van morgen.'
  }
];

export const LIKERT_OPTIONS = [
  {
    value: 1,
    label: 'Helemaal oneens',
    sublabel: 'Nog niet mee bezig / Geen ervaring',
    shortLabel: '1 - Starter'
  },
  {
    value: 2,
    label: 'Enigszins oneens',
    sublabel: 'Verkennend / Beperkte ervaring',
    shortLabel: '2 - Verkenner'
  },
  {
    value: 3,
    label: 'Neutraal',
    sublabel: 'Incidenteel / Af en toe in praktijk',
    shortLabel: '3 - Basis'
  },
  {
    value: 4,
    label: 'Grotendeels eens',
    sublabel: 'Doelgericht & Bewust toegepast',
    shortLabel: '4 - Gevorderd'
  },
  {
    value: 5,
    label: 'Volledig mee eens',
    sublabel: 'Structureel geïntegreerd & Voorbeeldrol',
    shortLabel: '5 - Expert'
  }
];
