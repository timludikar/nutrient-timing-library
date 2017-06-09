/** @flow */

import BMR from '../../src/services/bmr';

const PERSONAL_DETAILS = { height: 187.96, weight: 97.72, age: 32, sex: 'm' };
const PERSONAL_DETAILS_FEMALE = { height: 187.96, weight: 97.72, age: 32, sex: 'f' };

describe('BMR service', () => {
  it('can calculate BMR for males', () => {
    expect(BMR(PERSONAL_DETAILS)).toBeCloseTo(1997, 0);
  });

  it('can calculate BMR for females', () => {
    expect(BMR(PERSONAL_DETAILS_FEMALE)).toBeCloseTo(1982, 0);
  });
});
