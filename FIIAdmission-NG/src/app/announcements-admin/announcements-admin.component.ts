import { Component, OnInit } from '@angular/core';
import { AnnouncementsService } from '../_services/announcements.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-announcements-admin',
  templateUrl: './announcements-admin.component.html',
  styleUrls: ['./announcements-admin.component.css']
})
export class AnnouncementsAdminComponent implements OnInit {

  announcementId: string;
  model: any = {};
  model2: any = {};
  announcements: any = [];

  constructor(
    private router: Router,
    private announcementsService: AnnouncementsService) { }

  ngOnInit() {
    this.announcementsService.getAnnouncements()
      .subscribe(
      data => {
        const x = JSON.parse(JSON.stringify(data));
        const y = JSON.parse(x['_body']);
        this.announcements = y;
      },
      error => {
        alert(error);
      });
  }


  getAnnouncement(id) {
    this.announcementsService.getAnnouncement(id)
      .subscribe(
      data => {
        console.log(data);
      },
      error => {
        alert(error);
      });
  }

  addAnnouncement() {

    this.model.adminId = 'c4e3c477-eff5-45b5-a4c6-2d6d28eae60d';
    this.model.publishDate = new Date().toJSON();
    this.announcementsService.addAnnouncement(this.model)
      .subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  updateAnnouncement() {
    this.model2.adminId = 'c4e3c477-eff5-45b5-a4c6-2d6d28eae60d';
    this.model2.publishDate = new Date().toJSON();
    this.announcementsService.updateAnnouncement(this.model2)
      .subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  deleteAnnouncement(id) {
    this.announcementsService.deleteAnnouncement(id).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

}
