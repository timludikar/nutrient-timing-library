/** @flow */

import Volume from './volume';

/**
 * Protein Object
 * @typedef {Object} ProteinRange
 * @property {number} low - Indicates a low protein range.
 * @property {number} high - Indicates a high protein range.
 */
type ProteinRange = {
  low: number,
  high: number
};

/**
 * Class representing a Nutrient Volume
 *
 * @export
 * @class Nutrient
 */
export default class Nutrient {
  protein: Protein;
  carbohydrate: Carbohydrate;
  fat: Fat

  /**
   * Creates an instance of Nutrient.
   * @param {Carbohydrate} carbohydrate
   * @param {Protein} protein
   * @param {Fat} fat
   *
   * @memberOf Nutrient
   */
  constructor(carbohydrate: Carbohydrate, protein: Protein, fat: Fat) {
    this.protein = protein;
    this.carbohydrate = carbohydrate;
    this.fat = fat;
  }
}

/**
 * Class representing a Protein
 *
 * @export
 * @class Protein
 */
export class Protein {
  low: number;
  high: number;

  /**
   * Creates an instance of Protein.
   * @param {ProteinRange} init
   *
   * @memberOf Protein
   */
  constructor(init: ProteinRange) {
    this.low = init.low;
    this.high = init.high;
  }

  /**
   * Create Protein from Array.
   *
   * @static
   * @param {number[]} input
   * @returns {Protein}
   *
   * @memberOf Protein
   */
  static fromArray(input: number[]): Protein {
    return new this({ low: input[0], high: input[1] });
  }
}

/**
 * Class representing a Carbohydrate
 *
 * @export
 * @class Carbohydrate
 * @extends {Volume}
 */
export class Carbohydrate extends Volume {}

/**
 * Class representing a Fat
 *
 * @export
 * @class Fat
 * @extends {Volume}
 */
export class Fat extends Volume {}
