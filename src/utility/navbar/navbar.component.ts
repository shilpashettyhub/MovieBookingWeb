import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UtilserviceService } from '../utilservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userobj = new User();

  constructor(private _utilservice:UtilserviceService, private _router:Router) { }

  ngOnInit(): void {
    this.setUserName();
  }

  setUserName(){
    this._utilservice.getUserNameFromUserEmail().subscribe(
      data=>{
        this.userobj = data;
      },
      error=>{
        console.log(error);
      }
    );
  }

  goToProfile(){
    this._utilservice.setUserObj(this.userobj);
    this._router.navigate(['userdetails']);
  }

}
