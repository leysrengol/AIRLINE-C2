import { Flight } from '../models/Flight';
import { Gender } from '../enums/Enum';
import { Employee } from "./Employee";
import { Meal } from '../services/Meal';
import { MealTime } from '../enums/MealTime';

export class Chef extends Employee {
   constructor(firstName: string, lastName: string, contactInfo: string, gender: Gender, salary: string) {
    super(firstName, lastName, contactInfo, gender, salary);
   }


 
}
