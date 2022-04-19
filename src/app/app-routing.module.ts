import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingPageComponent } from 'src/mainmodel/booking-page/booking-page.component';
import { FinalpageComponent } from 'src/mainmodel/finalpage/finalpage.component';
import { ListLocationComponent } from 'src/mainmodel/list-location/list-location.component';
import { MovieratingpageComponent } from 'src/mainmodel/movieratingpage/movieratingpage.component';
import { PaymentspageComponent } from 'src/mainmodel/paymentspage/paymentspage.component';
import { SeatListComponent } from 'src/mainmodel/seat-list/seat-list.component';
import { ShowListComponent } from 'src/mainmodel/show-list/show-list.component';
import { TheatrelistComponent } from 'src/mainmodel/theatrelist/theatrelist.component';
import { LoginComponent } from 'src/userauth/login/login.component';
import { RegisterComponent } from 'src/userauth/register/register.component';
import { GuardserviceGuard } from 'src/utility/guardservice.guard';
import { NavbarComponent } from 'src/utility/navbar/navbar.component';
import { UserdetailsComponent } from 'src/utility/userdetails/userdetails.component';

const routes: Routes = [
   {path:'', component:LoginComponent},
   {path:'register', component:RegisterComponent},
   {path:'location', component:ListLocationComponent, canActivate:[GuardserviceGuard]},
   {path:'theatres', component:TheatrelistComponent, canActivate:[GuardserviceGuard]},
   {path:'shows', component:ShowListComponent, canActivate:[GuardserviceGuard]},
   {path:'seats', component:SeatListComponent, canActivate:[GuardserviceGuard]},
   {path:'bookinginfo', component:BookingPageComponent, canActivate:[GuardserviceGuard]},
   {path:'paymentspage', component:PaymentspageComponent, canActivate:[GuardserviceGuard]},
   {path:'finalpage', component:FinalpageComponent, canActivate:[GuardserviceGuard]},
   {path:'movieinfo', component:MovieratingpageComponent, canActivate:[GuardserviceGuard]},
   {path:'userdetails', component:UserdetailsComponent, canActivate:[GuardserviceGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
