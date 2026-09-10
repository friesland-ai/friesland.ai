/**
 * Berekening van scores, UNESCO-niveaus en MBO AI-bekwaamheidsprofielen.
 */

import { UNESCO_ASPECTS, QUESTIONS } from './questions.js';

export function calculateScores(answers) {
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
    let levelColor = 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300';

    if (average >= 3.8) {
      unescoLevel = 'Niveau 3: Innoveren & Leiden (Create)';
      levelKey = 'create';
      levelBadge = 'Expert / Innovator';
      levelColor = 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300';
    } else if (average >= 2.5) {
      unescoLevel = 'Niveau 2: Toepassen / Verdiepen (Deepen)';
      levelKey = 'deepen';
      levelBadge = 'Gevorderd / Toepasser';
      levelColor = 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300';
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

  // Archetype bepaling
  let profile = {
    title: 'AI-Oriënteerder in het MBO',
    subtitle: 'Niveau 1: Verkennende fase',
    badge: 'Startende Ontdekker',
    badgeClass: 'from-slate-600 to-slate-800 text-white',
    bgClass: 'bg-slate-50 border-slate-200 dark:bg-slate-900/50 dark:border-slate-800',
    summary: 'Je staat aan het begin van je AI-reis in het beroepsonderwijs. Je verkent wat AI inhoudt en wat het kan betekenen voor jouw mbo-vakgebied. Deze scan biedt je overzichtelijke eerste stappen om veilig en laagdrempelig te starten.',
    quote: 'Elke grote verandering in het vakonderwijs begint met nieuwsgierigheid en kleine experimenten.'
  };

  if (overallPercentage >= 80) {
    profile = {
      title: 'AI-Pionier in het MBO',
      subtitle: 'Niveau 3: Creëren, Coachen & Innoveren',
      badge: 'Beroepsgericht Innovator & Coach',
      badgeClass: 'from-emerald-500 to-teal-600 text-white',
      bgClass: 'bg-emerald-50/50 border-emerald-200 dark:bg-emerald-950/20 dark:border-emerald-800/40',
      summary: 'Je bent een koploper in het MBO. Je zet AI niet alleen didactisch krachtig in voor jouw studenten en beroepsopdrachten, maar bewaakt scherp de ethiek, stimuleert menselijke regie en fungeert als inspirator en vraagbaak voor je team en het regionale werkveld.',
      quote: 'Jij combineert modern vakmanschap met doordachte technologie om mbo-studenten wendbaar te maken voor de arbeidsmarkt.'
    };
  } else if (overallPercentage >= 60) {
    profile = {
      title: 'AI-Toepasser & Verdieper',
      subtitle: 'Niveau 2: Doelgerichte Integratie in de Lespraktijk',
      badge: 'Praktijkgerichte Toepasser',
      badgeClass: 'from-indigo-600 to-cyan-600 text-white',
      bgClass: 'bg-indigo-50/50 border-indigo-200 dark:bg-indigo-950/20 dark:border-indigo-800/40',
      summary: 'Je gebruikt AI al bewust en regelmatig in je onderwijs. Je weet hoe je prompts formuleert, differentieert voor studenten en routines versnelt. De volgende stap is om samen met je team afspraken te borgen en studenten nog scherper te trainen in kritisch AI-gebruik op de werkplek.',
      quote: 'Je hebt de kracht van AI in het vakonderwijs ontdekt en bent klaar om het structureel te borgen in je onderwijsprogramma.'
    };
  } else if (overallPercentage >= 40) {
    profile = {
      title: 'AI-Verkenner in het MBO',
      subtitle: 'Niveau 1-2: Actieve Verkenning & Eerste Toepassingen',
      badge: 'Actieve Praktijkverkenner',
      badgeClass: 'from-cyan-600 to-blue-700 text-white',
      bgClass: 'bg-cyan-50/50 border-cyan-200 dark:bg-cyan-950/20 dark:border-cyan-800/40',
      summary: 'Je experimenteert zo nu en dan met AI-tools en ziet de mogelijkheden voor het mbo. Er liggen grote kansen om AI gerichter in te zetten voor werkdrukverlaging bij lesvoorbereiding, differentiëren naar mbo-niveaus en duidelijke afspraken over ethiek.',
      quote: 'Je hebt de eerste stappen gezet; nu is het moment om praktische routines op te bouwen voor je eigen lespraktijk.'
    };
  }

  // Sorteer op sterke en ontwikkelpunten
  const sortedAspects = [...aspectScores].sort((a, b) => b.average - a.average);
  const strengths = sortedAspects.filter(a => a.average >= 3.5).slice(0, 2);
  const growthAreas = [...aspectScores].sort((a, b) => a.average - b.average).slice(0, 2);

  return {
    aspectScores,
    overallAverage,
    overallPercentage,
    answeredCount,
    totalQuestions,
    isComplete: answeredCount === totalQuestions,
    profile,
    strengths,
    growthAreas
  };
}
