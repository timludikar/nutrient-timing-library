/** @flow */

import { Calories } from '../../src/models';

describe('Calorie model', () => {
  it('initializes', () => {
    const calories = new Calories();
    expect(calories).toBeDefined();
  });

  it('calculates base work load', () => {
    const calories = new Calories();
    expect(calories.calculate(1).base).toEqual(1.2);
    expect(calories.calculate(1).light).toEqual(1.375);
    expect(calories.calculate(1).medium).toEqual(1.55);
    expect(calories.calculate(1).heavy).toEqual(1.725);
  });

  it('calculates calories defict', () => {
    const calories = new Calories();
    expect(calories.calculate(2000).adjustment(-500).base).toEqual(1900);
    expect(calories.calculate(2000).adjustment(-500).light).toEqual(2250);
    expect(calories.calculate(2000).adjustment(-500).medium).toEqual(2600);
    expect(calories.calculate(2000).adjustment(-500).heavy).toEqual(2950);
  });

  it('calculates calories surplus', () => {
    const calories = new Calories();
    expect(calories.calculate(2000).adjustment(500).base).toEqual(2900);
    expect(calories.calculate(2000).adjustment(500).light).toEqual(3250);
    expect(calories.calculate(2000).adjustment(500).medium).toEqual(3600);
    expect(calories.calculate(2000).adjustment(500).heavy).toEqual(3950);
  });

  it('can update', () => {
    const calorie = new Calories().calculate(2000).adjustment(2);
    const calorie2 = calorie.update().adjustment(-2);
    expect(calorie2.base).toBeCloseTo(2400, 1);
    expect(calorie2.light).toBeCloseTo(2750, 1);
    expect(calorie2.medium).toBeCloseTo(3100);
    expect(calorie2.heavy).toBeCloseTo(3450);
  });

  it('can provide all values', () => {
    const calorie = new Calories();
    expect([...calorie.calculate(2000).values()].length).toEqual(4);
  });

  it('can provide all keys', () => {
    const calorie = new Calories();
    expect([...calorie.keys()].length).toEqual(4);
  });
});
