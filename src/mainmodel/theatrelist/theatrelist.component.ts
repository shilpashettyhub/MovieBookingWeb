import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralServiceService } from '../general-service.service';
import { TheatreEntity } from '../theatre-entity';

@Component({
  selector: 'app-theatrelist',
  templateUrl: './theatrelist.component.html',
  styleUrls: ['./theatrelist.component.css']
})
export class TheatrelistComponent implements OnInit {

  theatrelist: TheatreEntity[] = [];
  constructor(private _service:GeneralServiceService, private _router:Router) { }
  


  ngOnInit(): void {
    this.setTheatreList()
  }

  setTheatreList()
  {
    this._service.getTheatreList().subscribe(
      data=>{
        this.theatrelist = data;
      },
      error=>{
        console.log(error);
      }
    );
  }

  goToShowsPage(selectedTheatre:string)
  {
    this._service.setselectedTheatre(selectedTheatre);
    this._router.navigate(['shows']);
  }
}
