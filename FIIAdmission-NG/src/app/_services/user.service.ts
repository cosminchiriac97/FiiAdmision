import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AppConfig } from '../app-config';
import { User } from '../_models/user';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(private http: Http, private config: AppConfig) { }


  resetPassword( currentPassword: string, password: string): any {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);
    return this.http.put(this.config.apiUrl + '/api/account/change_password/',
      { currentPassword: currentPassword, password: password}, {headers});
  }

  create(user: User) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.config.apiUrl + '/api/account/create_account', user, options);
  }

  getCode(email: string) {
    return this.http.post(this.config.apiUrl + '/api/Account/password_recovery_s1', { email: email });
  }

  retrievePassword(email: string, password: string, code: string) {
    return this.http.put(this.config.apiUrl + '/api/Account/password_recovery_s2', { email: email, password: password, code: code });
  }

  sendForm(email: string, form: Object, completed: boolean, approved: boolean) {
    console.log(email);
    console.log(completed);
    console.log(approved);
    console.log(form);
    return this.http.post(this.config.apiUrl + '/api/Form',
    { email: email , completed: completed, approved: approved, blobObject: { form }});
  }// private helper methods

  getForm(email: string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);
    return this.http.get(this.config.apiUrl + '/api/Form/' + email, {headers});
  }
}
