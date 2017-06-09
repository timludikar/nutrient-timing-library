'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

/* eslint no-restricted-syntax: [2, "class"] */

const BASE_FACTOR = 1.2;
const LIGHT_FACTOR = 1.375;
const MEDIUM_FACTOR = 1.55;
const HEAVY_FACTOR = 1.725;

class Volume {

  constructor(base, light, medium, heavy) {
    this.base = base || 0;
    this.light = light || 0;
    this.medium = medium || 0;
    this.heavy = heavy || 0;
  }

  static fromObject(obj) {
    return new this(obj.base, obj.light, obj.medium, obj.heavy);
  }

  static fromArray(input) {
    const result = {};
    input.forEach(i => {
      result[i[0]] = i[1];
    });
    return this.fromObject(result);
  }

  get(value) {
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

  toArray() {
    return Object.keys(this).map(key => [key, this.get(key)]);
  }

  keys() {
    return Object.keys(this);
  }

  values() {
    return Object.values(this);
  }

  entries() {
    return Object.entries(this);
  }
}

exports.Volume = Volume;
class Calories extends Volume {
  calculate(bmr) {
    this.base = BASE_FACTOR * bmr;
    this.light = LIGHT_FACTOR * bmr;
    this.medium = MEDIUM_FACTOR * bmr;
    this.heavy = HEAVY_FACTOR * bmr;
    return this;
  }

  adjustment(factor) {
    this.base = this.base + factor;
    this.light = this.light + factor;
    this.medium = this.medium + factor;
    this.heavy = this.heavy + factor;
    return this;
  }

  update(base, light, medium, heavy) {
    const newBase = base || this.base;
    const newLight = light || this.light;
    const newMedium = medium || this.medium;
    const newHeavy = heavy || this.heavy;
    return new Calories(newBase, newLight, newMedium, newHeavy);
  }
}

exports.default = Calories;