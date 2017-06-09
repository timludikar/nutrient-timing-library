'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


const calculate = init => {
  switch (init.sex) {
    case 'm':
      return init.weight * 10 + init.height * 6.25 - init.age * 5 + 5;
    case 'f':
      return init.weight * 10 + init.height * 6.25 - init.age * 5 - 10;
    default:
      return 0;
  }
};
/* eslint no-mixed-operators: ["error", {"groups": [["&", "|", "^", "~", "<<", ">>", ">>>"], ["&&", "||"]]}] */

exports.default = {
  calculate
};