import { Passanger } from "./Passanger";

export class Seat {
    private occupiedBy: Passanger | null;
    private seatNumber: string;

    constructor(seatNumber: string) {
        this.seatNumber = seatNumber;
        this.occupiedBy = null;
    }

    book(passenger: Passanger): boolean {
        if (!this.isOccupied()) {
            this.occupiedBy = passenger;
            return true; 
        } else {
            return false; 
        }
    }
    isOccupied(): boolean {
        return this.occupiedBy !== null;
    }
    getSeatNumber(): string {
        return this.seatNumber;
    }

    getOccupyingPassenger(): Passanger | null {
        return this.occupiedBy;
    }
}
