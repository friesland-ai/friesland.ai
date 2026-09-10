/**
 * Chart.js visualisaties voor de MBO AI-geletterdheidsscan
 * Spindiagram (Radar Chart) en interactieve scores.
 */

let radarChartInstance = null;

export function renderRadarChart(canvasId, aspectScores, isDarkMode = false) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  if (radarChartInstance) {
    radarChartInstance.destroy();
  }

  const labels = aspectScores.map(a => a.shortTitle);
  const dataValues = aspectScores.map(a => a.average);

  // Kleuren afhankelijk van dark mode
  const gridColor = isDarkMode ? 'rgba(148, 163, 184, 0.2)' : 'rgba(203, 213, 225, 0.6)';
  const angleLineColor = isDarkMode ? 'rgba(148, 163, 184, 0.25)' : 'rgba(203, 213, 225, 0.8)';
  const labelColor = isDarkMode ? '#E2E8F0' : '#1E293B';
  const pointBg = '#244994';

  const ctx = canvas.getContext('2d');

  radarChartInstance = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Jouw MBO AI-Profiel',
          data: dataValues,
          backgroundColor: isDarkMode ? 'rgba(77, 121, 216, 0.32)' : 'rgba(36, 73, 148, 0.20)',
          borderColor: '#244994',
          borderWidth: 3,
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
          borderColor: isDarkMode ? '#c73326' : '#c73326',
          borderWidth: 1.5,
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
      animation: {
        duration: 800,
        easing: 'easeOutQuart'
      },
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            color: labelColor,
            font: {
              family: "'Outfit', 'Inter', system-ui, sans-serif",
              size: 12,
              weight: '500'
            },
            padding: 16,
            usePointStyle: true,
            boxWidth: 8
          }
        },
        tooltip: {
          backgroundColor: isDarkMode ? '#0F172A' : '#1E293B',
          titleColor: '#FFFFFF',
          bodyColor: '#E2E8F0',
          borderColor: isDarkMode ? '#334155' : '#475569',
          borderWidth: 1,
          padding: 12,
          boxPadding: 6,
          usePointStyle: true,
          callbacks: {
            title: function(context) {
              const idx = context[0].dataIndex;
              return aspectScores[idx].title;
            },
            label: function(context) {
              const val = context.raw;
              const pct = Math.round((val / 5) * 100);
              return ` ${context.dataset.label}: ${val.toFixed(1)} / 5.0 (${pct}%)`;
            },
            afterLabel: function(context) {
              if (context.datasetIndex === 0) {
                const idx = context.dataIndex;
                return `UNESCO Niveau: ${aspectScores[idx].levelBadge}`;
              }
              return null;
            }
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
            color: isDarkMode ? '#94A3B8' : '#64748B',
            font: {
              size: 10
            }
          },
          grid: {
            color: gridColor
          },
          angleLines: {
            color: angleLineColor
          },
          pointLabels: {
            color: labelColor,
            font: {
              family: "'Outfit', 'Inter', system-ui, sans-serif",
              size: 12,
              weight: '600'
            },
            padding: 12
          }
        }
      }
    }
  });

  return radarChartInstance;
}

export function updateChartTheme(isDarkMode) {
  if (radarChartInstance) {
    const gridColor = isDarkMode ? 'rgba(148, 163, 184, 0.2)' : 'rgba(203, 213, 225, 0.6)';
    const angleLineColor = isDarkMode ? 'rgba(148, 163, 184, 0.25)' : 'rgba(203, 213, 225, 0.8)';
    const labelColor = isDarkMode ? '#E2E8F0' : '#1E293B';

    radarChartInstance.options.scales.r.grid.color = gridColor;
    radarChartInstance.options.scales.r.angleLines.color = angleLineColor;
    radarChartInstance.options.scales.r.pointLabels.color = labelColor;
    radarChartInstance.options.scales.r.ticks.color = isDarkMode ? '#94A3B8' : '#64748B';
    radarChartInstance.options.plugins.legend.labels.color = labelColor;
    radarChartInstance.data.datasets[0].backgroundColor = isDarkMode ? 'rgba(77, 121, 216, 0.32)' : 'rgba(36, 73, 148, 0.20)';

    radarChartInstance.update();
  }
}
