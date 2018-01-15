import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AppConfig } from '../app-config';
import { User } from '../_models/user';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(private http: Http, private config: AppConfig) { }

  create(user: Object) {
    return this.http.post(this.config.apiUrl + '/api/account/create_account', user, this.jwt());
  }

  getCode(email: string) {
    return this.http.post(this.config.apiUrl + '/api/Account/password_recovery_s1', { email: email });
  }

  retrievePassword(email: string, password: string, code: string) {
    return this.http.put(this.config.apiUrl + '/api/Account/password_recovery_s2', { email: email, password: password, code: code });
  }

  sendForm(email: string, form: Object) {
    return this.http.post(this.config.apiUrl + '/api/Form', { Email: email, BlobObject: {form} });
  }// private helper methods

  private jwt() {
    // create authorization header with jwt token
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      const headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }
}
