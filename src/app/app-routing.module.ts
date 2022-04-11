import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingPageComponent } from 'src/mainmodel/booking-page/booking-page.component';
import { ListLocationComponent } from 'src/mainmodel/list-location/list-location.component';
import { PaymentspageComponent } from 'src/mainmodel/paymentspage/paymentspage.component';
import { SeatListComponent } from 'src/mainmodel/seat-list/seat-list.component';
import { ShowListComponent } from 'src/mainmodel/show-list/show-list.component';
import { TheatrelistComponent } from 'src/mainmodel/theatrelist/theatrelist.component';
import { LoginComponent } from 'src/userauth/login/login.component';
import { RegisterComponent } from 'src/userauth/register/register.component';

const routes: Routes = [
   {path:'', component:LoginComponent},
   {path:'register', component:RegisterComponent},
   {path:'location', component:ListLocationComponent},
   {path:'theatres', component:TheatrelistComponent},
   {path:'shows', component:ShowListComponent},
   {path:'seats', component:SeatListComponent},
   {path:'bookinginfo', component:BookingPageComponent},
   {path:'paymentspage', component:PaymentspageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
