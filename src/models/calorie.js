/** @flow */
/* eslint no-restricted-syntax: [2, "class"] */

const BASE_FACTOR = 1.2;
const LIGHT_FACTOR = 1.375;
const MEDIUM_FACTOR = 1.55;
const HEAVY_FACTOR = 1.725;

type initCalorie = {
  bmr: number,
  adjustment ?: number
}

type updateCalorie = {
  bmr ?: number,
  adjustment ?: number
}

export type Calorie = {
  base: number,
  light: number,
  medium: number,
  heavy: number
}

export default class Calories {
  bmr: number;
  adjustment: number;
  value: Calorie;

  constructor(init: initCalorie) {
    this.adjustment = init.adjustment || 0;
    this.bmr = init.bmr || 0;

    this.value = {};
    this.value.base = (BASE_FACTOR * init.bmr) + this.adjustment;
    this.value.light = (LIGHT_FACTOR * init.bmr) + this.adjustment;
    this.value.medium = (MEDIUM_FACTOR * init.bmr) + this.adjustment;
    this.value.heavy = (HEAVY_FACTOR * init.bmr) + this.adjustment;
  }

  update(update: updateCalorie): Calories {
    return new Calories({
      bmr: update.bmr || this.bmr,
      adjustment: update.adjustment || this.adjustment,
    });
  }

  getValues(): any {
    const resp: Array<Object> = [];
    for (const [key, val] of Object.keys(this.value)) {
      const result: {} = {};
      result[key] = val;
      resp.push(result);
    }
    return resp;
  }
}
