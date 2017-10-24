import { RouterModule } from '@angular/router';
import { routes } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import {FormsModule,Form} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import 'hammerjs';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
// import { RidesComponent } from './rides/rides.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TakerideComponent } from './takeride/takeride.component';
import { CitytaxiComponent } from './takeride/citytaxi/citytaxi.component';
import { OutstationComponent } from './takeride/outstation/outstation.component';
import { RentalsComponent } from './takeride/rentals/rentals.component';
import { TripsComponent } from './trips/trips.component';

import { connectService } from './connect.service';
import {GoogleMapsNg2Module} from 'google-maps-ng2';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ProfileComponent } from './profile/profile.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
// import {GoogleMapsModule} from 'google-maps-ng2';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
 
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    // RidesComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    TakerideComponent,
    CitytaxiComponent,
    OutstationComponent,
    RentalsComponent,
    TripsComponent,
    ForgotpasswordComponent,
    ProfileComponent,
    ResetpasswordComponent
  ],
  imports: [
    BrowserModule,routes,HttpModule,RouterModule,ReactiveFormsModule,FormsModule,BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyD-xymD6K4DYnKH--nRlm91CLD0Zl0A2Fc",
      libraries: ["places"]
    })
    
  ],
  // exports: [MdButtonModule, MdCheckboxModule,MatMenuModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
