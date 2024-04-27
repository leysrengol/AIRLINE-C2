import { Gender } from "../enums/Enum";
import { Employee } from "./Employee";

export class AirportController extends Employee {
    constructor(firstName: string, lastName: string, contecctInFo: string, gender: Gender, salary: string) {
        super(firstName, lastName, contecctInFo, gender, salary);
    }
}