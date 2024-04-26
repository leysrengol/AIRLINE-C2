import { Flight } from './Flight';
import  {Pilot} from './Pilot';
let pilot1 = new Pilot("2000","siem","choub","angkor Ban")
let pilot2 = new Pilot("2000","siem","choub","angkor Ban")
// console.log(pilot1)


let flight1 = new Flight("first flight","UK","At night around 11PM",pilot1,pilot2)
console.log(flight1)