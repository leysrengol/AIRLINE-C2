import { MealType } from "../enums/MealType";

export class Meal {
    constructor(private mealType: MealType) {}

    public getName(): MealType {
        return this.mealType;
    }

    getMealType(): MealType {
        return this.mealType;
    }

    public static getNameCount(meals: Meal[], targetMealType: MealType): number {
        let count = 0;
        for (const meal of meals) {
            if (meal.getName() === targetMealType) {
                count++;
            }
        }
        return count;
    }
    
}

