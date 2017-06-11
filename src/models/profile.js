/** @flow */

import Calories from './calorie';
import Nutrient from './nutrient';

const CM_TO_INCHES = 0.393701;
const KG_TO_LBS = 2.20462;

type initProfile = {
  firstName ?: string,
  lastName ?: string,
  height ?: number,
  weight ?: number,
  sex ?: string,
  age ?: number,
}

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

  constructor(init ?: initProfile) {
    const input = init !== undefined ? init : {};
    this.firstName = input.firstName || '';
    this.lastName = input.lastName || '';
    this.height = input.height || 0;
    this.weight = input.weight || 0;
    this.age = input.age || 0;
    this.sex = input.sex || '';
  }

  addHeightInCM(height: number) {
    this.height = height * CM_TO_INCHES;
  }

  addHeightInFeet(feet: number, inches: number) {
    this.height = (feet * 12) + inches;
  }

  addWeightInKg(weight: number) {
    this.weight = weight * KG_TO_LBS;
  }

  setMale() {
    this.sex = 'm';
  }

  setFemale() {
    this.sex = 'f';
  }
}
