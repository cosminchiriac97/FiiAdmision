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
  announcements: any = [];

  constructor(
    private router: Router,
    private announcementsService: AnnouncementsService
  ) { }

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

}
