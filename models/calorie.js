'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _volume = require('./volume');

var _volume2 = _interopRequireDefault(_volume);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BASE_FACTOR = 1.2;
/* eslint no-restricted-syntax: [2, "class"] */

const LIGHT_FACTOR = 1.375;
const MEDIUM_FACTOR = 1.55;
const HEAVY_FACTOR = 1.725;

/**
 * Class representing Calories
 * @extends {Volume}
 */
class Calories extends _volume2.default {
  /**
   * Calculates calories according to BMR.
   *
   * @param {number} bmr
   * @returns {Calories}
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
   * @param {TrainingVolume} [update]
   * @returns {Calories}
   */
  update(update) {
    const input = update !== undefined ? update : {};
    const newBase = input.base || this.base;
    const newLight = input.light || this.light;
    const newMedium = input.medium || this.medium;
    const newHeavy = input.heavy || this.heavy;
    return new Calories({ base: newBase, light: newLight, medium: newMedium, heavy: newHeavy });
  }
}

exports.default = Calories;