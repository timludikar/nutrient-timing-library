/** @flow */
/* eslint no-restricted-syntax: [2, "class"] */

const BASE_FACTOR = 1.2;
const LIGHT_FACTOR = 1.375;
const MEDIUM_FACTOR = 1.55;
const HEAVY_FACTOR = 1.725;

type calorie = number;

export class Volume {
  base: calorie;
  light: calorie;
  medium: calorie;
  heavy: calorie;

  constructor(base ?: calorie, light ?: calorie, medium ?: calorie, heavy ?: calorie) {
    this.base = base || 0;
    this.light = light || 0;
    this.medium = medium || 0;
    this.heavy = heavy || 0;
  }

  static fromObject(obj): * {
    return new this(obj.base, obj.light, obj.medium, obj.heavy);
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

  update(base ?: calorie, light ?: calorie, medium ?: calorie, heavy ?: calorie): Calories {
    const newBase = base || this.base;
    const newLight = light || this.light;
    const newMedium = medium || this.medium;
    const newHeavy = heavy || this.heavy;
    return new Calories(newBase, newLight, newMedium, newHeavy);
  }
}


export default Calories;
