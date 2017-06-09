'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fat = exports.Carbohydrate = exports.Protein = undefined;

var _calorie = require('./calorie');

class Nutrient {

  constructor(carbohydrate, protein, fat) {
    this.protein = protein;
    this.carbohydrate = carbohydrate;
    this.fat = fat;
  }
}

exports.default = Nutrient;
class Protein {

  constructor(low, high) {
    this.low = low;
    this.high = high;
  }

  static fromArray(input) {
    return new this(input[0], input[1]);
  }
}

exports.Protein = Protein;
class Carbohydrate extends _calorie.Volume {}

exports.Carbohydrate = Carbohydrate;
class Fat extends _calorie.Volume {}
exports.Fat = Fat;