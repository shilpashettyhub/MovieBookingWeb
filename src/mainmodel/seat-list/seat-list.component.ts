import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralServiceService } from '../general-service.service';
import { SeatEntity } from '../seat-entity';

@Component({
  selector: 'app-seat-list',
  templateUrl: './seat-list.component.html',
  styleUrls: ['./seat-list.component.css']
})
export class SeatListComponent implements OnInit {

  seatsList: SeatEntity[] = [];

  redSeatNumberList: string[] = [];
  
  selectedSeatList: string[] = [];
  constructor(private _service:GeneralServiceService, private _router:Router) { }

  ngOnInit(): void {
    this.setSeatList();
  }

  setSeatList()
  {
    this._service.getSeatsList().subscribe(
      data =>{
        this.seatsList = data;
        this.fillredSeatNumberList();
      },
      error =>{
        console.log(error);
      }
    );
  }

    fillredSeatNumberList()
    {
      this.seatsList.forEach(n=>{
        if(n.isOccupied=='True')
        this.redSeatNumberList.push(n.compositeId.seatNumber);
      })
    }

    isinredlist(seatno: string)
    {
        //console.log(this.redSeatNumberList);
        return this.redSeatNumberList.includes(seatno);
    }

  goToBookingsPage()
  {
    this._service.setselectedSeatId(this.selectedSeatList);
    this._router.navigate(['bookinginfo']);  
  }

  

  changesettings(seat:SeatEntity)
  {
    this.seatsList.forEach(s=>{
      if(s.compositeId.seatNumber==seat.compositeId.seatNumber)
      {
        if(s.isOccupied==="True")
        {
          s.isOccupied="False";
          this.selectedSeatList=this.selectedSeatList.filter(m=>m!=s.compositeId.seatNumber);
        }else{
          s.isOccupied="True";
          this.selectedSeatList.push(s.compositeId.seatNumber);
        }
      }
    })
  }

}
