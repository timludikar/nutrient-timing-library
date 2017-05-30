/** @flow */

import Calories from '../src/calorie.model';

describe('Calorie model', () => {
  it('initializes', () => {
    const calories = new Calories();
    expect(calories).toBeDefined();
  });

  it('calculates base work load', () => {
    const calories = new Calories(1);
    expect(calories.base).toEqual(1.2);
  });

  it('calculates light work load', () => {
    const calories = new Calories(1);
    expect(calories.light).toEqual(1.375);
  });

  it('calculates medium work load', () => {
    const calories = new Calories(1);
    expect(calories.medium).toEqual(1.55);
  });

  it('calculates heavy work load', () => {
    const calories = new Calories(1);
    expect(calories.heavy).toEqual(1.725);
  });

  it('calculates calories defict', () => {
    const calories = new Calories(2000, -500);
    expect(calories.base).toEqual(1900);
    expect(calories.light).toEqual(2250);
    expect(calories.medium).toEqual(2600);
    expect(calories.heavy).toEqual(2950);
  });

  it('calculates calories surplus', () => {
    const calories = new Calories(2000, 500);
    expect(calories.base).toEqual(2900);
    expect(calories.light).toEqual(3250);
    expect(calories.medium).toEqual(3600);
    expect(calories.heavy).toEqual(3950);
  });
});
