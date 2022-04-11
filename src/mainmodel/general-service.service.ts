import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Bookinginfo } from './bookinginfo';
import { Cardinfo } from './cardinfo';
import { Combinedcardbookinfo } from './combinedcardbookinfo';

@Injectable({
  providedIn: 'root'
})
export class GeneralServiceService {
  userId!: string;
  selectedLocationName!: string;
  selectedTheatreId!: string;
  selectedShowId!: string;
  selectedSeatId: string[] = [];
  bookingObject!: Bookinginfo;
  cardInfoObject!: Cardinfo;
  constructor(private _http:HttpClient) { }


  public setuserId(userId:string){ 
    this.userId = userId; 
    console.log(this.userId);
  }  

  public getuserId(){
    return this.userId;
  }


  public setselectedLocation(selectedLocation:string){ 
    this.selectedLocationName = selectedLocation; 
    console.log(this.selectedLocationName);
  }  

  public getselectedLocation(){
    return this.selectedLocationName;
  }

  public setselectedTheatre(selectedTheatre:string){ 
    this.selectedTheatreId = selectedTheatre; 
    console.log(this.selectedTheatreId);
  }  

  public getselectedTheatre(){
    return this.selectedTheatreId;
  }

  public setselectedShowId(selectedShowId:string){ 
    this.selectedShowId = selectedShowId; 
    console.log(this.selectedShowId);
  }  

  public getselectedShowId(){
    return this.selectedShowId;
  }

  public setselectedSeatId(selectedSeatId:string[]){ 
    this.selectedSeatId = selectedSeatId; 
    console.log(this.selectedSeatId);
  }  

  public getselectedSeatId(){
    return this.selectedSeatId;
  }

  public setBookingObject(bookingobj: Bookinginfo){ 
    this.bookingObject = bookingobj; 
    console.log(this.bookingObject);
  }  

  public getBookingObject(){
    return this.bookingObject;
  }

  public setCardInfoObject(cardinfoobj: Cardinfo){ 
    this.cardInfoObject = cardinfoobj; 
    console.log(this.cardInfoObject);
  }  

  public getCardInfoObject(){
    return this.cardInfoObject;
  }


  public getLocationList(): Observable<any>{
    return this._http.get<any>("http://localhost:8082/locations");
  }

  public getTheatreList(): Observable<any> {
    return this._http.get<any>("http://localhost:8082/findtheatre/"+this.selectedLocationName);
  }

  public getShowsList(): Observable<any> {
    return this._http.get<any>("http://localhost:8082/showsintheatre/"+this.selectedTheatreId);
  }

  public getSeatsList(): Observable<any> {
    return this._http.get<any>("http://localhost:8082/getseats/"+this.selectedShowId);
  }

  public getTheatreObjectFromTheatreId(): Observable<any> {
    console.log(this.selectedTheatreId);
    return this._http.get<any>("http://localhost:8082/gettheatreobject/"+this.selectedTheatreId);
  }

  public getShowObjectFromShowId(): Observable<any> {
    return this._http.get<any>("http://localhost:8082/getshowobject/"+this.selectedShowId);
  }

  public postCardBookingObject(): Observable<any> {
    const combinedCardBookInfoObj = new Combinedcardbookinfo(this.bookingObject, this.cardInfoObject);
    console.log(combinedCardBookInfoObj);
    return this._http.post<any>("https://localhost:8087/checkcarddetails", combinedCardBookInfoObj);
  }
}
