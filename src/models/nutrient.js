/** @flow */
/* eslint no-mixed-operators: ["error", {"groups": [["&", "|", "^", "~", "<<", ">>", ">>>"], ["&&", "||"]]}] */

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

export class Protein extends Volume {
  low: number;
  high: number;

  constructor(low: number, high: number) {
    super();
    this.low = low || 0;
    this.high = high || 0;
  }

  static fromArray(input: number[]): Protein {
    return new this(input[0], input[1]);
  }
}

export class Carbohydrate extends Volume {}

export class Fat extends Volume {}
