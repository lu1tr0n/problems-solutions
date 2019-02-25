'use strict'
/**
 * @description Rotate characters in a string, provided by user
 * @author lu1tr0n
 */
let vert_mirror = (s = '') => {
	/**
	 * Define Variables
	 */
	let s_split = '';
	let s_temp 	= '';
	let a_temp  = [];

	if (s.trim() != '') {
		s_split = s.split('\n');
		// Reverse strings
		for (let i = 0; i < s_split.length; i++) {
			s_temp = s_split[i].split('');
			s_temp = s_temp.reverse();
			s_temp = s_temp.join('');
			a_temp.push(s_temp);
		}
		s = a_temp.join('\\n');
	} else {
		console.error("String Empty");
		//new throw Error("String Empty");
	}
	return s;
};

// Export
module.exports = {
	vert_mirror
}