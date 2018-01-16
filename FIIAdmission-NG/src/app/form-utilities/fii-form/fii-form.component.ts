import { Component, OnInit, Output, Input } from '@angular/core';
import { FiiFormField } from '../../_models/fii-form-field';
import { FormsModule, FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms/src/model';
import { MatDatepickerInputEvent } from '@angular/material';
import { UserService } from '../../_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fii-form',
  templateUrl: './fii-form.component.html',
  styleUrls: ['./fii-form.component.css']
})
export class FiiFormComponent implements OnInit {

  model: FormGroup;
  selectedValue: string;

  @Input() fields: FiiFormField[];
  // @Output() event;
  constructor(private router: Router,
    private userService: UserService) { }

  inputElementListener(id) {
    const element = (<HTMLInputElement>document.getElementById(id)).value;
    for (let i = 0; i < this.fields.length; i++) {
      if (this.fields[i].name === id) {
        this.fields[i].value = element;
      }
    }
  }

  selectElementListener(id) {
    for (let i = 0; i < this.fields.length; i++) {
      if (this.fields[i].name === id) {
        this.fields[i].value = this.selectedValue;
      }
    }
  }

  addEvent(id, event: MatDatepickerInputEvent<Date>) {
    for (let i = 0; i < this.fields.length; i++) {
      if (this.fields[i].name === id) {
        this.fields[i].value = this.selectedValue;
      }
    }
  }

  checkBox(id, index) {
    const element = document.getElementsByName(id);
    const array = [];
    for (let j = 0; j < element.length; j++) {
      array.push((<HTMLInputElement>element[j]).checked);
    }
    array[index] = !array[index];
    for (let i = 0; i < this.fields.length; i++) {
      if (this.fields[i].name === id) {
          this.fields[i].value = array;
          break;
      }
    }
  }


  onSubmit() {
    const x = JSON.parse(localStorage.getItem('currentUser'));
    const y = JSON.parse(x['_body']);
    const email = JSON.stringify(y['object']['email']);
    let status = true;
    for (let i = 0; i < this.fields.length; i++) {
      if (this.fields[i].value === '') {
        status = false;
        break;
      }
    }
    this.userService.sendForm(email, this.fields, status, false)
    .subscribe(
    data => {
      alert(data);
    },
    error => {
        alert(error);
    });

  }

  ngOnInit() {
  }

}
