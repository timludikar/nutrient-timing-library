/** @flow */

interface IBmr {
    height: number;
    weight: number;
    age: number;
    sex: string | null;
    calculate(): number | Error;
}

export class BMR implements IBmr{
    height: number;
    weight: number;
    age: number;
    sex: string | null;

    constructor(height: number = 0, weight: number = 0, age: number = 0, sex: string | null = null){
        this.height = height * 2.54;
        this.weight = weight / 2.2;
        this.age = age;
        this.sex = sex;
    }

    calculate(): number | Error {
        if(this.sex === "m"){
            return ((this.weight * 10) + (this.height * 6.25) - (this.age * 5) + 5);
        } else if(this.sex === "f"){
            return ((this.weight * 10) + (this.height * 6.25) - (this.age * 5) - 10);
        } else {
            return new Error("Please select 'm' or 'f'");
        }
    }
}