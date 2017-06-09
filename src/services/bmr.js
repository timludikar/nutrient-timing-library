/** @flow */
/* eslint no-mixed-operators: ["error", {"groups": [["&", "|", "^", "~", "<<", ">>", ">>>"], ["&&", "||"]]}] */

type BMRInit = {
  height: number,
  weight: number,
  age: number,
  sex: string
};

const calculate = (init: BMRInit): number => {
  switch (init.sex) {
    case 'm':
      return ((init.weight * 10) + (init.height * 6.25) - (init.age * 5) + 5);
    case 'f':
      return ((init.weight * 10) + (init.height * 6.25) - (init.age * 5) - 10);
    default:
      return 0;
  }
};

export default {
  calculate,
};
