import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormUtilitiesModule } from './form-utilities/form-utilities.module';
import { Authentication } from './_services/authentication.service';
import { AuthenticationGuard } from './authentication.guard';
import { AppConfig } from './app-config';
import { UserService } from './_services/user.service';
import { MaterialUtilitiesModule } from './material-utilities/material-utilities.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NewsComponent } from './news/news.component';
import { NotificationsComponent } from './notifications/notifications.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    DashboardComponent,
    SidenavComponent,
    NewsComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FormUtilitiesModule,
    MaterialUtilitiesModule
  ],
  providers: [
    AppConfig,
    AuthenticationGuard,
    Authentication,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
