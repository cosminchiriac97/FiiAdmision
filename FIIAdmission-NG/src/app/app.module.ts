import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent, DialogOverviewExampleDialogComponent } from './login/login.component';
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
import { ResetPassComponent } from './reset-pass/reset-pass.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { AnnouncementsService } from './_services/announcements.service';
import { DashAdminComponent } from './dash-admin/dash-admin.component';
import { SidenavAdminComponent } from './sidenav-admin/sidenav-admin.component';
import { AnnouncementsAdminComponent } from './announcements-admin/announcements-admin.component';
import { MatInputModule } from '@angular/material';
import { AdminGuard } from './admin-guard.guard';
import { CandidatesComponent } from './candidates/candidates.component';
import { SeeFormComponent, DialogReasonComponent } from './see-form/see-form.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { RepartitionComponent } from './repartition/repartition.component';


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
    ResetPassComponent,
    DialogOverviewExampleDialogComponent,
    DialogReasonComponent,
    RecoveryComponent,
    AnnouncementsComponent,
    DashAdminComponent,
    SidenavAdminComponent,
    AnnouncementsAdminComponent,
    CandidatesComponent,
    SeeFormComponent,
    ConfirmComponent,
    RepartitionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatInputModule,
    AppRoutingModule,
    FormUtilitiesModule,
    MaterialUtilitiesModule
  ],
  providers: [
    AppConfig,
    AuthenticationGuard,
    AdminGuard,
    Authentication,
    UserService,
    AnnouncementsService
  ],
  entryComponents: [
    DialogOverviewExampleDialogComponent,
    DialogReasonComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
