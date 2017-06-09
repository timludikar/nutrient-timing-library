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

class Profile {

  addHeightInCM(height) {
    this.height = height * CM_TO_INCHES;
  }

  addHeightInFeet(feet, inches) {
    this.height = feet * 12 + inches;
  }

  addWeightInKg(weight) {
    this.weight = weight * KG_TO_LBS;
  }

  setMale() {
    this.sex = 'm';
  }

  setFemale() {
    this.sex = 'f';
  }
}
exports.default = Profile;