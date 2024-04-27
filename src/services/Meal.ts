export class Meal {
    constructor(private name:string, private quantity:number){
        this.name = name;
        this.quantity = quantity;
    }
    getName():string { 
        return this.name;
    }
    getQuantity():number{
        return this.quantity;
    }
}