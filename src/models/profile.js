/** @flow */

import Calories from './calorie';
import Nutrient from './nutrient';

const CM_TO_INCHES = 0.393701;
const KG_TO_LBS = 2.20462;

/**
 * Profile Object
 * @typedef {Object} User
 * @property {string} firstName - Indicates a first name.
 * @property {string} lastName - Indicates a last name.
 * @property {number} height - Indicates a height in inches.
 * @property {number} weight - Indicates a weight in lbs.
 * @property {number} sex - Indicates a gender.
 * @property {string} age - Indicates age.
 */
type User = {
  firstName ?: string,
  lastName ?: string,
  height ?: number,
  weight ?: number,
  sex ?: string,
  age ?: number,
}

/**
 * Class representing a Profile.
 *
 * @export
 * @class Profile
 */
export default class Profile {
  firstName: string;
  lastName: string;
  height: number;
  weight: number;
  sex: string;
  age: number;
  bmr: number;
  calories: Calories;
  macros: Nutrient;

  /**
   * Creates an instance of Profile.
   * @param {User} [init]
   *
   * @memberOf Profile
   */
  constructor(init ?: User) {
    const input = init !== undefined ? init : {};
    this.firstName = input.firstName || '';
    this.lastName = input.lastName || '';
    this.height = input.height || 0;
    this.weight = input.weight || 0;
    this.age = input.age || 0;
    this.sex = input.sex || '';
  }

  /**
   * Add height to profile in centimeters.
   *
   * @param {number} height
   *
   * @memberOf Profile
   */
  addHeightInCM(height: number) {
    this.height = height * CM_TO_INCHES;
  }

  /**
   * Add height to profile in feet.
   *
   * @param {number} feet
   * @param {number} inches
   *
   * @memberOf Profile
   */
  addHeightInFeet(feet: number, inches: number) {
    this.height = (feet * 12) + inches;
  }

  /**
   * Add weight to profile in KGs.
   *
   * @param {number} weight
   *
   * @memberOf Profile
   */
  addWeightInKg(weight: number) {
    this.weight = weight * KG_TO_LBS;
  }

  /**
   * Set gender of profile to male.
   *
   *
   * @memberOf Profile
   */
  setMale() {
    this.sex = 'm';
  }

  /**
   * Set gender of profile to female.
   *
   *
   * @memberOf Profile
   */
  setFemale() {
    this.sex = 'f';
  }
}
