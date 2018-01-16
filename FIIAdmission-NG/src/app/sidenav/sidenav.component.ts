import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Authentication } from '../_services/authentication.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dashboard-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
  mobileQuery: MediaQueryList;

  fillerNav = Array(1).fill(0).map((_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    private authenticationService: Authentication,
    private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }

  announcements() {
    this.toggle(1, 0, 0, 0);
  }

  notifications() {
    this.toggle(0, 1, 0, 0);
  }

  form() {
    this.toggle(0, 0, 1, 0);
  }
  reset() {
    this.toggle(0, 0, 0, 1);
  }

  toggle(a, b, c, d) {
    if (a === 1) {
      document.getElementById('announcements').style.display = 'block';
    } else {
      document.getElementById('announcements').style.display = 'none';
    }
    if (b === 1) {
      document.getElementById('notifications').style.display = 'block';
    } else {
      document.getElementById('notifications').style.display = 'none';
    }
    if (c === 1) {
      document.getElementById('form').style.display = 'block';
    } else {
      document.getElementById('form').style.display = 'none';
    }
    if (d === 1) {
      document.getElementById('reset').style.display = 'block';
    } else {
      document.getElementById('reset').style.display = 'none';
    }
  }

}
