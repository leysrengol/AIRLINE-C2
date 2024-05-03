export class Baggage {
    constructor(private bagNumber: string, private weight: string) {
        this.bagNumber = bagNumber;
        this.weight = weight;
    }
    getBagNumber(){
        return this.bagNumber;
    }
    getWeight(){
    
        return this.weight;
    }
}