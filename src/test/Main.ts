import { AirlineManager } from "../controllers/AirlineManager";
import { Chef } from "../controllers/Chef";
import { CrewMember } from "../models/CrewMember";
import { Employee } from "../controllers/Employee";
import { Gender } from "../enums/Enum";
import { Pilot } from "../controllers/Pilot";

// let pro = new Employee("bro","cute","478394739",Gender.FEMALE,"2000");
// console.log(pro);

let airlinemanager = new AirlineManager("John", "Doe", "john.doe@example.com", Gender.MALE, "5000");

let pilot = new Pilot("Jane", "Doe", "jane.doe@example.com", Gender.FEMALE, "2000");
let crewmember = new CrewMember("Bopha", "San", "bopha.san@example.com", Gender.MALE, "3000");
let chef = new Chef("Sokha", "Sok", "sokha.sok@example.com", Gender.MALE, "4000");

airlinemanager.addEmployee(pilot)
airlinemanager.addEmployee(crewmember)
airlinemanager.addEmployee(chef)

let totalSalary =  airlinemanager.getTotalSalaryPaid();
console.log(totalSalary);
 



