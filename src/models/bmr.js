/** @flow */
/* eslint no-mixed-operators: ["error", {"groups": [["&", "|", "^", "~", "<<", ">>", ">>>"], ["&&", "||"]]}] */

type BMRInit = {
  height: number,
  weight: number,
  age: number,
  sex: string
};

type BMRUpdate = {
  height ?: number,
  weight ?: number,
  age ?: number,
  sex ?: string
}

interface IBmr {
    height: number;
    weight: number;
    age: number;
    sex: string;
    value(): number;
}

export default class BMR implements IBmr {
  height: number;
  weight: number;
  age: number;
  sex: string;

  constructor(init: BMRInit) {
    this.height = init.height;
    this.weight = init.weight;
    this.age = init.age;
    this.sex = init.sex;
  }

  update(update: BMRUpdate): BMR {
    return new BMR({
      height: update.height || this.height,
      weight: update.weight || this.weight,
      age: update.age || this.age,
      sex: update.sex || this.sex,
    });
  }

  get value(): any {
    let result = 0;
    if (this.sex === 'm') {
      result = ((this.weight * 10) + (this.height * 6.25) - (this.age * 5) + 5);
    } else if (this.sex === 'f') {
      result = ((this.weight * 10) + (this.height * 6.25) - (this.age * 5) - 10);
    }
    return result;
  }
}
