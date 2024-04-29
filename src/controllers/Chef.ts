import { Flight } from '../models/Flight';
import { Gender } from '../enums/Enum';
import { Employee } from "./Employee";
import { Meal } from '../services/Meal';
import { MealTime } from '../enums/MealTime';
import { MealType } from '../enums/MealType';

export class Chef extends Employee {
    private meals:Meal[] = [];
   constructor(firstName: string, lastName: string, contactInfo: string, gender: Gender, salary: string) {
    super(firstName, lastName, contactInfo, gender, salary);
   }

   getAllMeals(mealTime: MealTime): void {
    
        
   }

}
