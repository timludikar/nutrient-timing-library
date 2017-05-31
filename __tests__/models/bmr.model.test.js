/** @flow */

import { BMR } from '../../src/models';

const PERSONAL_DETAILS = { height: 187.96, weight: 97.72, age: 32, sex: 'm' };
const PERSONAL_DETAILS_FEMALE = { height: 187.96, weight: 97.72, age: 32, sex: 'f' };

describe('BMR model', () => {
  it('initializes', () => {
    const bmr = new BMR(PERSONAL_DETAILS);
    expect(bmr).toBeDefined();
  });

  it('initializes', () => {
    const bmr = new BMR(PERSONAL_DETAILS);
    expect(bmr.height).toBeCloseTo(187.96, 1);
    expect(bmr.weight).toBeCloseTo(97.72, 1);
    expect(bmr.age).toEqual(32);
    expect(bmr.sex).toEqual('m');
  });

  it('can calculate BMR for males', () => {
    const bmr = new BMR(PERSONAL_DETAILS);
    expect(bmr.value).toBeCloseTo(1997, 0);
  });

  it('can calculate BMR for females', () => {
    const bmr = new BMR(PERSONAL_DETAILS_FEMALE);
    expect(bmr.value).toBeCloseTo(1982, 0);
  });

  it('can update', () => {
    const bmr = new BMR(PERSONAL_DETAILS);
    const bmr2 = bmr.update({ sex: 'f' });
    expect(bmr2.value).toBeCloseTo(1982, 0);
  });
});
