'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateFat = exports.calculateCarbohydrate = exports.calculateProtein = undefined;

var _models = require('../models');

const PROTEIN_RANGE = [0.8, 1];
/* eslint no-mixed-operators: ["error", {"groups": [["&", "|", "^", "~", "<<", ">>", ">>>"], ["&&", "||"]]}] */

const CARB_RANGE = [0.5, 1, 1.5, 2];

/**
 * Macro Object
 * @typedef {Object} Macros 
 * @property {Carbohydrate} carbohydrate Indicates a carbohydrate in grams.
 * @property {Protein} protein Indicates a protein in grams.
 * @property {Calories} calories Indicates calories based on training volume.
 */


/**
 * Calculate protein macros using weight.
 * @function calculateProtein
 * @param {number} weight 
 * @returns {number[]} 
 */
const calculateProtein = exports.calculateProtein = weight => PROTEIN_RANGE.map(val => weight * val);

/**
 * Calculate carbohydrate macros using weight.
 * @function calculateCarbohydrate
 * @param {number} weight 
 * @return Array<any>
 */
const calculateCarbohydrate = exports.calculateCarbohydrate = weight => ['base', 'light', 'medium', 'heavy'].map((key, i) => [key, weight * CARB_RANGE[i]]);

/**
 * Calculate fat macros using proteins, carbohydrates, and calories.
 * @function calculateFat
 * @param {Macros} macros
 * @return Array<any> 
 */
const calculateFat = exports.calculateFat = macros => ['base', 'light', 'medium', 'heavy'].map(key => [key, (macros.calories.get(key) - (macros.carbohydrate.get(key) + macros.protein.low) * 4) / 9]);

exports.default = {
  calculateProtein,
  calculateCarbohydrate,
  calculateFat
};