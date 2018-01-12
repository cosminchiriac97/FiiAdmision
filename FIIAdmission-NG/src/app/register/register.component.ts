import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FiiFormField } from '../_models/fii-form-field';
import { UserService } from '../_services/user.service';
import { FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  model: any = {};
  loading = false;

  constructor(private router: Router,
    private userService: UserService,
    public snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string) {
    const config = new MatSnackBarConfig();
    config.extraClasses = ['custom-snack-bar-class'];
    config.duration = 5000;
    this.snackBar.open(message, action, config);
  }

  register() {
    this.loading = true;
    this.userService.create(this.model)
      .subscribe(
      data => {
        this.router.navigate(['/login']);
      },
      error => {
        const x = JSON.parse(JSON.stringify(error));
        const y = JSON.parse(x['_body']);
        if (error.status === 400) {
          if (JSON.parse(JSON.stringify(y))['Email']) {
            this.openSnackBar(JSON.parse(JSON.stringify(y))['Email'], 'Got it');
          }
          if (JSON.parse(JSON.stringify(y))['PasswordTooShort']) {
            this.openSnackBar(JSON.parse(JSON.stringify(y))['PasswordTooShort'], 'Got it');
          }
          if (JSON.parse(JSON.stringify(y))['DuplicateUserName']) {
            this.openSnackBar(JSON.parse(JSON.stringify(y))['DuplicateUserName'], 'Got it');
          }
          if (this.checkConfirmPass()) {
            this.openSnackBar('Confirm password invalid.', 'Got it');
          }
        }
        this.loading = false;
      });
  }

  checkConfirmPass() {
    const pass = (<HTMLInputElement>document.getElementsByName('password')[0]).value;
    const confirmPass = (<HTMLInputElement>document.getElementsByName('confirmPassword')[0]).value;
    // tslint:disable-next-line:one-line
    if (pass !== confirmPass && confirmPass !== '') {
      document.getElementById('confirmError').style.display = 'block';
      return true;
    }
    // tslint:disable-next-line:one-line
    else {
      document.getElementById('confirmError').style.display = 'none';
      return false;
    }
  }

}
