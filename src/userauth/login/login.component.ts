import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Users } from '../users';
import { Router } from '@angular/router'
import { GeneralServiceService } from 'src/mainmodel/general-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users = new Users();

  msg="";
  constructor(private _service:RegistrationService, private _router:Router, private _mainservice:GeneralServiceService) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._service.logInUserFromRemote(this.users).subscribe(
      data =>{
        // if(data.userPassword=="incorrectpass")
        // {
        //   //this.msg="Incorrect pass or email!! Please try again";
        //   console.log("incorrect pass");
        // }
        // if(data.userEmail=="doesnotexist")
        // {
        //   console.log("user does not exist");
        // }
        this._mainservice.setuserId(this.users.userEmail);
        console.log(data);
        this._router.navigate(['location']);
      },
      error =>
      {
        console.log(error.message)
        this.msg="Incorrect pass or email!! Please try again";
      }
    )
  }

  

  goToRegistration()
  {
    this._router.navigate(['register']);
  }
}

