// Centered Text
Chart.pluginService.register({
    beforeDraw: function (chart) {
        var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;
        ctx.restore();
        var fontSize = (height / 114).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";
        var text = chart.config.options.elements.center.text,
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
    }
});

// NO GVHD
var value = 15;
var data = {
  datasets: [
    {
      data: [value, 100-value],
      backgroundColor: [
        "#16A2B8",
        "#f0f3f5"
      ]
    }]
};
var promisedDeliveryChart = new Chart(document.getElementById('no-gvhd'), {
    type: 'doughnut',
    data: data,
    options: {
        events: [],
        elements: {
            center: {
                text: value + '%'  //set as you wish
            }
        },
        cutoutPercentage: 50,
        legend: {
            display: false
        }
    }
});

// MILD GVHD
var value = 30;
var data = {
  datasets: [
    {
      data: [value, 100-value],
      backgroundColor: [
        "#16A2B8",
        "#f0f3f5"
      ]
    }]
};
var promisedDeliveryChart = new Chart(document.getElementById('mild-gvhd'), {
    type: 'doughnut',
    data: data,
    options: {
        events: [],
        elements: {
            center: {
                text: value + '%'  //set as you wish
            }
        },
        cutoutPercentage: 50,
        legend: {
            display: false
        }
    }
});

// MODERATE GVHD
var value = 40;
var data = {
  datasets: [
    {
      data: [value, 100-value],
      backgroundColor: [
        "#16A2B8",
        "#f0f3f5"
      ]
    }]
};
var promisedDeliveryChart = new Chart(document.getElementById('moderate-gvhd'), {
    type: 'doughnut',
    data: data,
    options: {
        events: [],
        elements: {
            center: {
                text: value + '%'  //set as you wish
            }
        },
        cutoutPercentage: 50,
        legend: {
            display: false
        }
    }
});

// SEVERE GVHD
var value = 25;
var data = {
  datasets: [
    {
      data: [value, 100-value],
      backgroundColor: [
        "#16A2B8",
        "#f0f3f5"
      ]
    }]
};
var promisedDeliveryChart = new Chart(document.getElementById('severe-gvhd'), {
    type: 'doughnut',
    data: data,
    options: {
        events: [],
        elements: {
            center: {
                text: value + '%'  //set as you wish
            }
        },
        cutoutPercentage: 50,
        legend: {
            display: false
        }
    }
});

/////////////////////////////
// BMT //
/////////////////////////////

// WITH TRANSPLANT
var value = 70;
var data = {
  datasets: [
    {
      data: [value, 100-value],
      backgroundColor: [
        "#16A2B8",
        "#f0f3f5"
      ]
    }]
};
var promisedDeliveryChart = new Chart(document.getElementById('with-bmt'), {
    type: 'doughnut',
    data: data,
    options: {
        events: [],
        elements: {
            center: {
                text: value + '%'  //set as you wish
            }
        },
        cutoutPercentage: 50,
        legend: {
            display: false
        }
    }
});
