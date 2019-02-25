'use strict'

/**
 * @description Function Complete the function/method so that it returns 
 * the url with anything after the anchor (#) removed.
 * @author lu1tr0n
 */
let removeUrlAnchor = (url = '') => {
	/**
	 * Define Variables
	 */
	let url_converted = '';

	if (url != '') {
		let n = url.indexOf('#');
 		url_converted = url.substring(0, n != -1 ? n : url.length);
	} else {
		//console.error("The url provided is empty");
		throw new Error('The url provided is empty');
	}

	return url_converted;
};

/**
 *	DEMO, Examples:
 */
 // returns 'www.codewars.com'
console.log(removeUrlAnchor('www.codewars.com#about'));

// returns 'www.codewars.com?page=1' 
console.log(removeUrlAnchor('www.codewars.com?page=1'));