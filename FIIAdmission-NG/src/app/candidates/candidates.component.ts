import { Component, OnInit, ViewChild } from '@angular/core';
import { Authentication } from '../_services/authentication.service';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { SeeFormComponent } from '../see-form/see-form.component';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {

  candidates: any = [];
  pageSize: 1;
  length: number;
  toggled: boolean;
  skip: number;
  displayedColumns: string[];
  email: string;
  dataSource = new MatTableDataSource();
  cand: Candidate[] = [];
  public reset: any[] = [{}];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.userService.getCandidates(0, 10)
      .subscribe(
      data => {
        this.candidates = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(this.cand);
        for (let i = 0; i < this.candidates.length; i++) {
          this.cand[i] = new Candidate();
          this.cand[i].email = this.candidates[i].email;
          this.cand[i].firstName = this.candidates[i].firstName;
          this.cand[i].lastName = this.candidates[i].lastName;
          this.cand[i].subject = this.candidates[i].subject;
          this.cand[i].get = this.candidates[i].get;
        }
        this.dataSource.data = this.cand;
        this.dataSource.paginator = this.paginator;
        this.length = this.dataSource.data.length;
        const names = Object.getOwnPropertyNames(this.dataSource.data[0]);
        this.displayedColumns = names;
      },
      error => {
        console.log(error);
      });

  }
  constructor(
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {

  }

  getForm(email) {
    this.reset[0] = {};
    this.toggled = true;
    this.email = email;
  }

}



export class Candidate {
  email: string;
  firstName: string;
  lastName: string;
  subject: string;
  get: string;
}
