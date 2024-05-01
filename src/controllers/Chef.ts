import { Flight } from '../models/Flight';
import { Gender } from '../enums/Enum';
import { Employee } from "./Employee";
import { Meal } from '../services/Meal';
import { MealType } from '../enums/MealType';
import { Passanger } from '../models/Passanger';

export class Chef extends Employee {
    private meals: Meal[] = [];
    mealCountForFlight: any;
    constructor(firstName: string, lastName: string, contactInfo: string, gender: Gender, salary: string) {
        super(firstName, lastName, contactInfo, gender, salary);
    }

    addMealType(meal: Meal) {
        this.meals.push(meal);
    }
    
    getMealCountForFlight(flight: Flight): number {
        let mealCount = 0;

        for (const passenger of flight.getPassengers()) {
            mealCount += this.getMealCountForPassenger(passenger);
        }

        return mealCount;
    }

    private getMealCountForPassenger(passenger: Passanger): number {
        return passenger.getMeal() ? 1 : 0;
    }

    // getNameMealCountForFlight(flight: Flight): number {
    //     let nameMealCount = 0;
    //     for (const passenger of flight.getPassengers()) {
    //         nameMealCount += this.getNameMealCountForPassenger(passenger);
    //     }
    //     return nameMealCount;
    // }

    // private getNameMealCountForPassenger(passenger: Passanger):number {
    //     return passenger.getName() ? 1 : 0;
    // }

    


   
    


}
