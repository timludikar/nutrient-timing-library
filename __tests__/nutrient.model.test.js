/** @flow */

import { Nutrient } from '../src/nutrient.model';
import { BMR } from '../src/bmr.model';
import { Calories } from '../src/calorie.model';

const bmr = new BMR(74, 215, 32, 'm');
const calories = new Calories(1997, -500)

describe('Nutrient model', () => {
    it('initializes', () => {
        var macros = new Nutrient(bmr, calories);
        expect(macros).toBeDefined();
    });

    it('calculate protein range', () => {
        var macros = new Nutrient(bmr, calories);
        expect(macros.protein).toEqual([172, 215]);
    });

    it('calculate carbohydrate load', () => {
        var macros = new Nutrient(bmr, calories);
        expect(macros.carbohydrate.base).toBeCloseTo(107.5, 0);
        expect(macros.carbohydrate.light).toBeCloseTo(215, 0);
        expect(macros.carbohydrate.medium).toBeCloseTo(322.5, 0);
        expect(macros.carbohydrate.heavy).toBeCloseTo(430, 0);
    });

    it('calculate fat load', () => {
        var macros = new Nutrient(bmr, calories);
        expect(macros.fat.base).toBeCloseTo(86.4, 0);
        expect(macros.fat.light).toBeCloseTo(77.5, 0);
        expect(macros.fat.medium).toBeCloseTo(68.5, 0);
        expect(macros.fat.heavy).toBeCloseTo(59.6, 0);
    });    
});