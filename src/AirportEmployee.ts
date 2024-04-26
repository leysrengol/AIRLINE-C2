export class AirportEmployee{
    constructor(private role:string){
        this.role=role;
    }
    getRole(){
        return this.role;
    }
}