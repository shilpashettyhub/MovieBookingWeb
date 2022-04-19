import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GeneralServiceService } from 'src/mainmodel/general-service.service';
import { UtilserviceService } from './utilservice.service';

@Injectable({
  providedIn: 'root'
})
export class GuardserviceGuard implements CanActivate {

  constructor(private _utilservice:UtilserviceService, private _router:Router, private _mainservice:GeneralServiceService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this._mainservice.getuserId()===undefined){
      // console.log("failed");
      this._router.navigate(['']);
      return false;
    }
    else
    return true;
  }
  
}
