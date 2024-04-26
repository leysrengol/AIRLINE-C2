import { Gender } from "./Enum";
export abstract class Person{
    constructor(private firstName: string, private lastName: string, private contactInFo:string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.contactInFo = contactInFo;
    }
    getfirstName(){
        return this.firstName;
    }

    getlastname(){
        return this.lastName;
    }
    getcontecctInFo(){
        return this.contactInFo;
    }
}
    