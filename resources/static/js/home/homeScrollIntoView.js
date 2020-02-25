"use strict";
(function scopeWrapper($) {

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
              [1, 5, 2, 5, 4, 3, 6]
            ]
          }, {
            low: 0,
            showArea: true,
            showPoint: false,
            fullWidth: true,
            axisY: {
              showGrid: false,
              showLabel: false,
              offset: 0
            }
        });

        analysisChart.on('draw', function(data) {
          if(data.type === 'line' || data.type === 'area') {
              data.element.animate({
                d: {
                  begin: 2000 * data.index,
                  dur: 2000,
                  from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                  to: data.path.clone().stringify(),
                  easing: Chartist.Svg.Easing.easeOutQuint
                }
              });
          }
        });

        // Animate the numbers in the networth and expense
        animateValue(document.getElementById('averageExpenseAmount'), 2000, 2834,  '-€' ,2000);
        animateValue(document.getElementById('networthAmount'), 2800, 3985,  '€' ,2000);

        // Remove Event Listener for SVG
        document.removeEventListener('scroll', animateSVG);
      }
  }
  
}(jQuery)); 