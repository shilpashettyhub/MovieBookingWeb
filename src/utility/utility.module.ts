import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';



@NgModule({
  declarations: [
    NavbarComponent,
    UserdetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    UserdetailsComponent
  ]
})
export class UtilityModule { }
