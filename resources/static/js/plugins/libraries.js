
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

//Format numbers in Indian Currency
function formatNumber(num, locale) {
	if(isEmpty(locale)){
		locale = "en-US";
	}
	
	return num.toLocaleString(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function animateValue(element, start, end, prefix ,duration) {
	// If start == end then return
    if (start == end) {
        // Set as text content
        if(isNotEmpty(prefix)) {
        	element.textContent = prefix + formatNumber(end, currentUser.locale);
        } else {
        	element.textContent = end;
        }
        return;
    }

    // If different 
    let range = end - start;
    let current = start;
    let increment = end > start? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));

    let timer = setInterval(function() {
    	// If start == end then return
        if (current >= end) {
            clearInterval(timer);
        } else {
        	// Incremenet current (append prefix)
	        current += increment;
	        // Set as text content
	        if(isNotEmpty(prefix)) {
	        	element.textContent = prefix + formatNumber(current, currentUser.locale);
	        } else {
	        	element.textContent = current;
	        }
        }   
    }, stepTime);
}