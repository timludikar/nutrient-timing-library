/** @flow */
/* eslint no-restricted-syntax: [2, "class"] */

const BASE_FACTOR = 1.2;
const LIGHT_FACTOR = 1.375;
const MEDIUM_FACTOR = 1.55;
const HEAVY_FACTOR = 1.725;

type calorie = number;

type initVolume = {
  base ?: calorie,
  light ?: calorie,
  medium ?: calorie,
  heavy ?: calorie
}

export class Volume {
  base: calorie;
  light: calorie;
  medium: calorie;
  heavy: calorie;

  constructor(init ?: initVolume) {
    const input = init !== undefined ? init : {};
    this.base = input.base || 0;
    this.light = input.light || 0;
    this.medium = input.medium || 0;
    this.heavy = input.heavy || 0;
  }

  static fromObject(obj): * {
    return new this(obj);
  }

  static fromArray(input: Array<any>): * {
    const result = {};
    input.forEach((i) => {
      result[i[0]] = i[1];
    });
    return this.fromObject(result);
  }

  get(value: string): number {
    switch (value) {
      case 'base':
        return this.base;
      case 'light':
        return this.light;
      case 'medium':
        return this.medium;
      case 'heavy':
        return this.heavy;
      default:
        return 0;
    }
  }

  toArray(): Array<any> {
    return Object.keys(this).map((key) => [key, this.get(key)]);
  }

  keys(): Array<string> {
    return Object.keys(this);
  }

  values(): Array<any> {
    return Object.values(this);
  }

  entries(): Array<any> {
    return Object.entries(this);
  }
}

class Calories extends Volume {
  calculate(bmr: number): Calories {
    this.base = (BASE_FACTOR * bmr);
    this.light = (LIGHT_FACTOR * bmr);
    this.medium = (MEDIUM_FACTOR * bmr);
    this.heavy = (HEAVY_FACTOR * bmr);
    return this;
  }

  adjustment(factor: number): Calories {
    this.base = this.base + factor;
    this.light = this.light + factor;
    this.medium = this.medium + factor;
    this.heavy = this.heavy + factor;
    return this;
  }

  update(init ?: initVolume): Calories {
    const input = init !== undefined ? init : {};
    const newBase = input.base || this.base;
    const newLight = input.light || this.light;
    const newMedium = input.medium || this.medium;
    const newHeavy = input.heavy || this.heavy;
    return new Calories({ base: newBase, light: newLight, medium: newMedium, heavy: newHeavy });
  }
}


export default Calories;
