/** @flow */
/* eslint no-mixed-operators: ["error", {"groups": [["&", "|", "^", "~", "<<", ">>", ">>>"], ["&&", "||"]]}] */

import type { Calorie } from './calorie.model';
import type BMR from './bmr.model';

const PROTEIN_RANGE = [0.8, 1];
const CARB_RANGE = [0.5, 1, 1.5, 2];

interface INutrient {
    protein: number[];
    carbohydrate: Calorie;
    fat: Calorie;
}

export default class Nutrient implements INutrient {
  protein: number[];
  carbohydrate: Calorie;
  fat: Calorie;

  constructor(bmr: BMR, calories: Calorie) {
    this.calculateProtein(bmr.weight * 2.2);
    this.calculateCarbs(bmr.weight * 2.2);
    this.calculateFats(calories);
  }

  calculateProtein(weight: number) {
    this.protein = PROTEIN_RANGE.map((val) => weight * val);
  }

  calculateCarbs(weight: number) {
    const result: Calorie = {
      base: weight * CARB_RANGE[0],
      light: weight * CARB_RANGE[1],
      medium: weight * CARB_RANGE[2],
      heavy: weight * CARB_RANGE[3],
    };
    this.carbohydrate = result;
  }

  calculateFats(calories: Calorie) {
    const result = ['base', 'light', 'medium', 'heavy'].map((load) =>
      (calories[load] - (this.carbohydrate[load] + this.protein[0]) * 4) / 9,
    );
    this.fat = {
      base: result[0],
      light: result[1],
      medium: result[2],
      heavy: result[3],
    };
  }
}
