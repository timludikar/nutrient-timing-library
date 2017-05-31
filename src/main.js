/** @flow */

import { Profile, BMR } from './models';

export const createUser = (): Profile => new Profile();
export const generateBMR = (profile: Profile): BMR => new BMR({ height: profile.height,
  weight: profile.weight,
  age: profile.age,
  sex: profile.sex,
});
