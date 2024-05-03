import { Gender } from "../enums/Enum";
import { Baggage } from "../services/Baggage";
export abstract class Person{
    private bages : Baggage[] = [];
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
    addBaggges(bag:Baggage):void{
        this.bages.push(bag);
    }    
}