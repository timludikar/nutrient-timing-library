/** @flow */

import { Profile } from './models';

export const createUser = (): Profile => new Profile();

export default {
  createUser,
};
