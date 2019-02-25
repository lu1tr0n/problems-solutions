'use strict'
/**
 * @description Rotate characters in a string, provided by user
 * @author lu1tr0n
 */
const { hor_mirror } = require('./hor_mirror');
const { vert_mirror } = require('./vert_mirror');
const { oper } = require('./utils');

/**
 * DEMO
 * s = "abcd\nefgh\nijkl\nmnop"
 * oper(vert_mirror, s) => "dcba\nhgfe\nlkji\nponm"
 * oper(hor_mirror, s) => "mnop\nijkl\nefgh\nabcd"
 */
let s = "abcd\nefgh\nijkl\nmnop";
oper(vert_mirror, s); // => "dcba\nhgfe\nlkji\nponm";
oper(hor_mirror, s);  // => "mnop\nijkl\nefgh\nabcd";