import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ProfileComponent } from './profile/profile.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { TripsComponent } from './trips/trips.component';
import { RentalsComponent } from './takeride/rentals/rentals.component';
import { OutstationComponent } from './takeride/outstation/outstation.component';
import { CitytaxiComponent } from './takeride/citytaxi/citytaxi.component';
import { TakerideComponent } from './takeride/takeride.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { HeaderComponent } from './header/header.component';
// import { RidesComponent } from './rides/rides.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


import { ModuleWithProviders, Component } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
export const router:Routes=[

    {path:'',redirectTo:"header",pathMatch:"full"},
    {path:'header',component:HeaderComponent,children:[
        {path:'',redirectTo:"home",pathMatch:"full"},
        {path:'home',component:HomeComponent,children:[
            {path:"citytaxi",component:CitytaxiComponent},
                {path:"outstation",component:OutstationComponent},
                {path:"rentals",component:RentalsComponent}
        ]},
        {path:'forgotpassword',component:ForgotpasswordComponent},
             {path:'signup',component:SignupComponent},
        {path:'login',component:LoginComponent},
        
        {path:'services',component:ServicesComponent}
       
        
    
    ]},
    {path:'resetpassword',component:ResetpasswordComponent},
       
        {path:'dashboard',component:DashboardComponent,children:[
            {path:"takeride",component:TakerideComponent,children:[
                {path:'',redirectTo:"citytaxi",pathMatch:"full"},
                {path:"citytaxi",component:CitytaxiComponent},
                {path:"outstation",component:OutstationComponent},
                {path:"rentals",component:RentalsComponent}
            ]},
            {path:'trips',component:TripsComponent},
            {path:'profile',component:ProfileComponent}
        ]}
]

export const routes:ModuleWithProviders=RouterModule.forRoot(router);























































































