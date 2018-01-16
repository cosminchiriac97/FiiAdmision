import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef} from '@angular/core';
import { Router } from '@angular/router';
import { Authentication } from '../_services/authentication.service';

@Component({
  selector: 'app-sidenav-admin',
  templateUrl: './sidenav-admin.component.html',
  styleUrls: ['./sidenav-admin.component.css']
})
export class SidenavAdminComponent implements OnInit {
  mobileQuery: MediaQueryList;

  fillerNav = Array(1).fill(0).map((_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener: () => void;

  ngOnInit() {

  }

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
    this.toggle(1, 0);
  }
  form() {
    this.toggle(0, 1);
  }

  toggle(a, b) {
    if (a === 1) {
      document.getElementById('announcements').style.display = 'block';
    } else {
      document.getElementById('announcements').style.display = 'none';
    }
    if (b === 1) {
      document.getElementById('form').style.display = 'block';
    } else {
      document.getElementById('form').style.display = 'none';
    }
  }
}
