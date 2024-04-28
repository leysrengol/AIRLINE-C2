export class Seat {
    private seatNumber: string;
    private isOccupied: boolean;

    constructor(seatNumber: string) {
        this.seatNumber = seatNumber;
        this.isOccupied = false; // By default, the seat is not occupied
    }

    public getSeatNumber(): string {
        return this.seatNumber;
    }

    public isSeatOccupied(): boolean {
        return this.isOccupied;
    }

    public occupySeat(): void {
        this.isOccupied = true;
    }

    public vacateSeat(): void {
        this.isOccupied = false;
    }
}
