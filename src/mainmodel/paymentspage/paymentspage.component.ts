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
    
  }

}
