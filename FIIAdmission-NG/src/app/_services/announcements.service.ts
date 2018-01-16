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
    return this.http.get('http://localhost:64115/api/Announcement');
  }

  getAnnouncement(id: string) {
    return this.http.get('http://localhost:64115/api/Announcement/' + id);
  }

  addAnnouncement(announcement: AddAnnouncementModel) {
    return this.http.post('http://localhost:64115/api/Announcement', announcement);
  }

  updateAnnouncement(announcement: AnnouncementModel){
    console.log(announcement);
    return this.http.put('http://localhost:64115/api/Announcement/', announcement);
  }
  
  deleteAnnouncement(id: string){
    return this.http.delete('http://localhost:64115/api/Announcement/' + id);
  }
}
