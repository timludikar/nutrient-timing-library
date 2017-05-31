/** @flow */

import { createUser, generateBMR } from '../src/main';
import { Profile } from '../src/models';

describe('library interface', () => {
  it('can create a user', () => {
    const user = createUser();
    expect(user).toBeInstanceOf(Profile);
  });

  it('can generate BMR', () => {
    const user = createUser();
    user.height = 187.96;
    user.weight = 97.72;
    user.age = 32;
    user.setMale();

    const bmr = generateBMR(user);
    expect(bmr.value).toBeCloseTo(1997, 0);
  });
});
