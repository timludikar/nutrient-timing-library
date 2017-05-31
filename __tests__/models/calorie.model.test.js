/** @flow */

import { Calories } from '../../src/models';

describe('Calorie model', () => {
  it('initializes', () => {
    const calories = new Calories({ bmr: 0 });
    expect(calories).toBeDefined();
  });

  it('calculates base work load', () => {
    const calories = new Calories({ bmr: 1 });
    expect(calories.value.base).toEqual(1.2);
    expect(calories.value.light).toEqual(1.375);
    expect(calories.value.medium).toEqual(1.55);
    expect(calories.value.heavy).toEqual(1.725);
  });

  it('calculates calories defict', () => {
    const calories = new Calories({ bmr: 2000, adjustment: -500 });
    expect(calories.value.base).toEqual(1900);
    expect(calories.value.light).toEqual(2250);
    expect(calories.value.medium).toEqual(2600);
    expect(calories.value.heavy).toEqual(2950);
  });

  it('calculates calories surplus', () => {
    const calories = new Calories({ bmr: 2000, adjustment: 500 });
    expect(calories.value.base).toEqual(2900);
    expect(calories.value.light).toEqual(3250);
    expect(calories.value.medium).toEqual(3600);
    expect(calories.value.heavy).toEqual(3950);
  });

  it('can update', () => {
    const calorie = new Calories({ bmr: 2000, adjustment: 2 });
    const calorie2 = calorie.update({ bmr: 1 });
    expect(calorie2.value.base).toBeCloseTo(3.2, 1);
    expect(calorie2.value.light).toBeCloseTo(3.375);
    expect(calorie2.value.medium).toBeCloseTo(3.55);
    expect(calorie2.value.heavy).toBeCloseTo(3.725);
  });

  it('can iterate over values', () => {
    const calorie = new Calories({ bmr: 2000 });
    expect([...calorie.getValues()].length).toEqual(4);
  });
});
