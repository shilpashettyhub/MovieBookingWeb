import { Component, OnInit } from '@angular/core';
import { Bookingdetails } from '../bookingdetails';
import { User } from '../user';
import { UtilityModule } from '../utility.module';
import { UtilserviceService } from '../utilservice.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  userobj!: User;
  bookingobj!: Bookingdetails[];

  constructor(private _utilservice:UtilserviceService) { }

  ngOnInit(): void {
    this.setUserObj();
    this.setBookingObj();
  }

  setUserObj(){
    this.userobj = this._utilservice.getUserObj();
  }

  setBookingObj()
  {
    this._utilservice.getBookingObjFromUserEmail().subscribe(
      data => {
        this.bookingobj = data;
      },
      error=>
      {
        console.log(error);
      }
    );
  }

}
