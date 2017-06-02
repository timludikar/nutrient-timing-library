/** @flow */
/* eslint no-restricted-syntax: [2, "class"] */


const BASE_FACTOR = 1.2;
const LIGHT_FACTOR = 1.375;
const MEDIUM_FACTOR = 1.55;
const HEAVY_FACTOR = 1.725;

type initCalories = {
  bmr : number,
  adjustment ?: number
}

type updateCalories = {
  bmr ?: number,
  adjustment ?: number
}

export type Calorie = {
  [string]: number,
  base: number,
  light: number,
  medium: number,
  heavy: number
};

export default class Calories {
  bmr: number;
  adjustment: number;
  value: Calorie;

  constructor(init: initCalories) {
    this.adjustment = init.adjustment || 0;
    this.bmr = init.bmr || 0;

    const base = (BASE_FACTOR * init.bmr) + this.adjustment;
    const light = (LIGHT_FACTOR * init.bmr) + this.adjustment;
    const medium = (MEDIUM_FACTOR * init.bmr) + this.adjustment;
    const heavy = (HEAVY_FACTOR * init.bmr) + this.adjustment;

    this.value = { base, light, medium, heavy };
  }

  update(update: updateCalories): Calories {
    return new Calories({
      bmr: update.bmr || this.bmr,
      adjustment: update.adjustment || this.adjustment,
    });
  }

  keys(): Array<string> {
    return Object.keys(this.value);
  }

  values(): Array<any> {
    return Object.values(this.value);
  }
}
