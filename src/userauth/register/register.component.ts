import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import {NgForm} from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users = new Users();
  msg="";

  constructor(private _service:RegistrationService, private _router:Router) { }

  ngOnInit(): void {
  }

  registerUser(){  
    this._service.registerUserFromRemote(this.users).subscribe(
      data =>{
        this._router.navigate(['']);
        console.log(data);
      },
      error =>
      {
        this.msg="User email already exists";
      }
    )
  }

  goToLogIn()
  {
    this._router.navigate(['']);
  }
}
