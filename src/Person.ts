export abstract class Person{
    constructor(private firstName: string, private lastName: string, private contecctInFo:string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.contecctInFo = contecctInFo;
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
    