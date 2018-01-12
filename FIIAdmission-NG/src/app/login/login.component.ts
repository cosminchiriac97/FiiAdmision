import { Component, OnInit, Inject } from '@angular/core';
import { FiiFormField } from '../_models/fii-form-field';
import { Router, ActivatedRoute } from '@angular/router';
import { Authentication } from '../_services/authentication.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  email: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: Authentication,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    private userService: UserService) { }

    openSnackBar(message: string, action: string) {
      const config = new MatSnackBarConfig();
      config.extraClasses = ['custom-snack-bar-class'];
      config.duration = 5000;
      this.snackBar.open(message, action, config);
    }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      data: { email: this.email }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.email = result;
      this.userService.getCode(this.email)
      .subscribe(
      data => {
        this.openSnackBar(JSON.parse(JSON.stringify(data))['_body'], 'Got it');
      },
      error => {
        this.openSnackBar('The e-mail provided is invalid.', 'Got it');
      });
    });
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
        if (error.status === 400) {
          this.openSnackBar('Invalid username or password.', 'Got it');
        }
        this.loading = false;
      });
  }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    public dialModalRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  changePosition() {
    this.dialModalRef.updatePosition({ top: '250px', left: '250px' });
}

}
