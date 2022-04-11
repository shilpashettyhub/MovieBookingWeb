import { Bookinginfo } from "./bookinginfo";
import { Cardinfo } from "./cardinfo";

export class Combinedcardbookinfo {
    bookingObj: Bookinginfo;
    cardObj: Cardinfo;
    constructor(bookingObj: Bookinginfo, cardObj: Cardinfo){
        this.bookingObj = bookingObj;
        this.cardObj = cardObj;
    }
}
