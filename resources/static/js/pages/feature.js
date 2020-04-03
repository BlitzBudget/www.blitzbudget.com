"use strict";
(function scopeWrapper($) {

	let api = {
		'invokeUrl' : 'https://api.blitzbudget.com',
		'sendEmailUrl' : '/send-email'
	}
	const emailValidation = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;

	document.getElementById('submit-idea').addEventListener("click",function(e) {

		// Fetch all the query parameters from URL
		const queryString = window.location.search;

		const urlParams = new URLSearchParams(queryString);

		const emailId = urlParams.get('email_id')

		if(isEmpty(emailId) || !emailValidation.test(emailId)) {
			Toast.fire({
				icon: 'error',
				title: "You are not authorized!"
			});
			return;
		}

		// Show Sweet Alert
        Swal.fire({
            title: 'Submit new idea',
            html: submitIdea(),
            inputAttributes: {
                autocapitalize: 'on'
            },
            confirmButtonClass: 'btn btn-info btn-large',
            confirmButtonText: 'Send',
            showCloseButton: true,
            buttonsStyling: false
        }).then(function(result) {
            // If confirm button is clicked
            if (result.value) {
                // send Email
                let email =  document.getElementById('emailIdFR').value; 
                let message =  document.getElementById('submitIdeaText').value + " And I think that the functionality is " + $('.imrt-sup-ftrs.active').text();
                let subject = "Suggested Features: I would like to have this feature";
				sendEmailToSupport(email, message, subject);
            }

        });

        // Disable Confirm Password button 
        let confBBBtn = document.getElementsByClassName('swal2-confirm')[0];
        if(!confBBBtn.disabled) {
            confBBBtn.setAttribute('disabled','disabled');
        }

        // CHange Focus to text Area
        document.getElementById('submitIdeaText').focus();
	});

	// HTML for ask us directly
	function submitIdea() {
		let submitIdeaDiv = document.createElement('div');
		submitIdeaDiv.classList = 'text-center px-5 py-3';

		let textArea = document.createElement('textarea');
		textArea.id = "submitIdeaText";
		textArea.classList = 'submitIdeaText';
		textArea.wrap = "hard";
		textArea.rows = "8"; 
		textArea.setAttribute('data-gramm',"false");
		textArea.placeholder = 'What would you like to be able to do? How would that help you?';
		submitIdeaDiv.appendChild(textArea);

		// Error Text
		let errorTextArea = document.createElement('div');
		errorTextArea.id = 'textErrorDispUA';
		errorTextArea.classList = 'text-danger text-left small my-2 noselect';
		submitIdeaDiv.appendChild(errorTextArea);

		// How Important
		let labelImportant = document.createElement('label');
		labelImportant.classList = 'labelImportant text-left ml-5 my-3';
		labelImportant.innerText = 'How important is this to you?';
		submitIdeaDiv.appendChild(labelImportant);

		let niceToHave = document.createElement('button');
		niceToHave.classList = 'btn btn-secondary btn-lg imrt-sup-ftrs mr-2 my-3 active';
		niceToHave.innerText = 'Nice To Have';
		submitIdeaDiv.appendChild(niceToHave);

		let important = document.createElement('button');
		important.classList = 'btn btn-secondary btn-lg imrt-sup-ftrs mr-2 my-3 importantFR';
		important.innerText = 'Important';
		submitIdeaDiv.appendChild(important);

		let criticalBtn = document.createElement('button');
		criticalBtn.classList = 'btn btn-secondary btn-lg imrt-sup-ftrs mr-2 my-3 criticalFR';
		criticalBtn.innerText = 'Critical';
		submitIdeaDiv.appendChild(criticalBtn);

		let emailinput = document.createElement('input');
		emailinput.id = 'emailIdFR';
		emailinput.classList = 'd-none';
		emailinput.placeholder = "john.doe@blitzbudget.com";
		emailinput.setAttribute('type','email');
		emailinput.setAttribute('autocapitalize','off');
		emailinput.setAttribute('spellcheck','false');
		emailinput.setAttribute('autocorrect','off');
		emailinput.setAttribute('autocomplete','off');
		submitIdeaDiv.appendChild(emailinput);

		return submitIdeaDiv;
	}

	// ASk Us Directly test Key Up Listener
	$(document).on('keyup', "#submitIdeaText", function(e) {
	
		let sendEmailBtn = document.getElementsByClassName('swal2-confirm')[0];
		let textErrorDispUA = document.getElementById('textErrorDispUA');
		let textAreaEnt = this.value;

		if(isEmpty(textAreaEnt) || textAreaEnt.length < 40) {
			sendEmailBtn.setAttribute('disabled','disabled');
			return;
		}

		textErrorDispUA.innerText = '';
		sendEmailBtn.removeAttribute('disabled');
	});

	// Set Active Class on click button
	$(document).on('click', ".imrt-sup-ftrs", function() {
		$('.imrt-sup-ftrs').removeClass('active');
		this.classList.add('active');

	});

	// Ask Us Directly test Focus Out Listener
	$(document).on('focusout', "#submitIdeaText", function() {
	
		let sendEmailBtn = document.getElementsByClassName('swal2-confirm')[0];
		let textErrorDispUA = document.getElementById('textErrorDispUA');
		let textAreaEnt = this.value;

		if(isEmpty(textAreaEnt) || textAreaEnt.length < 40) {
			textErrorDispUA.innerText = 'Please enter a minimum of 40 characters.';
			sendEmailBtn.setAttribute('disabled','disabled');			
			return;
		}

		textErrorDispUA.innerText = '';

	});

	 // Send Email to BlitzBudget Support
    function sendEmailToSupport(email, message, subject) {

    	let values = JSON.stringify({
    		"email" : email,
    		"message" : message,
    		"subject" : subject
    	});

	 	jQuery.ajax({
			url:  api.invokeUrl + api.sendEmailUrl,			
	        type: 'POST',
	        contentType:"application/json;charset=UTF-8",
	        data : values,
	        success: function(result) {
	        	Toast.fire({
					icon: 'success',
					title: "Thanks for the suggestion! We appreciate your contribution."
				});
        	},
	        error: function (thrownError) {
	    		Toast.fire({
					icon: 'error',
					title: "Unable to send the email at the moment. Please try again!"
				});
        	}
    	});

    }

}(jQuery)); 