import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FiiFormField } from '../_models/fii-form-field';
import { UserService } from '../_services/user.service';
import { FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

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
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  register() {
    this.loading = true;
    this.userService.create(this.model)
      .subscribe(
      data => {
        this.router.navigate(['/login']);
      },
      error => {
        if (error.status === 400) {
          this.openSnackBar('E-mail already in use', 'Close');
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
    }
    // tslint:disable-next-line:one-line
    else { document.getElementById('confirmError').style.display = 'none'; }
  }

}
