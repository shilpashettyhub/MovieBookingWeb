import { Bookinginfo } from "./bookinginfo";
import { Cardinfo } from "./cardinfo";

export class Combinedcardbookinfo {
    bookingEntity: Bookinginfo;
    cardDetailsEntity: Cardinfo;
    selectedSeatList: string[];
    constructor(bookingObj: Bookinginfo, cardObj: Cardinfo, selectedSeatList: string[]){
        this.bookingEntity = bookingObj;
        this.cardDetailsEntity = cardObj;
        this.selectedSeatList = selectedSeatList;
    }
}
