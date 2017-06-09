/** @flow */

import bmr from '../../src/services/bmr';

const PERSONAL_DETAILS = { height: 187.96, weight: 97.72, age: 32, sex: 'm' };
const PERSONAL_DETAILS_FEMALE = { height: 187.96, weight: 97.72, age: 32, sex: 'f' };
const PERSONAL_DETAILS_NONE = { height: 187.96, weight: 97.72, age: 32, sex: '' };

describe('BMR service', () => {
  it('can calculate BMR for males', () => {
    expect(bmr.calculate(PERSONAL_DETAILS)).toBeCloseTo(1997, 0);
  });

  it('can calculate BMR for females', () => {
    expect(bmr.calculate(PERSONAL_DETAILS_FEMALE)).toBeCloseTo(1982, 0);
  });

  it('cannot calculate BMR for no gender', () => {
    expect(bmr.calculate(PERSONAL_DETAILS_NONE)).toEqual(0);
  });
});
