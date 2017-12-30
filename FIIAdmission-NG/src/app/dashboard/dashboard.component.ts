import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { Authentication } from '../_services/authentication.service';
import { Router } from '@angular/router';
import { FiiFormField } from '../_models/fii-form-field';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser: User;
  fields: FiiFormField[] = [
    {
      name: 'last-name',
      placeholder: 'Your last name ( from birth certificate )',
      type: 'text',

      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'last-name',
      placeholder: 'Your last name ( from identity card )',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'first-name',
      placeholder: 'Your first name',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'full-name',
      placeholder: 'Your father\'s name',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'full-name',
      placeholder: 'Your mother\'s name',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'CNP',
      placeholder: 'Your personal identification number',
      type: 'number',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'gender-select',
      placeholder: 'Gender',
      type: 'select',
      checkChoices: [],
      selectOptions: ['Male', 'Female', 'Non-binary'],
      value: ''
    },

    {
      name: 'date-of-birth',
      placeholder: 'Date of birth',
      type: 'date',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'country',
      placeholder: 'Country',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'district',
      placeholder: 'District',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'city',
      placeholder: 'City',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'citizenship',
      placeholder: 'Citizenship',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'nationality',
      placeholder: 'Nationality',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },


    {
      name: 'ethnicity',
      placeholder: 'Ethnicity',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'first-language',
      placeholder: 'First language',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'marital-status-select',
      placeholder: 'Marital status',
      type: 'select',
      checkChoices: [],
      selectOptions: ['Married', 'Not Married', 'Divorced', 'Widoe(er)', 'Undeclared'],
      value: ''
    },

    {
      name: 'identity-card-series',
      placeholder: 'Identity card series',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'identity-card-serial-number',
      placeholder: 'Identity card serial number',
      type: 'number',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'identity-card-released-by',
      placeholder: 'Identity card released by',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'date-of-release',
      placeholder: 'Date of release',
      type: 'date',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'date-of-expiration',
      placeholder: 'Date of expiration',
      type: 'date',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'permanent-address-select',
      placeholder: 'Permanent address',
      type: 'select',
      checkChoices: [],
      selectOptions: ['Urban', 'Countryside'],
      value: ''
    },

    {
      name: 'full-address',
      placeholder: 'Full address',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'phone-number',
      placeholder: 'Phone number',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'email',
      placeholder: 'E-mail address',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'survey-check-accommodation-1',
      placeholder: 'Do you request accommodation in the period of your studies ?',
      type: 'check',
      checkChoices: ['Yes', 'No'],
      selectOptions: [],
      value: ''
    },

    {
      name: 'survey-check-accommodation-2',
      placeholder: 'Do you request accommodation in the period of admission test?',
      type: 'check',
      checkChoices: ['Yes', 'No'],
      selectOptions: [],
      value: ''
    },

    {
      name: 'survey-check-social-state',
      placeholder: 'Special social state',
      type: 'check',
      checkChoices: ['Came from foster homes', 'Came from foster care', 'Came from single-parent households',
       'Orphan of one parent', 'Orphan of both parents', 'Candidate falls within disabled people category'],
      selectOptions: [],
      value: ''
    },

    {
      name: 'institution',
      placeholder: 'Institution where the candidate graduated',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'country-of-institution',
      placeholder: 'Country',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'town-of-institution',
      placeholder: 'Town',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'district-of-institution',
      placeholder: 'District',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'domain',
      placeholder: 'Domain/profile',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'studies-duration',
      placeholder: 'Duration of studies',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'graduation-year',
      placeholder: 'Graduation year',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'form-of-education-select',
      placeholder: 'Form of education',
      type: 'select',
      checkChoices: [],
      selectOptions: ['Daily', 'Seral', 'FR', 'ID'],
      value: ''
    },


    {
      name: 'baccalaureate-diploma-series',
      placeholder: 'Baccalaureate diploma series',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'baccalaureate-diploma-number',
      placeholder: 'Baccalaureate diploma number',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'baccalaureate-diploma-released-by',
      placeholder: 'Baccalaureate diploma released by',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'baccalaureate-diploma-released-date',
      placeholder: 'Baccalaureate diploma released date',
      type: 'date',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'enrollment-sheet-number',
      placeholder: 'Enrollment sheet number :',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'studies-abroad-1',
      placeholder: 'Act of recognition/equivalence(released by DPIRV/CNRED) number ',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'studies-abroad-2',
      placeholder: 'Act of recognition/equivalence(released by DPIRV/CNRED) series ',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'another-studies-check',
      placeholder: 'Student at other faculty/university',
      type: 'check',
      checkChoices: ['Yes', 'No'],
      selectOptions: [],
      value: ''
    },

    {
      name: 'another-studies-country',
      placeholder: 'Country',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'another-studies-town',
      placeholder: 'Town',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },


    {
      name: 'another-studies-district',
      placeholder: 'District',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'another-studies-institution-name',
      placeholder: 'Name of the institution',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'another-studies-faculty-name',
      placeholder: 'Name of the faculty',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'licence-area',
      placeholder: 'Licence area',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'study-program',
      placeholder: 'Study program/specialization',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'another-studies-form-of-education-select',
      placeholder: 'Form of education',
      type: 'select',
      checkChoices: [],
      selectOptions: ['Daily', 'Seral', 'FR', 'ID'],
      value: ''
    },

    {
      name: 'another-studies-year',
      placeholder: 'Year',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'another-studies-number-of-semesters-financed-by-the-budget',
      placeholder: 'Number of semesters financed by the state budget',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'another-studies-number-of-semesters-with-scholarship',
      placeholder: 'Number of semesters you have benefited from the scholarship',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'another-studies-graduation-year',
      placeholder: 'Year of graduation of the license studies',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'another-studies-licence-diploma',
      placeholder: 'Do you have a licence diploma ?',
      type: 'check',
      checkChoices: ['Yes', 'No'],
      selectOptions: [],
      value: ''
    },

    {
      name: 'another-studies-licence-country',
      placeholder: 'Country',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'another-studies-licence-town',
      placeholder: 'Town',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'another-studies-licence-district',
      placeholder: 'District',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'another-studies-licence-name-of-the-institution',
      placeholder: 'Name of the institution',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'another-studies-licence-name-of-the-faculty',
      placeholder: 'Faculty',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'another-studies-licence-licence-area',
      placeholder: 'Licence area',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'another-studies-licence-study-program',
      placeholder: 'Study program/ specialization',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'another-studies-licence-title-obtained',
      placeholder: 'The title obtained',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'another-studies-licence-form-of-education-select',
      placeholder: 'Form of education',
      type: 'select',
      checkChoices: [],
      selectOptions: ['Daily', 'Seral', 'FR', 'ID'],
      value: ''
    },

    {
      name: 'another-studies-licence-number-of-semesters-financed-by-the-budget',
      placeholder: 'Number of semesters financed by the state budget',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'another-studies-licence-number-of-semesters-with-scholarship',
      placeholder: 'Number of semesters you have benefited from the scholarship',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'another-studies-licence-duration',
      placeholder: 'Duration of studies (number of years)',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'another-studies-licence-diploma-series',
      placeholder: 'Licence diploma series',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'another-studies-licence-diploma-number',
      placeholder: 'Licence diploma number',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'another-studies-licence-diploma-released-by',
      placeholder: 'Licence diploma released by',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'another-studies-licence-diploma-released-date',
      placeholder: 'Licence diploma released date',
      type: 'date',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'another-studies-licence-diploma-number-of-enrollment-sheet',
      placeholder: 'The number of the supplementary / enrollment sheet accompanying the study act',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'studies-abroad-licence-1',
      placeholder: 'Act of recognition/equivalence(released by DPIRV/CNRED) number ',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'studies-abroad-licence-2',
      placeholder: 'Act of recognition/equivalence(released by DPIRV/CNRED) series ',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'baccalaureate-mean',
      placeholder: 'The average mean for the baccalaureate exam ',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'baccalaureate-max-grade',
      placeholder: 'The maximum grade obtained at mathematics baccalaureate exam or informatics baccalaureate ',
      type: 'text',
      checkChoices: [],
      selectOptions: [],
      value: ''
    },

    {
      name: 'exam-choice',
      placeholder: 'Your option for the writen test :',
      type: 'check',
      checkChoices: ['Mathematics', 'Informatics (Pascal)', 'informatics (C)'],
      selectOptions: [],
      value: ''
    },

    {
      name: 'olympiad',
      placeholder: 'Do you request equivalence with diploma from olympiad organized by MEN? ',
      type: 'check',
      checkChoices: ['Yes', 'No'],
      selectOptions: [],
      value: ''
    },

    {
      name: 'pre-admission-1',
      // tslint:disable-next-line:max-line-length
      placeholder: 'You participated in the pre-admission at the Faculty of Computer Science from Iasi and you want the grade to be taken into consideration in the current admission session? ',
      type: 'check',
      checkChoices: ['Yes', 'No'],
      selectOptions: [],
      value: ''
    },

    {
      name: 'pre-admission-2',
      // tslint:disable-next-line:max-line-length
      placeholder: 'If you answered \'Yes\' to the previous question, do you want to take again the test in the current admission session?(only the the highest grade will be considered)',
      type: 'check',
      checkChoices: ['Yes', 'No'],
      selectOptions: [],
      value: ''
    },

    {
      name: 'admission-choices',
      placeholder: ' Admission options in order of preference',
      type: 'check',
      checkChoices: ['Informatics (Romanian language), Informatics (English language) ',
        ' Informatics (English language), Informatics (Romanian language)'],
      selectOptions: [],
      value: ''
    },

    {
      name: 'admission-tax',
      placeholder: 'Do you agree to be assigned to the taxed program if you did not enter the budget-funded one?',
      type: 'check',
      checkChoices: ['Yes ', 'No ', 'Only taxed'],
      selectOptions: [],
      value: ''
    },

    {
      name: 'survey-check',
      placeholder: 'From where did you find out about Admission to UAIC ?',
      type: 'check',
      checkChoices: ['Website dedicated to admission (admitere.uaic.ro) ', 'Faculty website ', 'brochure or admission booklet',
        'University Facebook page', 'The week of open doors to the uaic'
        , 'friends, acquaintances, relatives', 'I attended a high school presentation', 'High school teachers', 'Media'],
      selectOptions: [],
      value: ''
    },


  ];
  constructor(private userService: UserService,
    private authenticationService: Authentication,
    private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }

}
