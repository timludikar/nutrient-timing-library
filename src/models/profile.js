/** @flow */

import { bmr, macros } from '../services';
import Calories from './calorie';
import Nutrient, { Protein, Fat, Carbohydrate } from './nutrient';

const CM_TO_INCHES = 0.393701;
const KG_TO_LBS = 2.20462;

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
    this.bmr = bmr.calculate({
      height: this.height,
      weight: this.weight,
      age: this.age,
      sex: this.sex,
    });

    this.calories = new Calories().calculate(this.bmr);
    const protein = Protein.fromArray(macros.calculateProtein(this.weight));
    const carbs = Carbohydrate.fromArray(macros.calculateCarbohydrate(this.weight));
    const fats = Fat.fromArray(macros.calculateFat(carbs, protein, this.calories));
    this.macros = new Nutrient(carbs, protein, fats);
  }
}
