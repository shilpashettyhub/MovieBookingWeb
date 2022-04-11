import { Time } from "@angular/common";

export class Bookinginfo {
    bookingId!: string;
	userId!: string;
	theatreId!: string;
	showId!: string;
	movieName!: string;
	date!: Date;
	time!: Time;
	costPerSeat!: number;
	noOfSeats!: number;
	amountPayable!: number;
    constructor(){}
}
