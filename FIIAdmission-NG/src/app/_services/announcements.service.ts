import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AppConfig } from '../app-config';
import { AnnouncementModel } from '../_models/announcementModel';
import { AddAnnouncementModel} from '../_models/addAnnouncementModel';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable()
export class AnnouncementsService {

  constructor(private http: Http, private config: AppConfig) { }

  getAnnouncements() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);
    return this.http.get(this.config.apiUrl + '/api/Announcement', {headers});
  }

  getAnnouncement(id: string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);
    return this.http.get(this.config.apiUrl + '/api/Announcement/' + id, {headers});
  }

  addAnnouncement(announcement: AddAnnouncementModel) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);
    return this.http.post(this.config.apiUrl + '/api/Announcement', announcement, { headers });
  }

  updateAnnouncement(announcement: AnnouncementModel) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);
    return this.http.put(this.config.apiUrl + 'api/Announcement/', announcement, {headers});
  }

  deleteAnnouncement(id: string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);
    return this.http.delete(this.config.apiUrl + '/api/Announcement/' + id, {headers});
  }
}
