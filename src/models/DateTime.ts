export class DateTime{
    constructor(private date:string, private time:string){
        this.date=date;
        this.time=time;
    }
    getDate():string{
        return this.date;
    }
    getTime():string{
        return this.time;
    }
}