import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Users } from './users';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http:HttpClient) { }

  public logInUserFromRemote(users:Users):Observable<any>{
    return this._http.post<any>("http://localhost:8083/users/login", users);
  }

  public registerUserFromRemote(users:Users):Observable<any>{
    return this._http.post<any>("http://localhost:8083/users/register", users);
  }
}

//+users.userEmail+"/"+users.userPassword