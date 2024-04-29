import { MealTime } from "../enums/MealTime";
import { MealType } from "../enums/MealType";

export class Meal {
    private mealTime: MealTime;
    private mealType:MealType
    constructor( mealTime:MealTime, mealType:MealType){
        this.mealType = mealType;
        this.mealTime = mealTime;
    }   
    getName():string { 
        return this.mealType;
    }
    getMealTime(): MealTime {
        return this.mealTime;
    }
}