import { Person } from "./Person";

export class CrewMember extends Person{
    constructor(private salary:string,firstName:string,lastName:string,contecctInFo:string){
        super(firstName,lastName,contecctInFo);
        this.salary=salary;
    }
}