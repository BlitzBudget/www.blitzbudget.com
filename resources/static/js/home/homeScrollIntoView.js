"use strict";
(function scopeWrapper($) {

  // get the element to animate
  let allAnimatedEl = document.getElementById('analysisChart');


  // listen for scroll event and call animate function
  document.addEventListener('scroll', animate);

  // animate element when it is in view
  function animate() {
      // is element in view?
      if (inView(allAnimatedEl)) {
        window.analysisChart.update();
      }
  }
  
}(jQuery)); 