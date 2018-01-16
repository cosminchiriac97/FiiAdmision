import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css']
})
export class ResetPassComponent implements OnInit {

  model: any = { };

  constructor(private router: Router,
    private userService: UserService) { }

  ngOnInit() {
  }

  reset() {
    this.userService.resetPassword(this.model.password, this.model.confirmPassword)
    .subscribe(
    data => {
      alert(data);
    },
    error => {
        alert(error);
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
