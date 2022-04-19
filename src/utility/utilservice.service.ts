import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralServiceService } from 'src/mainmodel/general-service.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UtilserviceService {
  userObj!: User;

  constructor(private _http:HttpClient, private _genservice:GeneralServiceService) { }

  public setUserObj(userobj:User){ 
    this.userObj = userobj; 
    console.log(this.userObj);
  }  

  public getUserObj(){
    return this.userObj;
  }

  public getUserNameFromUserEmail(): Observable<any>{
    return this._http.get<any>("http://localhost:8083/users/"+this._genservice.getuserId());
  }

  public getBookingObjFromUserEmail(): Observable<any>{
    return this._http.get<any>("http://localhost:8080/bookings/"+this.userObj.userEmail);
  }

  public isLoggedIn(){
    return this.userObj===undefined;
  }
}
