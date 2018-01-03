import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {
  loading: boolean;

  model: any = {};
  userEmail: string;
  code: string;
  email: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.userEmail = this.route.snapshot.queryParams['userEmail'];
    this.code = this.route.snapshot.queryParams['code'];
    if (!this.userEmail || !this.code) {
      this.router.navigate(['/']);
    }
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
  openSnackBar(message: string, action: string) {
    const config = new MatSnackBarConfig();
    config.extraClasses = ['custom-snack-bar-class'];
    config.duration = 5000;
    this.snackBar.open(message, action, config);
  }

  recover() {
    this.userService.retrievePassword(this.userEmail, this.model.password, this.code)
      .subscribe(
      data => {
        if (this.checkConfirmPass()) {
          this.openSnackBar(JSON.stringify(data), 'Got it');
        }
        this.router.navigate(['/login']);
      },
      error => {
        this.openSnackBar(JSON.stringify(error), 'Got it');
        if (this.checkConfirmPass()) {
          this.openSnackBar('Confirm password invalid.', 'Got it');
        }

        this.loading = false;
      });
  }
}
