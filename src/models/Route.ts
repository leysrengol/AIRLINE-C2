import { Airport } from "./Airport";
import { DateTime } from "./DateTime";

export class Router {
    private airport:Airport
    
    constructor(private distace:number,private routeNumber:string,private dateTime:DateTime){
        this.distace=distace;
        this.routeNumber=routeNumber;
        this.dateTime=dateTime;
    }
}