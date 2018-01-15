import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FiiFormComponent } from './fii-form/fii-form.component';
import { MaterialUtilitiesModule } from '../material-utilities/material-utilities.module';
import { MatNativeDateModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialUtilitiesModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    FormsModule

  ],
  declarations: [FiiFormComponent],
  exports: [FiiFormComponent]
})
export class FormUtilitiesModule { }
