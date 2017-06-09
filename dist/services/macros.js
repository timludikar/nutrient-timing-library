'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateFat = exports.calculateCarbohydrate = exports.calculateProtein = undefined;

var _models = require('../models');

const PROTEIN_RANGE = [0.8, 1];
/* eslint no-mixed-operators: ["error", {"groups": [["&", "|", "^", "~", "<<", ">>", ">>>"], ["&&", "||"]]}] */

const CARB_RANGE = [0.5, 1, 1.5, 2];

const calculateProtein = exports.calculateProtein = weight => PROTEIN_RANGE.map(val => weight * val);

const calculateCarbohydrate = exports.calculateCarbohydrate = weight => ['base', 'light', 'medium', 'heavy'].map((key, i) => [key, weight * CARB_RANGE[i]]);

const calculateFat = exports.calculateFat = (carbs, protein, calories) => ['base', 'light', 'medium', 'heavy'].map(key => [key, (calories.get(key) - (carbs.get(key) + protein.low) * 4) / 9]);

exports.default = {
  calculateProtein,
  calculateCarbohydrate,
  calculateFat
};