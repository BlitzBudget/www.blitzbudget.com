"use strict";
(function scopeWrapper($) {

  // get the element to animate
  let allAnimatedEl = document.getElementsByClassName('text-animation');


  // listen for scroll event and call animate function
  document.addEventListener('scroll', animate);

  // Check if any of the elements are in view
  animate();

  // animate element when it is in view
  function animate() {

    for(let i = 0, len = allAnimatedEl.length; i < len; i++) {
      let children = allAnimatedEl[i];
      // is element in view?
      if (inView(children)) {
        // Convert children to classList
        children = children.classList;
        if(children.contains('fI')) {
          // element is in view, add class to element
          children.add('fadeIn');
        } else if(children.contains('fIR')) {
          // Fade in right for element
          children.add('fadeInRight');
        } else if(children.contains('fIU')) {
          // Fade in Up for element
          children.add('fadeInUp');
        } else {
          // Fade in left for all the children
          children.add('fadeInLeft');
        }
      }
    }
  }
  
}(jQuery)); 

// check if element is in view
function inView(element) {
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;
  var elementHeight = element.clientHeight;  
  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
  
  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }
  
  return false;
}
