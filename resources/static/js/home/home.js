window.onload = function () {
	$(document).ready(function(){

		//Currency Preference
		window.currentCurrencyPreference = '$';

		$('.deleteBudget').click(function() {
			let deleteButtonElement = this;
			let categoryId = lastElement(splitElement(this.id,'-'));
			
			// Show the material spinner and hide the delete button
			document.getElementById('deleteElementSpinner-' + categoryId).classList.toggle('d-none');
			this.classList.toggle('d-none');
			
			setTimeout(function() {
	    		document.getElementById('deleteElementSpinner-' + categoryId).classList.toggle('d-none');
				deleteButtonElement.classList.toggle('d-none');
	    	}, 3000);
		});

		
		// Set the value and percentage of the progress bar
		let progressBar1 = document.getElementById('progress-budget-4');
		progressBar1.setAttribute('aria-valuenow', 100);
		progressBar1.style.width = 100 + '%'; 

		// Update the percentage in progress bar
		let progressBar2 = document.getElementById('progress-budget-5');
		progressBar2.setAttribute('aria-valuenow', 28);
		progressBar2.style.width = 28 + '%'; 

	});
}
