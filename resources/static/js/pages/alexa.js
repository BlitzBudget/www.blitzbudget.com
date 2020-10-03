"use strict";
(function scopeWrapper($) {

    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    // Load More Alexa Questions
    document.getElementById('load-more-alexa-questions').addEventListener("click", function (e) {
        // Record the height of the div
        $('#alexa-questions').animate({
            height: '1200px'
        });

        // Load More Alexa Questions to display none
        this.classList.add('d-none');
    })

    $('.alexa-skill-link').click(function () {
        let alexaSkillLink = document.getElementsByClassName('alexa-skill-link');

        for (let i = 0, len = alexaSkillLink.length; i < len; i++) {
            let skillEl = alexaSkillLink[i];
            // Remove is checked
            skillEl.classList.remove('is-checked');
        }

        // Make the clicked Element checked
        this.classList.add('is-checked');
        let linkTarget = this.dataset.target;

        // Show questions depending on link click
        let alexaQuestions = document.getElementsByClassName('alexa-question');
        // Calculate number of skills displayed
        let numberOfAlexaSkillsDisplayed = 0;
        // Do not fade , Fade in left, Fade in right
        let fadePossibilities = ['fadeInLeft', 'fadeInRight', ''];
        // Index Fade is set with 0
        let indexFade = 0;
        for (let i = 0, len = alexaQuestions.length; i < len; i++) {
            /*
             * Fade Possibilities indes iterate between 0,1,2
             */
            if (indexFade >= 0 && indexFade < fadePossibilities.length - 1) {
                // Index Fade addition
                indexFade++;
            } else {
                // If Index is > 2 then move the index back to 0
                indexFade = 0;
            }

            /*
             * Iterate questions
             */
            let oneQuestion = alexaQuestions[i];
            let currentTarget = oneQuestion.dataset.target;
            // If show all skills or show only get, change, or add skills
            if (isEqual(linkTarget, 'all-skills') || isEqual(currentTarget, linkTarget)) {
                oneQuestion.classList.remove('d-none');
                if (isNotEmpty(fadePossibilities[indexFade])) {
                    oneQuestion.classList.add(fadePossibilities[indexFade]);
                }
                numberOfAlexaSkillsDisplayed++;
            } else {
                oneQuestion.classList.add('d-none');
                oneQuestion.classList.remove('fadeIn');
                oneQuestion.classList.remove('fadeInLeft');
                oneQuestion.classList.remove('fadeInRight');
            }
        }

        /*
         * Change the height of the cards wrapper
         */
        // Record the height of the div
        $('#alexa-questions').animate({
            height: '28rem'
        });

        /*
         * Show view more only if more than 9 are present
         */
        let loadMoreAlexa = document.getElementById('load-more-alexa-questions');
        if (numberOfAlexaSkillsDisplayed > 9) {
            // Load More Alexa Questions to display none
            loadMoreAlexa.classList.remove('d-none');
            loadMoreAlexa.classList.add('fadeIn');
        } else {
            // Load More Alexa Questions to display none
            loadMoreAlexa.classList.add('d-none');
            loadMoreAlexa.classList.remove('fadeIn');
        }
    });

}(jQuery));
