/** @flow */
/* eslint no-mixed-operators: ["error", {"groups": [["&", "|", "^", "~", "<<", ">>", ">>>"], ["&&", "||"]]}] */

import { Calories, Protein, Carbohydrate } from '../models';

const PROTEIN_RANGE = [0.8, 1];
const CARB_RANGE = [0.5, 1, 1.5, 2];

type Macros = {
  carbohydrate: Carbohydrate,
  protein: Protein,
  calories: Calories,
}

export const calculateProtein = (weight: number): number[] => PROTEIN_RANGE.map((val) => weight * val);

export const calculateCarbohydrate = (weight: number) =>
  ['base', 'light', 'medium', 'heavy'].map((key, i) => [key, (weight * CARB_RANGE[i])]);

export const calculateFat = (macros: Macros) =>
  ['base', 'light', 'medium', 'heavy'].map((key) =>
    [key, (macros.calories.get(key) - (macros.carbohydrate.get(key) + macros.protein.low) * 4) / 9],
  );

export default {
  calculateProtein,
  calculateCarbohydrate,
  calculateFat,
};
