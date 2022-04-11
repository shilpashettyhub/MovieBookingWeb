import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralServiceService } from '../general-service.service';
import { ShowEntity } from '../show-entity';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  showsList: ShowEntity[] = [];
  
  constructor(private _service:GeneralServiceService, private _router:Router) { }

  ngOnInit(): void {
    this.setShowsList();
  }

  setShowsList(){
    this._service.getShowsList().subscribe(
      data =>{
        this.showsList = data;
      },
      error =>{
        console.log(error);
      }
    );
  }

  goToSeatsPage(selectedShowId:string)
  {
    this._service.setselectedShowId(selectedShowId);
    this._router.navigate(['seats']);
  }

}
