window.onload = function () {
	$(document).ready(function(){
		//Currency Preference
		window.currentCurrencyPreference = '$';

		window.analysisChart = new Chartist.Line('#analysisChart', {
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

		window.analysisChart.on('draw', function(data) {
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

    	//Format numbers in Indian Currency
		function formatNumber(num, locale) {
			if(isEmpty(locale)){
				locale = "en-US";
			}
			
			return num.toLocaleString(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
		}


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


		function splitElement(str, splitString){
			if(includesStr(str, splitString)){
				return isEmpty(str) ? str : str.split(splitString);
			}
			
			return str;
		}


		function lastElement(arr){
			if(Array.isArray(arr)){
				return isEmpty(arr) ? arr : arr[arr.length-1];
			}
			return arr;
		}

		function includesStr(arr, val){
			return isEmpty(arr) ? null : arr.includes(val); 
		}

		function  isEmpty(obj) {
			// Check if objext is a number or a boolean
			if(typeof(obj) == 'number' || typeof(obj) == 'boolean') return false; 
			
			// Check if obj is null or undefined
			if (obj == null || obj === undefined) return true;
			
			// Check if the length of the obj is defined
			if(typeof(obj.length) != 'undefined') return obj.length == 0;
			 
			// check if obj is a custom obj
			for(let key in obj) {
		        if(obj.hasOwnProperty(key))return false;
		    }

		    // Check if obj is an element
		    if(obj instanceof Element) return false;
			    
			return true;
		}

		
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
