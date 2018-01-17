import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Authentication } from './_services/authentication.service';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private router: Router,
    private authenticationService: Authentication) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.authenticationService.getDashmin(localStorage.getItem('currUserMail'))
      .subscribe(
      data => {
        if (data.status === 200) {
          return true;
        }
      },
      error => {
        alert(error);
      });

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
