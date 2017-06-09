/** @flow */
/* eslint no-duplicate-imports: ["error", { "includeExports": true }]*/

import {
    Profile,
    Calories,
    Nutrient,
    Protein,
    Carbohydrate,
    Fat,
} from './models';

import {
    bmr,
    macros,
} from './services';

export { Profile };

export const Models = {
  Calories,
  Nutrient,
  Protein,
  Carbohydrate,
  Fat,
};

export const Services = {
  bmr,
  macros,
};

export default {
  Profile,
  Models,
  Services,
};
