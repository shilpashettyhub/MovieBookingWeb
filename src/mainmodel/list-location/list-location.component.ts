import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from '../general-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-location',
  templateUrl: './list-location.component.html',
  styleUrls: ['./list-location.component.css']
})
export class ListLocationComponent implements OnInit {
  location: string[] = [];
  constructor(private _service:GeneralServiceService, private _router:Router) { }

  ngOnInit(): void {
    this.setLocationList();
  }

  setLocationList()
  {
    this._service.getLocationList().subscribe(
      data=>{
        this.location = data;
      },
      error=>{
        console.log(error);
      }
    );
    console.log(this.location);
  }

  routeToTheater(locationcity:string)
  {
    this._service.setselectedLocation(locationcity);
    this._router.navigate(['theatres']);
  }
}
