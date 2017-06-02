/** @flow */

import { Nutrient, BMR, Calories } from '../../src/models';

const PERSONAL_DETAILS = { height: 187.96, weight: 97.72, age: 32, sex: 'm' };
const BMR_MALE = new BMR(PERSONAL_DETAILS);

const CALORIES = new Calories({ bmr: 1997, adjustment: -500 });

describe('Nutrient model', () => {
  it('initializes', () => {
    const macros = new Nutrient({ bmr: BMR_MALE, calories: CALORIES });
    expect(macros).toBeDefined();
  });

  it('calculate protein range', () => {
    const macros = new Nutrient({ bmr: BMR_MALE, calories: CALORIES });
    expect(macros.protein[0]).toBeCloseTo(172, 1);
    expect(macros.protein[1]).toBeCloseTo(215, 1);
  });

  it('calculate carbohydrate load', () => {
    const macros = new Nutrient({ bmr: BMR_MALE, calories: CALORIES });
    expect(macros.carbohydrate.base).toBeCloseTo(107.5, 0);
    expect(macros.carbohydrate.light).toBeCloseTo(215, 0);
    expect(macros.carbohydrate.medium).toBeCloseTo(322.5, 0);
    expect(macros.carbohydrate.heavy).toBeCloseTo(430, 0);
  });

  it('calculate fat load', () => {
    const macros = new Nutrient({ bmr: BMR_MALE, calories: CALORIES });
    expect(macros.fat.base).toBeCloseTo(86.4, 0);
    expect(macros.fat.light).toBeCloseTo(77.5, 0);
    expect(macros.fat.medium).toBeCloseTo(68.5, 0);
    expect(macros.fat.heavy).toBeCloseTo(59.6, 0);
  });
});
