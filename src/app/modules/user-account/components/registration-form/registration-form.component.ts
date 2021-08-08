import { Component, OnInit } from '@angular/core';

import { utilsBr } from 'js-brasil';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgBrazilValidators } from 'ng-brazil';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
  registrationForm: FormGroup;
  formResult: string = '';
  user;
  loginInformation;

  MASKS = utilsBr.MASKS;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      registrationName: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z ]*$')],
      ],
      registrationCpf: ['', [Validators.required, NgBrazilValidators.cpf]],
      registrationEmail: ['', [Validators.required, Validators.email]],
      registrationPassword: [
        '',
        [Validators.required, CustomValidators.rangeLength([6, 20])],
      ],
    });
  }

  onRegisterFormSubmit() {
    if (this.registrationForm.dirty && this.registrationForm.valid) {
      this.registrationForm.value.registrationCpf =
        this.registrationForm.value.registrationCpf.replace(/\D+/g, '');
      this.user = Object.assign({}, this.user, this.registrationForm.value);
      this.formResult = this.registrationForm.value;
      console.log(this.user);
    }
  }
}
