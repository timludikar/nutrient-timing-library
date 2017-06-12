'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

/* eslint no-restricted-syntax: [2, "class"] */

const BASE_FACTOR = 1.2;
const LIGHT_FACTOR = 1.375;
const MEDIUM_FACTOR = 1.55;
const HEAVY_FACTOR = 1.725;

/**
 * A Calorie containing a number.
 * @typedef {number} calorie
 */


/**
 * Volume Object
 * @typedef {Object} initVolume 
 * @property {calorie} base - Indicates a base training volume.
 * @property {calorie} light - Indicates a light training volume.
 * @property {calorie} mediun - Indicates a medium training volume.
 * @property {calorie} heavy - Indicates a heavy training volume.
 */


/**
 * Class representing a Training Volume
 * 
 * @export
 * @class Volume
 */
class Volume {

  /**
   * @param  {initVolume} init
   * @returns Volume
   */
  constructor(init) {
    const input = init !== undefined ? init : {};
    this.base = input.base || 0;
    this.light = input.light || 0;
    this.medium = input.medium || 0;
    this.heavy = input.heavy || 0;
  }

  /**
   * Convert an generic Object into a Volume.
   * 
   * @static
   * @param {any} obj 
   * @returns @this 
   * 
   * @memberOf Volume
   */
  static fromObject(obj) {
    return new this(obj);
  }

  /**
   * Convert an Array into a Volume
   * 
   * @static
   * @param {Array<any>} input 
   * @returns null 
   * 
   * @memberOf Volume
   */
  static fromArray(input) {
    const result = {};
    input.forEach(i => {
      result[i[0]] = i[1];
    });
    return this.fromObject(result);
  }

  /**
   * Get the Volume's value; "base", "light", "medium", "heavy".
   * 
   * @param {string} value 
   * @returns {number} 
   * 
   * @memberOf Volume
   */
  get(value) {
    switch (value) {
      case 'base':
        return this.base;
      case 'light':
        return this.light;
      case 'medium':
        return this.medium;
      case 'heavy':
        return this.heavy;
      default:
        return 0;
    }
  }

  /**
   * Convert Volume to Array.
   * 
   * @returns {Array<any>} 
   * 
   * @memberOf Volume
   */
  toArray() {
    return Object.keys(this).map(key => [key, this.get(key)]);
  }

  /**
   * Returns Array of Volume key parameters.
   * 
   * @returns {Array<string>} 
   * 
   * @memberOf Volume
   */
  keys() {
    return Object.keys(this);
  }

  /**
   * Returns Array of Volume values.
   * 
   * @returns {Array<any>} 
   * 
   * @memberOf Volume
   */
  values() {
    return Object.values(this);
  }

  /**
   * Returns Array of Volume key: values.
   * 
   * @returns {Array<any>} 
   * 
   * @memberOf Volume
   */
  entries() {
    return Object.entries(this);
  }
}

exports.Volume = Volume; /**
                          * Class representing Calories
                          * 
                          * @class Calories
                          * @extends {Volume}
                          */

class Calories extends Volume {
  /**
   * Calculates calories according to BMR.
   * 
   * @param {number} bmr 
   * @returns {Calories} 
   * 
   * @memberOf Calories
   */
  calculate(bmr) {
    this.base = BASE_FACTOR * bmr;
    this.light = LIGHT_FACTOR * bmr;
    this.medium = MEDIUM_FACTOR * bmr;
    this.heavy = HEAVY_FACTOR * bmr;
    return this;
  }

  /**
   * Calculate calories based on calorie adjustment.
   * 
   * @param {number} factor 
   * @returns {Calories} 
   * 
   * @memberOf Calories
   */
  adjustment(factor) {
    this.base = this.base + factor;
    this.light = this.light + factor;
    this.medium = this.medium + factor;
    this.heavy = this.heavy + factor;
    return this;
  }

  /**
   * Update calories.
   * 
   * @param {initVolume} [init] 
   * @returns {Calories} 
   * 
   * @memberOf Calories
   */
  update(init) {
    const input = init !== undefined ? init : {};
    const newBase = input.base || this.base;
    const newLight = input.light || this.light;
    const newMedium = input.medium || this.medium;
    const newHeavy = input.heavy || this.heavy;
    return new Calories({ base: newBase, light: newLight, medium: newMedium, heavy: newHeavy });
  }
}

exports.default = Calories;