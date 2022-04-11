import { Time } from "@angular/common";

export class ShowEntity {
    showId!: string;
    theatreId! :string;
    movieName! :string;
    date! :Date;
    time! :Time;
    duration! : Time;
    costPerSeat! : number;
    constructor(){}
}
