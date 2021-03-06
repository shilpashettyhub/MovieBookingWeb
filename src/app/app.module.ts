import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainmodelModule } from 'src/mainmodel/mainmodel.module';
import { HttpClientModule} from '@angular/common/http'
import { UserauthModule } from 'src/userauth/userauth.module';
import { UtilityModule } from 'src/utility/utility.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainmodelModule,
    HttpClientModule,
    UserauthModule,
    UtilityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
