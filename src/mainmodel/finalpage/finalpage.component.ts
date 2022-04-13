import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finalpage',
  templateUrl: './finalpage.component.html',
  styleUrls: ['./finalpage.component.css']
})
export class FinalpageComponent implements OnInit {

  constructor(private _route:Router) { }

  ngOnInit(): void {
  }

    gotoLocationsPage()
    {
      this._route.navigate(['location']);
    }
}
