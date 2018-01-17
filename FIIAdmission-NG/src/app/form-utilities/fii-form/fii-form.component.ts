import { Component, OnInit, Output, Input } from '@angular/core';
import { FiiFormField } from '../../_models/fii-form-field';
import { FormsModule, FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms/src/model';
import { MatDatepickerInputEvent } from '@angular/material';
import { UserService } from '../../_services/user.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import * as saveAs from 'file-saver';

@Component({
  selector: 'app-fii-form',
  templateUrl: './fii-form.component.html',
  styleUrls: ['./fii-form.component.css']
})
export class FiiFormComponent implements OnInit {
  image: any;
  currentUserMail: string;

  model: FormGroup;
  fields: FiiFormField[];

  constructor(private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    if (localStorage.getItem('currUserMail')) {
      this.currentUserMail = localStorage.getItem('currUserMail');
      this.userService.getForm(this.currentUserMail).subscribe(
        data => {
          this.fields = JSON.parse(JSON.parse(JSON.stringify(data))._body).blobObject.form;
          for (let i = 0; i < this.fields.length; i++) {
            if (this.fields[i].value !== '') {
            }
          }
        },
        error => {
          console.log(error);
        });
    }
    // tslint:disable-next-line:one-line
    else {
      this.fields = [
        {
          name: 'last-name',
          placeholder: 'Your last name ( from birth certificate )',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: 'Ex: Popescu'
        },

        {
          name: 'last-name-id',
          placeholder: 'Your last name ( from identity card )',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: 'Ex: Ionescu'
        },

        {
          name: 'first-name',
          placeholder: 'Your first name',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: 'Ex: Andreea-Diana'
        },

        {
          name: 'father-name',
          placeholder: 'Your father\'s name',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: 'Ex: James Johnson'
        },

        {
          name: 'mother-name',
          placeholder: 'Your mother\'s name',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: 'Ex: Wendy Johnson'
        },

        {
          name: 'CNP',
          placeholder: 'Your personal identification number',
          type: 'number',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: 'Romania ex: 2441205021975'
        },

        {
          name: 'gender-select',
          placeholder: 'Gender',
          type: 'select',
          checkChoices: [],
          selectOptions: ['Male', 'Female', 'Non-binary'],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'date-of-birth',
          placeholder: 'Date of birth',
          type: 'date',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: 'Choose a date clicking on the icon on the right!'
        },

        {
          name: 'country',
          placeholder: 'Country',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'district',
          placeholder: 'District',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'city',
          placeholder: 'City',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'citizenship',
          placeholder: 'Citizenship',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'nationality',
          placeholder: 'Nationality',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },


        {
          name: 'ethnicity',
          placeholder: 'Ethnicity',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'first-language',
          placeholder: 'First language',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'marital-status-select',
          placeholder: 'Marital status',
          type: 'select',
          checkChoices: [],
          selectOptions: ['Married', 'Not Married', 'Divorced', 'Widoe(er)', 'Undeclared'],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'identity-card-series',
          placeholder: 'Identity card series',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: 'Ex: MX123456'
        },

        {
          name: 'identity-card-serial-number',
          placeholder: 'Identity card serial number',
          type: 'number',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'identity-card-released-by',
          placeholder: 'Identity card released by',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'date-of-release',
          placeholder: 'Date of release',
          type: 'date',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'date-of-expiration',
          placeholder: 'Date of expiration',
          type: 'date',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'permanent-address-select',
          placeholder: 'Permanent address',
          type: 'select',
          checkChoices: [],
          selectOptions: ['Urban', 'Countryside'],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'full-address',
          placeholder: 'Full address',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'phone-number',
          placeholder: 'Phone number',
          type: 'number',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'email',
          placeholder: 'E-mail address',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'survey-check-accommodation-1',
          placeholder: 'Do you request accommodation in the period of your studies ?',
          type: 'radio',
          checkChoices: ['Yes', 'No'],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'survey-check-accommodation-2',
          placeholder: 'Do you request accommodation in the period of admission test?',
          type: 'radio',
          checkChoices: ['Yes', 'No'],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'survey-check-social-state',
          placeholder: 'Special social state',
          type: 'radio',
          checkChoices: ['Came from foster homes', 'Came from foster care', 'Came from single-parent households',
            'Orphan of one parent', 'Orphan of both parents', 'Candidate falls within disabled people category'],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'institution',
          placeholder: 'Institution where the candidate graduated',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'country-of-institution',
          placeholder: 'Country',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'town-of-institution',
          placeholder: 'Town',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'district-of-institution',
          placeholder: 'District',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'domain',
          placeholder: 'Domain/profile',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'studies-duration',
          placeholder: 'Duration of studies',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'graduation-year',
          placeholder: 'Graduation year',
          type: 'number',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'form-of-education-select',
          placeholder: 'Form of education',
          type: 'select',
          checkChoices: [],
          selectOptions: ['Daily', 'Seral', 'FR', 'ID'],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },


        {
          name: 'baccalaureate-diploma-series',
          placeholder: 'Baccalaureate diploma series',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'baccalaureate-diploma-number',
          placeholder: 'Baccalaureate diploma number',
          type: 'number',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'baccalaureate-diploma-released-by',
          placeholder: 'Baccalaureate diploma released by',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'baccalaureate-diploma-released-date',
          placeholder: 'Baccalaureate diploma released date',
          type: 'date',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'enrollment-sheet-number',
          placeholder: 'Enrollment sheet number :',
          type: 'number',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'studies-abroad-1',
          placeholder: 'Act of recognition/equivalence(released by DPIRV/CNRED) number ',
          type: 'number',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'studies-abroad-2',
          placeholder: 'Act of recognition/equivalence(released by DPIRV/CNRED) series ',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'another-studies-check',
          placeholder: 'Student at other faculty/university',
          type: 'radio',
          checkChoices: ['Yes', 'No'],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'another-studies-country',
          placeholder: 'Country',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'another-studies-town',
          placeholder: 'Town',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },


        {
          name: 'another-studies-district',
          placeholder: 'District',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'another-studies-institution-name',
          placeholder: 'Name of the institution',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'another-studies-faculty-name',
          placeholder: 'Name of the faculty',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'licence-area',
          placeholder: 'Licence area',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'study-program',
          placeholder: 'Study program/specialization',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'another-studies-form-of-education-select',
          placeholder: 'Form of education',
          type: 'select',
          checkChoices: [],
          selectOptions: ['Daily', 'Seral', 'FR', 'ID'],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'another-studies-year',
          placeholder: 'Year',
          type: 'number',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'another-studies-number-of-semesters-financed-by-the-budget',
          placeholder: 'Number of semesters financed by the state budget',
          type: 'number',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'another-studies-number-of-semesters-with-scholarship',
          placeholder: 'Number of semesters you have benefited from the scholarship',
          type: 'number',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'another-studies-graduation-year',
          placeholder: 'Year of graduation of the license studies',
          type: 'number',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'another-studies-licence-diploma',
          placeholder: 'Do you have a licence diploma ?',
          type: 'radio',
          checkChoices: ['Yes', 'No'],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'another-studies-licence-country',
          placeholder: 'Country',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'another-studies-licence-town',
          placeholder: 'Town',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'another-studies-licence-district',
          placeholder: 'District',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'another-studies-licence-name-of-the-institution',
          placeholder: 'Name of the institution',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'another-studies-licence-name-of-the-faculty',
          placeholder: 'Faculty',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'another-studies-licence-licence-area',
          placeholder: 'Licence area',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'another-studies-licence-study-program',
          placeholder: 'Study program/ specialization',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'another-studies-licence-title-obtained',
          placeholder: 'The title obtained',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'another-studies-licence-form-of-education-select',
          placeholder: 'Form of education',
          type: 'select',
          checkChoices: [],
          selectOptions: ['Daily', 'Seral', 'FR', 'ID'],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'another-studies-licence-number-of-semesters-financed-by-the-budget',
          placeholder: 'Number of semesters financed by the state budget',
          type: 'number',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'another-studies-licence-number-of-semesters-with-scholarship',
          placeholder: 'Number of semesters you have benefited from the scholarship',
          type: 'number',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'another-studies-licence-duration',
          placeholder: 'Duration of studies (number of years)',
          type: 'number',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'another-studies-licence-diploma-series',
          placeholder: 'Licence diploma series',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'another-studies-licence-diploma-number',
          placeholder: 'Licence diploma number',
          type: 'number',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'another-studies-licence-diploma-released-by',
          placeholder: 'Licence diploma released by',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'another-studies-licence-diploma-released-date',
          placeholder: 'Licence diploma released date',
          type: 'date',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'another-studies-licence-diploma-number-of-enrollment-sheet',
          placeholder: 'The number of the supplementary / enrollment sheet accompanying the study act',
          type: 'number',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'studies-abroad-licence-1',
          placeholder: 'Act of recognition/equivalence(released by DPIRV/CNRED) number ',
          type: 'number',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'studies-abroad-licence-2',
          placeholder: 'Act of recognition/equivalence(released by DPIRV/CNRED) series ',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'baccalaureate-mean',
          placeholder: 'The average mean for the baccalaureate exam ',
          type: 'text',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'baccalaureate-max-grade',
          placeholder: 'The maximum grade obtained at mathematics baccalaureate exam or informatics baccalaureate ',
          type: 'number',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'registering-receipt-picture',
          placeholder: 'Receipt of registering',
          type: 'file',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: 'A clear picture of the receipt (300 RON)'
        },


        {
          name: 'tuition-receipt-file',
          placeholder: 'Receipt of the tuition',
          type: 'file',
          checkChoices: [],
          selectOptions: [],
          value: '-',
          checked: false,
          reason: '',
          hint: '*If necessary'
        },

        {
          name: 'identity-file',
          placeholder: 'Identity card',
          type: 'file',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: 'Clear picture'
        },


        {
          name: 'medical-file',
          placeholder: 'Medical certificate',
          type: 'file',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: 'Clear picture'
        },

        {
          name: 'identity-book-file',
          placeholder: 'Identity book',
          type: 'file',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: 'Certifies domicile in Romania'
        },

        {
          name: 'exam-choice',
          placeholder: 'Your option for the written test :',
          type: 'radio',
          checkChoices: ['Mathematics', 'Informatics (Pascal)', 'Informatics (C/C++)'],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'olympiad',
          placeholder: 'Do you request equivalence with diploma from olympiad organized by MEN? ',
          type: 'radio',
          checkChoices: ['Yes', 'No'],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'pre-admission-1',
          // tslint:disable-next-line:max-line-length
          placeholder: 'You participated in the pre-admission at the Faculty of Computer Science from Iasi and you want the grade to be taken into consideration in the current admission session? ',
          type: 'radio',
          checkChoices: ['Yes', 'No'],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'pre-admission-2',
          // tslint:disable-next-line:max-line-length
          placeholder: 'If you answered \'Yes\' to the previous question, do you want to take again the test in the current admission session?(only the the highest grade will be considered)',
          type: 'radio',
          checkChoices: ['Yes', 'No'],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'admission-choices',
          placeholder: ' Admission options in order of preference',
          type: 'radio',
          checkChoices: ['Informatics (Romanian language), Informatics (English language) ',
            ' Informatics (English language), Informatics (Romanian language)'],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'admission-tax',
          placeholder: 'Do you agree to be assigned to the taxed program if you did not enter the budget-funded one?',
          type: 'radio',
          checkChoices: ['Yes ', 'No ', 'Only taxed'],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'survey-check',
          placeholder: 'From where did you find out about Admission to UAIC ?',
          type: 'radio',
          checkChoices: ['Website dedicated to admission (admitere.uaic.ro) ', 'Faculty website ', 'brochure or admission booklet',
            'University Facebook page', 'The week of open doors to the uaic'
            , 'friends, acquaintances, relatives', 'I attended a high school presentation', 'High school teachers', 'Media'],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

        {
          name: 'submit-button',
          placeholder: '',
          type: 'submit',
          checkChoices: [],
          selectOptions: [],
          value: '',
          checked: false,
          reason: '',
          hint: ''
        },

      ];
    }
  }
  inputElementListener(id) {
    const element = (<HTMLInputElement>document.getElementById(id)).value;
    for (let i = 0; i < this.fields.length; i++) {
      if (this.fields[i].name === id) {
        this.fields[i].value = element;
      }
    }
  }

  addEvent(id, event: MatDatepickerInputEvent<Date>) {
    for (let i = 0; i < this.fields.length; i++) {
      if (this.fields[i].name === id) {
        this.fields[i].value = event.value.toISOString();
      }
    }
  }

  noReason(reason) {
    if (reason !== '') {
      return false;
    }
    return true;
  }

  saveFile(src, filename) {
    const FileSaver = require('file-saver');
    const blob = new Blob([src], {type: src.split(';')[0].split(':')[1]});
    FileSaver.saveAs(blob, filename);
  }


  changeListener($event, index): void {
    this.readThis($event.target, index);
  }

  readThis(inputValue: any, index): void {

    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.image = myReader.result;
      this.fields[index].value = this.image;
    };
    myReader.readAsDataURL(file);

  }

  closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }

  zoom(src) {
    const modal = document.getElementById('myModal');
    const modalImg = <HTMLImageElement>document.getElementById('img01');
    modal.style.display = 'block';
    modalImg.src = src;
  }

  onSubmit() {
    const email = localStorage.getItem('currUserMail');
    let status = true;
    for (let i = 0; i < this.fields.length - 1; i++) {
      this.fields[i].reason = '';
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


}
