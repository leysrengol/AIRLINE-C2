import { MealTime } from "../enums/MealTime";

export class Meal {
    private mealTime: MealTime;
    constructor(private name:string, mealTime:MealTime){
        this.name = name;
        this.mealTime = mealTime;
    }   
    getName():string { 
        return this.name;
    }
    getMealTime(): MealTime {
        return this.mealTime;
    }
}