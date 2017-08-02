/** @flow */
/* eslint no-restricted-syntax: [2, "class"] */

import Volume from './volume';
import type { TrainingVolume } from './volume';

const BASE_FACTOR = 1.2;
const LIGHT_FACTOR = 1.375;
const MEDIUM_FACTOR = 1.55;
const HEAVY_FACTOR = 1.725;

/**
 * Class representing Calories
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
  calculate(bmr: number): Calories {
    this.base = (BASE_FACTOR * bmr);
    this.light = (LIGHT_FACTOR * bmr);
    this.medium = (MEDIUM_FACTOR * bmr);
    this.heavy = (HEAVY_FACTOR * bmr);
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
  adjustment(factor: number): Calories {
    this.base = this.base + factor;
    this.light = this.light + factor;
    this.medium = this.medium + factor;
    this.heavy = this.heavy + factor;
    return this;
  }

  /**
   * Update calories.
   *
   * @param {TrainingVolume} [init]
   * @returns {Calories}
   *
   * @memberOf Calories
   */
  update(init ?: TrainingVolume): Calories {
    const input = init !== undefined ? init : {};
    const newBase = input.base || this.base;
    const newLight = input.light || this.light;
    const newMedium = input.medium || this.medium;
    const newHeavy = input.heavy || this.heavy;
    return new Calories({ base: newBase, light: newLight, medium: newMedium, heavy: newHeavy });
  }
}


export default Calories;
