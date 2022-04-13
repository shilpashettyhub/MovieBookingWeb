export class Changeseatflag {
    theaterId!: string;
    showId!: string;
    seatList: string[] = [];
    constructor(theaterId: string, showId: string, seatList: string[]){
        this.theaterId = theaterId;
        this.showId = showId;
        this.seatList = seatList;
    }
}
