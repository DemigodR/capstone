//import { web3 } from 'web3';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PlaceFIRComponent } from './components/place-fir/place-fir.component';
import { TrackFIRComponent } from './components/track-fir/track-fir.component';
import { OfficerComponent } from './components/officer/officer.component';
import { AdminComponent } from './components/admin/admin.component';
import { ApproveComponent } from './components/approve/approve.component';
import { OfficerDashboardComponent } from './components/officer-dashboard/officer-dashboard.component';
import { StationComponent } from './components/station/station.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    DashboardComponent,
    PlaceFIRComponent,
    TrackFIRComponent,
    OfficerComponent,
    AdminComponent,
    ApproveComponent,
    OfficerDashboardComponent,
    StationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlashMessagesModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [ValidateService, FlashMessagesService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
