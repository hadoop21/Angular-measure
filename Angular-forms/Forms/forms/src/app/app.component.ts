import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularForms';
  defaultCountry = 'india';

  firstname: string;
  lastname: string;
  email: string;
  gen: string;
  country: string;

  defaultGender = 'Male';

  genders = [
    { id: 1, value: 'Male' },
    { id: 2, value: 'Female' },
    { id: 3, value: 'Other' },
  ];

  @ViewChild('myform') form: NgForm;

  onSubmit() {
    console.log(this.form);

    this.firstname = this.form.value.personDetails.firstname;
    this.lastname = this.form.value.personDetails.lastname;
    this.email = this.form.value.personDetails.email;
    this.gen = this.form.value.gender;
    this.country = this.form.value.country;

    this.form.reset();
  }

  setDefaultValues() {
    // this.form.value.personDetails.firstname = 'john';
    // this.form.value.personDetails.lastname = 'sena';
    // this.form.value.personDetails.email = 'john@sena.com';

    // this.form.setValue({
    //   country: '',
    //   gender: '',
    //   hobbies: '',
    //   personDetails: {
    //     firstname: 'john',
    //     lastname: 'sena',
    //     email: 'john@sena.com',
    //   },
    // });

    this.form.form.patchValue({
      personDetails: {
        firstname: 'john',
        lastname: 'sena',
        email: 'john@sena.com',
      },
    });
  }
}
