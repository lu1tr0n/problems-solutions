'use strict'
/**
 * @description Rotate characters in a string, provided by user
 * @author lu1tr0n
 */
let hor_mirror = (s = '') => {
	/**
	 * Define Variables
	 */
	let s_split = '';

	if (s.trim() != '') {
		s_split = s.split('\n');
		// Reverse array
		s = s_split.reverse();
		s = s.join('\\n')
	} else {
		console.error("String Empty");
		//new throw Error("String Empty");
	}
	return s;
};

// Export
module.exports = {
	hor_mirror	
};