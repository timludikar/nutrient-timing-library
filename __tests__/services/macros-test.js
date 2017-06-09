/** @flow */

import { calculateProtein, calculateCarbohydrate, calculateFat } from '../../src/services/macros';
import { Calories, Carbohydrate, Fat, Protein } from '../../src/models';

const PERSONAL_DETAILS = { height: 187.96, weight: 97.72, age: 32, sex: 'm' };
const CALORIES = new Calories().calculate(1997);

describe('Macro service', () => {
  it('can calculate protein range', () => {
    const protein = Protein.fromArray(calculateProtein(PERSONAL_DETAILS.weight * 2.2));

    expect(protein.low).toBeCloseTo(172, 1);
    expect(protein.high).toBeCloseTo(215, 1);
  });

  it('can calculate carbohydrate range', () => {
    const carbs = Carbohydrate.fromArray(calculateCarbohydrate(PERSONAL_DETAILS.weight * 2.2));

    expect(carbs.base).toBeCloseTo(107.5, 0);
    expect(carbs.light).toBeCloseTo(215, 0);
    expect(carbs.medium).toBeCloseTo(322.5, 0);
    expect(carbs.heavy).toBeCloseTo(430, 0);
  });

  it('can calculate fat range', () => {
    const carbs = Carbohydrate.fromArray(calculateCarbohydrate(PERSONAL_DETAILS.weight * 2.2));
    const protein = Protein.fromArray(calculateProtein(PERSONAL_DETAILS.weight * 2.2));
    const fat = Fat.fromArray(calculateFat(carbs, protein, CALORIES));

    expect(fat.base).toBeCloseTo(142.05, 0);
    expect(fat.light).toBeCloseTo(133.10, 0);
    expect(fat.medium).toBeCloseTo(124.15, 0);
    expect(fat.heavy).toBeCloseTo(115.21, 0);
  });
});
