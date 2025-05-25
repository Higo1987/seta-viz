looker.plugins.visualizations.add({
  create: function (element, config) {
    element.innerHTML = '<div id="arrow-container" style="font-size: 48px; text-align: center;"></div>';
  },

  update: function (data, element, config, queryResponse, details) {
    const container = element.querySelector('#arrow-container');
    container.innerHTML = '';

    if (data.length === 0 || data[0].length === 0) {
      container.innerHTML = 'Sem dados';
      return;
    }

    const value = data[0][0].value;

    if (value === null || value === undefined || isNaN(value)) {
      container.innerHTML = 'Valor inválido';
      return;
    }

    const arrow = document.createElement('div');
    arrow.textContent = value >= 0 ? '🔺' : '🔻';
    arrow.style.color = value >= 0 ? 'green' : 'red';

    container.appendChild(arrow);
  }
});
