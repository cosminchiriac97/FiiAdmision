import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { Authentication } from '../_services/authentication.service';
import { Router } from '@angular/router';
import { FiiFormField } from '../_models/fii-form-field';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUserMail: string;
  fields: FiiFormField[];

  constructor(private userService: UserService,
    private authenticationService: Authentication,
    private router: Router) {
  }

  ngOnInit() {

  }

}
