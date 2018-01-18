import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Authentication } from '../_services/authentication.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {


  constructor(private userService: UserService,
    private authenticationService: Authentication,
    private router: Router) {}

  ngOnInit() {
  }

}
