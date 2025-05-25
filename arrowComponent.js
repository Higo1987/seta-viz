looker.plugins.visualizations.add('arrowComponent', {
  create: function (element, config) {
    element.innerHTML = '<div id="arrow-container" style="font-size: 48px; text-align: center;"></div>';
  },

  update: function (data, element, config, queryResponse, details) {
    const container = element.querySelector('#arrow-container');
    container.innerHTML = '';

    if (data.length === 0) {
      container.innerHTML = 'Sem dados';
      return;
    }

    const field = queryResponse.fields.measure_like[0].name;
    const rawValue = data[0][field];
    const value = LookerCharts.Utils.safeValue(rawValue);

    if (value === null || value === undefined || isNaN(value)) {
      container.innerHTML = 'Valor inválido';
      return;
    }

    const arrow = document.createElement('div');
    arrow.textContent = value > 0 ? '🔺' : (value < 0 ? '🔻' : '⬜');
    arrow.style.color = value > 0 ? 'green' : (value < 0 ? 'red' : 'gray');
    arrow.title = `Valor: ${value}`;

    container.appendChild(arrow);
  }
});
