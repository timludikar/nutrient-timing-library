/** @flow */

import { Nutrient, Carbohydrate, Fat, Protein } from '../../src/models';

const CARB = new Carbohydrate(0, 0, 0, 0);
const PROTEIN = new Protein(0, 100);
const FAT = new Fat(0, 0, 0, 0);

describe('Nutrient model', () => {
  it('initializes', () => {
    const nutrient = new Nutrient(CARB, PROTEIN, FAT);
    expect(nutrient).toBeDefined();
  });
});
