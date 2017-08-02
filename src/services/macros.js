/** @flow */
/* eslint no-mixed-operators: ["error", {"groups": [["&", "|", "^", "~", "<<", ">>", ">>>"], ["&&", "||"]]}] */

import { Calories, Protein, Carbohydrate } from '../models';

const PROTEIN_RANGE = [0.8, 1];
const CARB_RANGE = [0.5, 1, 1.5, 2];

/**
 * Macro Object
 * @typedef {Object} Macros
 * @property {Carbohydrate} carbohydrate Indicates a carbohydrate in grams.
 * @property {Protein} protein Indicates a protein in grams.
 * @property {Calories} calories Indicates calories based on training volume.
 */
type Macros = {
  carbohydrate: Carbohydrate,
  protein: Protein,
  calories: Calories,
}

/**
 * Calculate protein macros using weight.
 * @function calculateProtein
 * @param {number} weight
 * @returns {number[]}
 */
export const calculateProtein = (weight: number): number[] => PROTEIN_RANGE.map((val) => weight * val);

/**
 * Calculate carbohydrate macros using weight.
 * @function calculateCarbohydrate
 * @param {number} weight
 * @return Array<any>
 */
export const calculateCarbohydrate = (weight: number): Array<any> =>
  ['base', 'light', 'medium', 'heavy'].map((key, i) => [key, (weight * CARB_RANGE[i])]);

/**
 * Calculate fat macros using proteins, carbohydrates, and calories.
 * @function calculateFat
 * @param {Macros} macros
 * @return Array<any>
 */
export const calculateFat = (macros: Macros): Array<any> =>
  ['base', 'light', 'medium', 'heavy'].map((key) =>
    [key, (macros.calories.get(key) - (macros.carbohydrate.get(key) + macros.protein.low) * 4) / 9],
  );

export default {
  calculateProtein,
  calculateCarbohydrate,
  calculateFat,
};
