import { Gender } from "./Enum";
import { Person } from "./Person";


export class Employee extends Person{
    constructor(firstName:string,lastName:string,contecctInFo:string,gender:Gender,private salary:string){
        super(firstName,lastName,contecctInFo,gender);
        this.salary=salary;
    }
    getSalary():string{
        return this.salary;
    }
}

