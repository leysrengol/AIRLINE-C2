import { Employee} from "./Employee";
import { Gender } from "./Enum";
export class AirlineManager extends Employee{
    private employees: Employee[];
    constructor(firstName: string, lastName: string, contecctInFo: string,gender: Gender,salary: string){
        super(firstName,lastName, contecctInFo,gender,salary);
        this.employees=[];
    }

    addEmployee(employee: Employee) {
        this.employees.push(employee);
    }

    getTotalSalaryPaid(){
        let totalSalary = 0;
        for (let employee of this.employees){
            totalSalary += parseInt(employee.getSalary());
        }
        return totalSalary;
    }



}