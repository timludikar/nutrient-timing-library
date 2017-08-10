'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _calorie = require('./calorie');

var _calorie2 = _interopRequireDefault(_calorie);

var _nutrient = require('./nutrient');

var _nutrient2 = _interopRequireDefault(_nutrient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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


/**
 * Class representing a Profile.
 *
 * @export
 * @class Profile
 */
class Profile {

  /**
   * Creates an instance of Profile.
   * @param {User} [init]
   *
   * @memberOf Profile
   */
  constructor(init) {
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
  addHeightInCM(height) {
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
  addHeightInFeet(feet, inches) {
    this.height = feet * 12 + inches;
  }

  /**
   * Add weight to profile in KGs.
   *
   * @param {number} weight
   *
   * @memberOf Profile
   */
  addWeightInKg(weight) {
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
exports.default = Profile;