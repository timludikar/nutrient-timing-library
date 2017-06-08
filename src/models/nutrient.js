/** @flow */
/* eslint no-mixed-operators: ["error", {"groups": [["&", "|", "^", "~", "<<", ">>", ">>>"], ["&&", "||"]]}] */

import Calories from './calorie';

const PROTEIN_RANGE = [0.8, 1];
const CARB_RANGE = [0.5, 1, 1.5, 2];

type initNutrient = {
  bmr: number,
  weight: number,
  calories: Calories
};

export default class Nutrient {
  protein: number[];
  carbohydrate: Calories;
  fat: Calories;

  constructor(init: initNutrient): Nutrient {
    this.calculateProtein(init.weight * 2.2);
    this.calculateCarbs(init.weight * 2.2);
    this.calculateFats(init.calories);
    return this;
  }

  calculateProtein(weight: number) {
    this.protein = PROTEIN_RANGE.map((val) => weight * val);
  }

  calculateCarbs(weight: number) {
    const base = weight * CARB_RANGE[0];
    const light = weight * CARB_RANGE[1];
    const medium = weight * CARB_RANGE[2];
    const heavy = weight * CARB_RANGE[3];
    this.carbohydrate = new Calories(base, light, medium, heavy);
  }

  calculateFats(calories: Calories) {
    const result: Array<any> =
      calories.keys().map((key) => {
        const output = [];
        output.push(key);
        output.push((calories.get(key) - (this.carbohydrate.get(key) + this.protein[0]) * 4) / 9);
        return output;
      });

    this.fat = Calories.fromArray(result);
  }
}
