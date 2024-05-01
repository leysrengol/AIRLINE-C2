import { Employee} from "./Employee";
import { Gender } from "../enums/Enum";
import { Booking } from "../services/Booking";
export class AirlineManager extends Employee{
    private employees: Employee[];
    private bookings: Booking[] = [];
 
    constructor(firstName: string, lastName: string, contecctInFo: string,gender: Gender,salary: string){
        super(firstName,lastName, contecctInFo,gender,salary);
        this.employees=[];
        
    }

    addEmployee(employee: Employee) {
        this.employees.push(employee);
    }

    getTotalSalaryPaid(){
        let totalSalary = 0;
        for (let employee of this.employees){
            totalSalary += parseInt(employee.getSalary());
        }
        return totalSalary;
    }
    public getReturnPassengerCount(flightNumber: string): number {
        let returnPassengerCount = 0;
    
        for (const booking of this.bookings) {
          const ticket = booking.getTicket();
    
          // Check if the flight number matches and the ticket type is return
          if (ticket.getFlightNumber() === flightNumber && ticket.getReturnTicket()) {
            returnPassengerCount++;
          }
        }
    
        return returnPassengerCount;
      }
      addBooking(booking: Booking) {
        this.bookings.push(booking)
      }


}




