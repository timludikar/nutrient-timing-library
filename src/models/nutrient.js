/** @flow */

import { Volume } from './calorie';

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

  constructor(low: number, high: number) {
    this.low = low;
    this.high = high;
  }

  static fromArray(input: number[]): Protein {
    return new this(input[0], input[1]);
  }
}

export class Carbohydrate extends Volume {}

export class Fat extends Volume {}
