import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../_services/user.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-repartition',
  templateUrl: './repartition.component.html',
  styleUrls: ['./repartition.component.css']
})
export class RepartitionComponent implements OnInit {
  displayedColumns: string[];
  length: number;
  classroomCapacity: number;
  classroomName: string;
  examDate: Date;
  dataSource = new MatTableDataSource();

  constructor(private userService: UserService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  public reset: any[] = [{}];
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.userService.getClassrooms()
      .subscribe(
      data => {
        this.dataSource.data = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        const x = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        this.length = this.dataSource.data.length;
        for (let i; i < this.length; i++) {
          this.userService.getClassroomRepartition(x[i].name)
            .subscribe(
            // tslint:disable-next-line:no-shadowed-variable
            data => {
              console.log(data);
            },
            error => {
              console.log(error);
            });
        }
        const names = Object.getOwnPropertyNames(this.dataSource.data[0]);
        this.displayedColumns = names;
      },
      error => {
        console.log(error);
      });

  }

  generate() {
    const date = this.examDate.toJSON();
    this.userService.postRepartition(this.dataSource.data, date)
      .subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
  addClassroom() {
    const x: any = {};
    this.length++;
    x.name = this.classroomName;
    x.capacity = this.classroomCapacity;
    this.dataSource.data[this.dataSource.data.length] = x;
    this.reset[0] = {};
  }
  ngOnInit() {
  }

}
export class Classroom {
  name: string;
  capacity: number;
}
