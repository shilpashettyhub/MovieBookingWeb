import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bookinginfo } from '../bookinginfo';
import { GeneralServiceService } from '../general-service.service';
import { NgForm } from '@angular/forms';
import { Cardinfo } from '../cardinfo';


@Component({
  selector: 'app-paymentspage',
  templateUrl: './paymentspage.component.html',
  styleUrls: ['./paymentspage.component.css']
})
export class PaymentspageComponent implements OnInit {
  cardinfoobj = new Cardinfo();

  selectedSeatId: string[] = [];

  msg!: string;

  constructor(private _service:GeneralServiceService, private _router:Router) { }

  ngOnInit(): void {
    
  }

  setcardtype(e:any)
  {
    this.cardinfoobj.cardType = e.target.value;
  }

  confirmpayment()
  {

    this._service.setCardInfoObject(this.cardinfoobj);
    this._service.postCardBookingObject().subscribe(
      data => {
        console.log(data);

        // this.selectedSeatId = this._service.getselectedSeatId();
        // for(let seat in this.selectedSeatId)
        // {
        //   this._service.setConfirmedSeatObjectTrue(seat).subscribe(data, error=>{console.log(error);/* undo flags of seat*/});
        // }
        // this._router.navigate(['']);
        // this._service.changeSeatObjectFlag().subscribe(
        //   data=> {

        //   }
        //   );
        this._router.navigate(['finalpage']);

      },
      error=> {
        //display error
        console.log(error);
        this.msg = "Incorrect card details!!!. Please try again";
      }
    );


    //send data to backend
    //if good change status of seat
    //reroute to new page
  }

}
