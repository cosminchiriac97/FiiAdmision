import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AppConfig } from '../app-config';
import { User } from '../_models/user';
import { HttpClientModule, HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(private http: Http, private config: AppConfig) { }

  create(user: User) {
    return this.http.post(this.config.apiUrl + '/api/account/create_account', user, this.jwt());
  }

  getAll() {
    return this.http.get(this.config.apiUrl + '/users', this.jwt()).map((response: Response) => response.json());
  }
  // private helper methods

  private jwt() {
    // create authorization header with jwt token
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      const headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }
}
