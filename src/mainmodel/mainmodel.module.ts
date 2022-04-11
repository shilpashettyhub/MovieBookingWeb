import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListLocationComponent } from './list-location/list-location.component';
import { TheatrelistComponent } from './theatrelist/theatrelist.component';
import { ShowListComponent } from './show-list/show-list.component';
import { SeatListComponent } from './seat-list/seat-list.component';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { PaymentspageComponent } from './paymentspage/paymentspage.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListLocationComponent,
    TheatrelistComponent,
    ShowListComponent,
    SeatListComponent,
    BookingPageComponent,
    PaymentspageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ListLocationComponent,
    TheatrelistComponent,
    ShowListComponent,
    SeatListComponent,
    BookingPageComponent,
    PaymentspageComponent
  ]
})
export class MainmodelModule { }
