/**
 * MBO-specifieke handelingsperspectieven, actieplannen en prompt-toolkit
 * gebaseerd op het UNESCO AI Competency Framework for Teachers.
 */

export const MBO_PROMPT_LIBRARY = [
  {
    id: 'mbo_casus_diff',
    title: 'Beroepsgerichte Casus differentiëren naar MBO-niveau',
    tag: 'Didactiek & Differentiatie',
    aspect: 'AI-pedagogie',
    description: 'Genereer direct een realistische beroepscasus aangepast aan mbo niveau 2, 3 of 4 met bijpassende opdrachten.',
    prompt: `Acteer als een ervaren onderwijskundige en vakdocent in het MBO.
Ik geef les in de sector: [bijv. Zorg & Welzijn / Techniek / Zakelijke Dienstverlening].
Het onderwerp van de les is: [bijv. storingsdiagnose / klantcommunicatie / medicatieveiligheid].

Genereer:
1. Een realistische en herkenbare beroepscasus uit de dagelijkse werkpraktijk van een leerbedrijf.
2. Drie gedifferentieerde versies van de verwerkingsopdracht:
   - Niveau 2: Praktisch, gestructureerd met duidelijke tussenstappen en hulpvragen.
   - Niveau 3: Zelfstandig probleemoplossend met vakinhoudelijke afwegingen.
   - Niveau 4: Analytisch, inclusief kwaliteitsbewaking, communicatie en reflectie.
3. Twee controlevragen voor de docent om te toetsen of de student de kern van het vakmanschap begrijpt.`
  },
  {
    id: 'mbo_tekst_hertalen',
    title: 'Moeilijke vaktekst of kwalificatiedossier hertalen naar B1/A2',
    tag: 'Toegankelijkheid & Inclusie',
    aspect: 'Mensgerichte denkwijze & Pedagogie',
    description: 'Zet complexe wetgeving, technische voorschriften of protocollen om naar helder en toegankelijk Nederlands voor studenten.',
    prompt: `Herschrijf de onderstaande vaktekst voor mbo-studenten (taalniveau B1).
Houd rekening met de volgende eisen:
- Gebruik korte zinnen (maximaal 12-15 woorden per zin).
- Behoud essentiële vaktermen, maar leg ze direct tussen haakjes in eenvoudige bewoordingen uit.
- Gebruik actieve werkwoordsvormen en tussenkopjes.
- Voeg aan het einde een puntsgewijs 'Wat betekent dit voor jouw praktijk?'-stappenplan toe.

Hier is de tekst:
[PLAK HIER JE VAKTEKST, PROTOCOL OF REGELGEVING]`
  },
  {
    id: 'mbo_rubric_feedback',
    title: 'Formatieve Feedback & Rubric voor Beroepsproducten',
    tag: 'Toetsing & Formatief handelen',
    aspect: 'AI-pedagogie',
    description: 'Ontwerp een heldere rubric en genereer constructieve feedbacksuggesties op een tussenversie van een portfolio of verslag.',
    prompt: `Acteer als een MBO-assessor en vakdocent.
Ik wil een tussenproduct beoordelen van een student voor de opdracht: [naam van de opdracht / bijv. Ondernemingsplan / Zorgleefplan / Installatieverslag].

De criteria zijn:
1. Vakinhoudelijke correctheid
2. Praktische toepasbaarheid op de werkvloer
3. Verantwoording van gemaakte keuzes (inclusief eigen werk versus AI-gebruik)

Taak:
1. Maak een overzichtelijke beoordelingsrubric met 3 niveaus: 'Nog niet op niveau (ontwikkelpunt)', 'Voldoende (vakbekwaam)', 'Goed (boven verwachting)'.
2. Geef 3 voorbeelden van opbouwende 'Tips & Tops' feedbackzinnen die de student aanzetten tot diepere reflectie.`
  },
  {
    id: 'mbo_ethiek_rollenspel',
    title: 'Klassengesprek / Dilemma over AI op de Stageplek',
    tag: 'Ethiek & Burgerschap',
    aspect: 'Ethiek van AI',
    description: 'Creëer een prikkelend ethisch dilemma dat speelt op de stageplek (BPV) om een betekenisvol klassengesprek te starten.',
    prompt: `Ontwerp een realistisch ethisch dilemma voor mbo-studenten [kies richting: Zorg / Techniek / ICT / Handel] over het gebruik van AI op het stagebedrijf.

Het dilemma moet gaan over: [kies: privacy van klantdata / geheimhouding / blind vertrouwen op AI-advies / auteursrecht / fraude bij rapportage].

Geef me:
1. Een korte beschrijving van de situatie (max 150 woorden) waarin de stagiair voor een lastige keuze staat.
2. Drie verschillende handelingsopties met elk voor- en nadelen.
3. Vier prikkelende discussievragen voor in de klas om studenten na te laten denken over hun professionele verantwoordelijkheid en beroepsethiek.`
  },
  {
    id: 'mbo_bpv_dialoog',
    title: 'Vragenlijst voor dialoog met Praktijkopleiders over AI',
    tag: 'Werkveld & BPV',
    aspect: 'Professionele ontwikkeling',
    description: 'Stel gerichte vragen op om tijdens BPV-bezoeken met praktijkbegeleiders in gesprek te gaan over AI-innovaties in het beroep.',
    prompt: `Ik ben MBO-docent en BPV-begeleider voor de opleiding [opleidingsnaam].
Binnenkort ga ik op stagebezoek bij verschillende erkende leerbedrijven in de regio.

Maak een compacte gespreksleidraad (5 gerichte vragen) voor een dialoog van 10 minuten met de praktijkopleider/werkbegeleider over:
- Welke AI-tools en geautomatiseerde systemen nu al in hun bedrijf worden gebruikt.
- Welke vaardigheden zij van toekomstige stagiairs en werknemers verwachten m.b.t. AI.
- Hoe zij aankijken tegen ethiek, privacy en vakmanschap in combinatie met AI.
- Suggesties voor een gezamenlijk praktijkproject tussen de school en het bedrijf.`
  }
];

