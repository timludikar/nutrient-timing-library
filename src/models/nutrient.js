/** @flow */

import { Volume } from './calorie';

type initProtein = {
  low: number,
  high: number
};

export default class Nutrient {
  protein: Protein;
  carbohydrate: Carbohydrate;
  fat: Fat

  constructor(carbohydrate: Carbohydrate, protein: Protein, fat: Fat) {
    this.protein = protein;
    this.carbohydrate = carbohydrate;
    this.fat = fat;
  }
}

export class Protein {
  low: number;
  high: number;

  constructor(init: initProtein) {
    this.low = init.low;
    this.high = init.high;
  }

  static fromArray(input: number[]): Protein {
    return new this({ low: input[0], high: input[1] });
  }
}

export class Carbohydrate extends Volume {}

export class Fat extends Volume {}
