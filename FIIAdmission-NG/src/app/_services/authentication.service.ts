import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppConfig } from '../app-config';


@Injectable()
export class Authentication {
  constructor(private http: Http, private config: AppConfig) { }
  login(userName: string, password: string) {
    const res = this.http.post(this.config.apiUrl + 'api/Auth/login', { userName: userName, password: password });
    res.subscribe(
      data => {
        localStorage.setItem('currentUser', JSON.stringify(data));
        localStorage.setItem('auth_token', JSON.parse(JSON.parse(JSON.parse(JSON.stringify(data))._body).token).auth_token);
      },
    );
    return res;
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('auth_token');
  }
}
