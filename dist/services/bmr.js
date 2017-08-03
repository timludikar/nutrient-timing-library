'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Calculate the BMR based on height, weight, age, and gender.
 * 
 * @param {BMRInit} init 
 * @returns {number} 
 */
const calculate = init => {
  switch (init.sex) {
    case 'm':
      return init.weight * 10 + init.height * 6.25 - init.age * 5 + 5;
    case 'f':
      return init.weight * 10 + init.height * 6.25 - init.age * 5 - 10;
    default:
      return 0;
  }
};
/* eslint no-mixed-operators: ["error", {"groups": [["&", "|", "^", "~", "<<", ">>", ">>>"], ["&&", "||"]]}] */

/**
 * BMR Object
 * @typedef {Object} BMRInit 
 * @property {number} height - Indicates a height in inches.
 * @property {number} weight - Indicates a weight in lbs.
 * @property {number} age - Indicates an age.
 * @property {string} sex - Indicates a gender.
 */
exports.default = {
  calculate
};