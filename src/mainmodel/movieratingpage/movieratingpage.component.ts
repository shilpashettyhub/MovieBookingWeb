
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralServiceService } from '../general-service.service';
import { Movieratingclass } from '../movieratingclass';

@Component({
  selector: 'app-movieratingpage',
  templateUrl: './movieratingpage.component.html',
  styleUrls: ['./movieratingpage.component.css']
})
export class MovieratingpageComponent implements OnInit {
  movieratingobj = new Movieratingclass();

  constructor(private _route:Router, private _service:GeneralServiceService) { }

  ngOnInit(): void {
    this.setMovieRatingObj();
  }

  setMovieRatingObj(){
    this._service.getMovieInfoFromBackEnd().subscribe(
      data=>{
        this.movieratingobj = data;
      },
      error=>
      {
        console.log(error);
      }
    );
  }


  goToMoviePage(){
    this._route.navigate(['shows']);
  }

  goToSeatsPage(){
    this._route.navigate(['seats']);
  }
}
