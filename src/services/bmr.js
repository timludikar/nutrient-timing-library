/** @flow */
/* eslint no-mixed-operators: ["error", {"groups": [["&", "|", "^", "~", "<<", ">>", ">>>"], ["&&", "||"]]}] */

type BMRInit = {
  height: number,
  weight: number,
  age: number,
  sex: string
};

export default (init: BMRInit) : number => {
  let result = 0;
  if (init.sex === 'm') {
    result = ((init.weight * 10) + (init.height * 6.25) - (init.age * 5) + 5);
  } else if (init.sex === 'f') {
    result = ((init.weight * 10) + (init.height * 6.25) - (init.age * 5) - 10);
  }
  return result;
};
