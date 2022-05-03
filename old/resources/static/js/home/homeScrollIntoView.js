"use strict";
(function scopeWrapper($) {

  let currentCurrencyPreference = '€';

  // get the element to animate
  let allAnimatedEl = document.getElementById('analysisChart');


  // listen for scroll event and call animate function
  document.addEventListener('scroll', animateSVG);

  // animate element when it is in view
  function animateSVG() {
      // is element in view?
      if (inView(allAnimatedEl)) {
        let analysisChart = new Chartist.Line('#analysisChart', {
            labels: ['Dec 10', '', 'Dec 12', '', 'Dec 14', '', 'Dec 16'],
            series: [
              [100, 500, 200, 500, 40, 320, 612]
            ]
          },{
             lineSmooth: Chartist.Interpolation.cardinal({
                 tension: 10
             }),
             axisY: {
                showGrid: true,
                offset: 70,
                  labelInterpolationFnc: function(value) {
                    
                    value = formatLargeCurrencies(value);
                    return currentCurrencyPreference + value;
                  },
                  scaleMinSpace: 15
             },
             axisX: {
                 showGrid: false,
             },
             showPoint: true,
         });

        analysisChart.on("draw", function(data) {
          if (data.type === "point") {
            data.element._node.setAttribute("title", "Total: <strong>" + currentCurrencyPreference + formatNumber(data.value.y, 'en-US') + '</strong>');
            data.element._node.setAttribute("data-chart-tooltip", "analysisChart");
          }
        }).on("created", function() {
          // Initiate Tooltip
          $("#analysisChart").tooltip({
            selector: '[data-chart-tooltip="analysisChart"]',
            container: "#analysisChart",
            html: true,
            placement: 'auto',
            delay: { "show": 300, "hide": 100 }
          });
        });

        // Animate line chart
        startAnimationForLineChart(analysisChart);

        // Animate the numbers in the networth and expense
        animateValue(document.getElementById('averageExpenseAmount'), 2000, 2834,  '-€' ,2000);
        animateValue(document.getElementById('networthAmount'), 2800, 3985,  '€' ,2000);

        // Remove Event Listener for SVG
        document.removeEventListener('scroll', animateSVG);
      }
  }

  function startAnimationForLineChart(chart) {
    // Induce delay
    let delays = 80;
    let durations = 500;

    chart.on('draw', function(data) {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === 'point') {
        seq++;
        data.element.animate({
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq = 0;
  }
  
}(jQuery)); 