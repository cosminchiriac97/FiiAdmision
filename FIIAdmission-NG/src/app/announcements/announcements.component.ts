import { Component, OnInit } from '@angular/core';
import { AnnouncementsService } from '../_services/announcements.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {
  loading: boolean;
  announcementId: string;
  model: any = {};
  model2: any = {};

  constructor(
    private router: Router,
    private announcementsService: AnnouncementsService
  ) { }

  ngOnInit() {
  }

  getAllAnnouncements() {
    this.loading = true;
    this.announcementsService.getAnnouncements()
      .subscribe(
      data => {
        console.log(data);
      },
      error => {
        alert('fail');
      });
  }

  getAnnouncement(id) {
    this.loading = true;
    this.announcementsService.getAnnouncement(id)
      .subscribe(
      data => {
        console.log(data);
      },
      error => {
        alert('fail');
      });
  }

  addAnnouncement() {
    this.loading = true;
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
    this.loading = true;
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
    this.loading = true;
    this.announcementsService.deleteAnnouncement(id).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
}
