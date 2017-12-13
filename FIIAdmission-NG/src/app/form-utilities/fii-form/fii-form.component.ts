import { Component, OnInit, Output, Input } from '@angular/core';
import { FiiFormField } from '../fii-form-field';

@Component({
  selector: 'app-fii-form',
  templateUrl: './fii-form.component.html',
  styleUrls: ['./fii-form.component.css']
})
export class FiiFormComponent implements OnInit {

  @Input() fields: FiiFormField[];
  // @Output() event;
  constructor() {
  }

  ngOnInit() {
  }

}
