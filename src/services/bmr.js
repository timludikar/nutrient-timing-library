/** @flow */
/* eslint no-mixed-operators: ["error", {"groups": [["&", "|", "^", "~", "<<", ">>", ">>>"], ["&&", "||"]]}] */

/**
 * BMR Object
 * @typedef {Object} BMRInit 
 * @property {number} height - Indicates a height in inches.
 * @property {number} weight - Indicates a weight in lbs.
 * @property {number} age - Indicates an age.
 * @property {string} sex - Indicates a gender.
 */
type BMRInit = {
  height: number,
  weight: number,
  age: number,
  sex: string
};

/**
 * Calculate the BMR based on height, weight, age, and gender.
 * 
 * @param {BMRInit} init 
 * @returns {number} 
 */
const calculate = (init: BMRInit): number => {
  switch (init.sex) {
    case 'm':
      return ((init.weight * 10) + (init.height * 6.25) - (init.age * 5) + 5);
    case 'f':
      return ((init.weight * 10) + (init.height * 6.25) - (init.age * 5) - 10);
    default:
      return 0;
  }
};

export default {
  calculate,
};
