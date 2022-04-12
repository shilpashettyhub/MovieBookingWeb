import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/userauth/registration.service';
import { Bookinginfo } from '../bookinginfo';
import { GeneralServiceService } from '../general-service.service';
import { ShowEntity } from '../show-entity';
import { TheatreEntity } from '../theatre-entity';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent implements OnInit {
  userId!: string;
  selectedLocationName!: string;
  selectedTheatreObject!: TheatreEntity;
  selectedShowObject!: ShowEntity;
  selectedSeatList: string[] = [];

  bookingobj = new Bookinginfo();

  constructor(private _service:GeneralServiceService, private _router:Router) { }

  ngOnInit(): void {
    this.setvalues();
  }

  setvalues()
  {
    this.userId = this._service.getuserId();

    //this.userId = this._userauthservice.

    this.selectedLocationName = this._service.getselectedLocation();

    this._service.getTheatreObjectFromTheatreId().subscribe(
      data =>{
        
        this.selectedTheatreObject = data;
      },
      error =>{
        console.log(error);
      }
    );
    
    this._service.getShowObjectFromShowId().subscribe(
      data =>{
        this.selectedShowObject = data;
      },
      error =>{
        console.log(error);
      }
    );

    this.selectedSeatList = this._service.getselectedSeatId();

    
  }


  constructBookingObj()
  {
    this.bookingobj.userId = this._service.getuserId();
    this.bookingobj.theatreId = this.selectedTheatreObject.theatreId;
    this.bookingobj.showId = this.selectedShowObject.showId;
    this.bookingobj.movieName = this.selectedShowObject.movieName;
    this.bookingobj.date = this.selectedShowObject.date;
    this.bookingobj.time = this.selectedShowObject.time;
    this.bookingobj.costPerSeat = this.selectedShowObject.costPerSeat;
    this.bookingobj.noOfSeats = this.selectedSeatList.length;
    this.bookingobj.amountPayable = this.bookingobj.costPerSeat*this.bookingobj.noOfSeats;
  }

  gotoPaymentsPage(){

    this.constructBookingObj();

    this._service.setBookingObject(this.bookingobj);

    this._router.navigate(['paymentspage']);
  }

  
}
