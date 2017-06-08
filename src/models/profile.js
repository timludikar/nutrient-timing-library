/** @flow */

import BMR from './bmr';
import Calories from './calorie';
import Nutrient from './nutrient';

const CM_TO_INCHES = 0.393701;
const KG_TO_LBS = 2.20462;

export default class Profile {
  firstName: string;
  lastName: string;
  height: number;
  weight: number;
  sex: string;
  age: number;
  bmr: BMR;
  calories: Calories;
  macros: Nutrient;

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

  calculate() {
    const bmr = new BMR({
      height: this.height,
      weight: this.weight,
      age: this.age,
      sex: this.sex,
    });

    const calories = new Calories().calculate(bmr.value);

    const macros = new Nutrient({ bmr, calories });

    this.bmr = bmr;
    this.calories = calories;
    this.macros = macros;
  }
}