export const ASPECT_RECOMMENDATIONS = {
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

export function getCustomActionPlan(scores) {
  const { overallPercentage, strengths, growthAreas } = scores;

  return {
    phase1_quickWins: {
      timeframe: 'Morgen in de les & lesvoorbereiding (Quick Wins)',
      items: [
        'Kies 1 routinetaak (bijv. een lesopzet of een casus vereenvoudigen naar B1-niveau) en voer deze uit met een gestructureerde prompt.',
        'Maak met je studenten 2 duidelijke afspraken: wanneer mag AI wel als denkpartner worden ingezet en wat is de regel voor privacy?',
        'Laat studenten één door AI gegenereerd antwoord kritisch controleren met behulp van hun vaktheorie.'
      ]
    },
    phase2_teamDidactiek: {
      timeframe: 'Komende periode in je MBO-team (Didactiek & Toetsing)',
      items: [
        'Deel tijdens de teamvergadering 2 succesvolle prompts voor lesvoorbereiding of BPV-opdrachten met je vakcollega’s.',
        'Bekijk jullie toetsing: verschuif het accent waar mogelijk van statische verslagen naar mondelinge verantwoording en praktijkdemonstraties.',
        'Organiseer een gezamenlijke werksessie om een gedeelde prompt-toolkit voor jullie specifieke kwalificatiedossier aan te leggen.'
      ]
    },
    phase3_werkveldRegio: {
      timeframe: 'Structureel met BPV, Leerbedrijven & Beleid',
      items: [
        'Vraag tijdens het eerstvolgende BPV-bezoek aan de praktijkopleider welke AI-software zij al inzetten op de werkvloer.',
        'Borg dat studenten tijdens hun stage weten hoe ze vertrouwelijk omgaan met bedrijfsdata en klantgegevens (AVG/AI Act).',
        'Draag vanuit de praktijkervaringen bij aan de visie op AI en digitale innovatie binnen jouw mbo-college.'
      ]
    }
  };
}
