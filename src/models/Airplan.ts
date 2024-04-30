import { Flight } from "./Flight";
import { Seat } from "./Seat";

export class Airplane {
    private id: string;
    allSeats: string[];
    constructor(id: string) {
        this.id = id;
        this.allSeats = [
            "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10",
            "A11", "A12", "A13", "A14", "A15", "A16", "A17", "A18", "A19", "A20",
            "A21", "A22", "A23", "A24", "A25"
        ];
    }
    checkSeat(seat: Seat): boolean {
        const seatNumber = seat.getSeatNumber();
        const isValidSeat = this.allSeats.includes(seatNumber);

        if (!isValidSeat) {
            console.log(`Seat ${seatNumber} is not a valid seat in this airplane.`);
            return false;
        }
        if (seat.isOccupied()) {
            console.log(`Seat ${seatNumber} is already occupied.`);
            return false;
        }
        console.log(`Seat ${seatNumber} is available.`);
        return true;
    }
    getAvailableSeats(seat:Flight): string[]  {
        const availableSeats: string[] = [];
        let toSeat = seat.getSeats();
            toSeat.forEach(element => {
                this.allSeats.forEach(seatNumber => {
                if(element.getSeatNumber() !== seatNumber  && element.getOccupyingPassenger()!=null){
                    availableSeats.push(seatNumber);
                }
            });            
        });
        return availableSeats;
      }
}
