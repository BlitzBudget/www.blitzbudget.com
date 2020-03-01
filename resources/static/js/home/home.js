window.onload = function () {
	$(document).ready(function(){

		// Current Time on Iphone 11
		let currentTime = new Date();
		document.getElementById('currentTime').innerText = ("0" + Number(currentTime.getHours())).slice(-2) + ' : ' + ("0" + Number(currentTime.getMinutes())).slice(-2);

		// Current Year
		document.getElementById('currentYear').innerText = currentTime.getFullYear();

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


		// Build the data for the line chart
    	let dataSimpleBarChart = {
	         labels: ['Beauty', 'Bills & Fees', 'Family & Personal', 'Shopping', 'Home', 'Travel' , 'Other'],
	         series: [100,800,600,120,800,500,1200]	         
    	}

    	// Build pie chart on iphone 11
    	buildPieChart(dataSimpleBarChart, 'chatist-pie', 4120);

    	// Animate values on Iphone 11
    	animateValue(document.getElementById('averageExpenseAmountIphone'), 2000, 2834,  '-€' ,2000);

    	// Build pie chart on iphone 11
    	buildPieChart(dataSimpleBarChart, 'chatist-pie2', 4120);

    	// Mobile Menu Button
    	document.getElementById('mobileMenuButton').addEventListener("click",function(){
    		this.parentNode.classList.toggle('is-open');
    	});

	});
}
