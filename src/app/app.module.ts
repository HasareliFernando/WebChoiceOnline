import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import {LoanService} from './loan.service';

import { AppComponent } from './app.component';
import { ReqLoanComponent } from './req-loan/req-loan.component';
import { ViewLoanReqComponent } from './view-loan-req/view-loan-req.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

export const firebaseConfig = {
    apiKey: 'AIzaSyBq945cja6zT9ryc_IYw1d2HP-uuSaLWMk',
    authDomain: 'bankloan-d7691.firebaseapp.com',
    databaseURL: 'https://bankloan-d7691.firebaseio.com',
    projectId: 'bankloan-d7691',
    storageBucket: 'bankloan-d7691.appspot.com',
    messagingSenderId: '977954735592'
};

const appRoutes : Routes = [
  {path:'', component:HomeComponent},
  {path:'add', component:ReqLoanComponent},
  {path:'view', component:ViewLoanReqComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    ReqLoanComponent,
    ViewLoanReqComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
