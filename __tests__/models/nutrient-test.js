/** @flow */

import { Nutrient, Carbohydrate, Fat, Protein } from '../../src/models';

const CARB = new Carbohydrate({ base: 0, light: 0, medium: 0, heavy: 0 });
const PROTEIN = new Protein(0, 100);
const FAT = new Fat({ base: 0, light: 0, medium: 0, heavy: 0 });

describe('Nutrient model', () => {
  it('initializes', () => {
    const nutrient = new Nutrient(CARB, PROTEIN, FAT);
    expect(nutrient).toBeDefined();
  });
});
