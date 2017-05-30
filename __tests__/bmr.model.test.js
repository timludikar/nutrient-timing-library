/** @flow */

import { BMR } from '../src/bmr.model';

describe('BMR model', () => {
    it('initializes', () => {
        var bmr = new BMR();
        expect(bmr).toBeDefined();
    });

    it('can set height', () => {
        var bmr = new BMR(74);
        expect(bmr.height).toBe(187.96);
    });

    it('can set weight', () => {
        var bmr = new BMR(74, 215);
        expect(bmr.weight).toBeCloseTo(97.72, 1);
    });

    it('can set age', () => {
        var bmr = new BMR(74, 215, 32);
        expect(bmr.age).toEqual(32);
    });

    it('can set sex', () => {
        var bmr = new BMR(74, 215, 32, "m");
        expect(bmr.sex).toEqual("m");
    });

    it('can calculate BMR for males', () => {
        var bmr = new BMR(74, 215, 32, "m");
        expect(bmr.calculate()).toBeCloseTo(1997, 0);
    });

    it('can calculate BMR for females', () => {
        var bmr = new BMR(74, 215, 32, "f");
        expect(bmr.calculate()).toBeCloseTo(1982, 0);
    });

    it('will throw calculation error BMR', () => {
        var bmr = new BMR(74, 215, 32);
        expect(bmr.calculate()).toEqual(new Error("Please select 'm' or 'f'"));
    });
});