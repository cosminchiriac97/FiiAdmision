import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { Authentication } from '../_services/authentication.service';

@Component({
  moduleId: module.id,
  templateUrl: 'home.component.html',
  selector: 'app-home',
  styleUrls: ['./home.component.css']
})

@Component({
})

export class HomeComponent implements OnInit {
  currentUser: User;
  users: User[] = [];

  constructor(private userService: UserService,
    private authenticationService: Authentication,
    private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

  }
  isLogged() {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }
  get user(): any {
    // const x = JSON.parse(localStorage.getItem('currentUser'));
    // const y = JSON.parse(x['_body']);
    // let fName = JSON.stringify(y['object']['firstName']).replace('"', '').replace('"', '').toLowerCase();
    // fName = fName.charAt(0).toUpperCase() + fName.slice(1);
    // let lName = JSON.stringify(y['object']['lastName']).replace('"', '').replace('"', '').toLowerCase();
    // lName = lName.charAt(0).toUpperCase() + lName.slice(1);
    // return fName + ' ' + lName;
    return 'Boule';
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }
}
