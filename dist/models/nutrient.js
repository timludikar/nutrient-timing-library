'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fat = exports.Carbohydrate = exports.Protein = undefined;

var _calorie = require('./calorie');

/**
 * Class representing a Nutrient Volume
 * 
 * @export
 * @class Nutrient
 */


/**
 * Protein Object
 * @typedef {Object} initProtein 
 * @property {number} low - Indicates a low protein range.
 * @property {number} high - Indicates a high protein range.
 */
class Nutrient {

  /**
   * Creates an instance of Nutrient.
   * @param {Carbohydrate} carbohydrate 
   * @param {Protein} protein 
   * @param {Fat} fat 
   * 
   * @memberOf Nutrient
   */
  constructor(carbohydrate, protein, fat) {
    this.protein = protein;
    this.carbohydrate = carbohydrate;
    this.fat = fat;
  }
}

exports.default = Nutrient; /**
                             * Class representing a Protein
                             * 
                             * @export
                             * @class Protein
                             */

class Protein {

  /**
   * Creates an instance of Protein.
   * @param {initProtein} init 
   * 
   * @memberOf Protein
   */
  constructor(init) {
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
  static fromArray(input) {
    return new this({ low: input[0], high: input[1] });
  }
}

exports.Protein = Protein; /**
                            * Class representing a Carbohydrate
                            * 
                            * @export
                            * @class Carbohydrate
                            * @extends {Volume}
                            */

class Carbohydrate extends _calorie.Volume {}

exports.Carbohydrate = Carbohydrate; /**
                                      * Class representing a Fat
                                      * 
                                      * @export
                                      * @class Fat
                                      * @extends {Volume}
                                      */

class Fat extends _calorie.Volume {}
exports.Fat = Fat;