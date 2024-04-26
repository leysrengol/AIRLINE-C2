import { Employee} from "./Employee";

export class AirlineManager extends Employee{
    constructor(salary:string,firstName: string, lastName: string,contactInfo:string){
        super(salary,firstName, lastName,contactInfo)
    }
}