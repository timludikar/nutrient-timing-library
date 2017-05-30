/** @flow */

const BASE_FACTOR = 1.2;
const LIGHT_FACTOR = 1.375;
const MEDIUM_FACTOR = 1.55;
const HEAVY_FACTOR = 1.725;

export type Calorie = {
    base: number,
    light: number,
    medium: number,
    heavy: number
}

export default class Calories {
  base: number;
  light: number;
  medium: number;
  heavy: number;

  constructor(bmr: number = 0, phase ?: number = 0): Calorie {
    this.base = (BASE_FACTOR * bmr) + phase;
    this.light = (LIGHT_FACTOR * bmr) + phase;
    this.medium = (MEDIUM_FACTOR * bmr) + phase;
    this.heavy = (HEAVY_FACTOR * bmr) + phase;
    return this;
  }
}
