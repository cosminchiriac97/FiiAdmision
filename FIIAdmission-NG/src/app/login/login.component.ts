import { Component, OnInit } from '@angular/core';
import { FiiFormField } from '../form-utilities/fii-form-field';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fields: FiiFormField[] = [
    {
      name: 'username-test',
      placeholder: 'Your username',
      type: 'text',
      radioChoices: [],
      selectOptions: [],
      value: ''
    },
    {
      name: 'password-test',
      placeholder: 'Your password',
      type: 'password',
      radioChoices: [],
      selectOptions: [],
      value: ''
    },
    {
      name: 'radio-test',
      placeholder: '',
      type: 'radio',
      radioChoices: [ 'skratar doo', 'floora doo'],
      selectOptions: [],
      value: ''
    },
    {
      name: 'select-test',
      placeholder: '',
      type: 'select',
      radioChoices: [],
      selectOptions: [ 'skratar doo', 'floora doo'],
      value: ''
    },
    {
      name: 'date-test',
      placeholder: '',
      type: 'date',
      radioChoices: [],
      selectOptions: [],
      value: ''
    },
    {
      name: 'check-test',
      placeholder: '',
      type: 'check',
      radioChoices: [],
      selectOptions: [],
      value: 'Vote me'
    },
    {
      name: 'check-test',
      placeholder: '',
      type: 'check',
      radioChoices: [],
      selectOptions: [],
      value: 'Nah, me'
    },
    {
      name: 'check-test',
      placeholder: '',
      type: 'check',
      radioChoices: [],
      selectOptions: [],
      value: 'Plz hlep'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
