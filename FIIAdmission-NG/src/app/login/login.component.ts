import { Component, OnInit } from '@angular/core';
import { FiiFormField } from '../_models/fii-form-field';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: Authentication) { }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.userName, this.model.password)
      .subscribe(
      data => {
        this.loading = true;
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.loading = false;
      });
  }
}
