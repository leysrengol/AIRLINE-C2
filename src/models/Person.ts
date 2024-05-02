import { Gender } from "../enums/Enum";
export abstract class Person{
    constructor(private firstName: string, private lastName: string, private contactInFo:string,private gender:Gender){
        this.firstName = firstName;
        this.lastName = lastName;
        this.contactInFo = contactInFo;
        this.gender = gender;
    }
    getFullName(){
        return this.firstName+'  '+ this.lastName;
    }
    getFirstName(){
        return this.firstName;
    }

    getlastname(){
        return this.lastName;
    }
    getcontecctInFo(){
        return this.contactInFo;
    }
}
    