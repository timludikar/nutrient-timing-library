/** @flow */

import type { Calorie } from './calorie.model';
import type { BMR } from './bmr.model';

const PROTEIN_RANGE = [0.8, 1];
const CARB_RANGE = [0.5, 1, 1.5, 2];

interface INutrient {
    protein: number[];
    carbohydrate: Calorie;
    fat: Calorie;
}

export class Nutrient implements INutrient {
    protein: number[];
    carbohydrate: Calorie;
    fat: Calorie;

    constructor(bmr: BMR, calories: Calorie){
        this.protein = this.calculateProtein(bmr.weight * 2.2);
        this.carbohydrate = this.calculateCarbs(bmr.weight * 2.2);
        this.fat = this.calculateFats(calories);
    }

    calculateProtein(weight: number): number[] {
        return PROTEIN_RANGE.map(val => weight * val);
    }

    calculateCarbs(weight: number): Calorie {
        let result: Calorie = {
            base: weight * CARB_RANGE[0],
            light: weight * CARB_RANGE[1],
            medium: weight * CARB_RANGE[2],
            heavy: weight * CARB_RANGE[3]
        };
        return result;
    }

    calculateFats(calories: Calorie): Calorie {
        let result = ['base', 'light', 'medium', 'heavy'].map(load => 
            (calories[load] - (this.carbohydrate[load] + this.protein[0]) * 4) / 9
        );
        return {
            base: result[0],
            light: result[1],
            medium: result[2],
            heavy: result[3]
        }
    }
}