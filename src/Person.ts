import { Gender } from "./Enum";
export abstract class Person{
    constructor(private firstName: string, private lastName: string, private contecctInFo:string,private gender:Gender){
        this.firstName = firstName;
        this.lastName = lastName;
        this.contecctInFo = contecctInFo;
        this.gender=gender;
    }
    getfirstName(){
        return this.firstName;
    }

    getlastname(){
        return this.lastName;
    }
    getcontecctInFo(){
        return this.contecctInFo;
    }
}
    