/** @flow */
/* eslint no-mixed-operators: ["error", {"groups": [["&", "|", "^", "~", "<<", ">>", ">>>"], ["&&", "||"]]}] */

import { Calories, Protein, Carbohydrate } from '../models';

const PROTEIN_RANGE = [0.8, 1];
const CARB_RANGE = [0.5, 1, 1.5, 2];

export const calculateProtein = (weight: number): number[] => PROTEIN_RANGE.map((val) => weight * val);

export const calculateCarbohydrate = (weight: number) =>
  ['base', 'light', 'medium', 'heavy'].map((key, i) => [key, (weight * CARB_RANGE[i])]);

export const calculateFat = (carbs: Carbohydrate, protein: Protein, calories: Calories) =>
  ['base', 'light', 'medium', 'heavy'].map((key) =>
    [key, (calories.get(key) - (carbs.get(key) + protein.low) * 4) / 9],
  );

export default {
  calculateProtein,
  calculateCarbohydrate,
  calculateFat,
};
