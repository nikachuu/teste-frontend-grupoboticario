import { Component, OnInit } from '@angular/core';

import { utilsBr } from 'js-brasil';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgBrazilValidators } from 'ng-brazil';
import { CustomValidators } from 'ng2-validation';
import { AuthenticationService } from '../../../../core/services/authentication.service';

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
  success: string = '';

  MASKS = utilsBr.MASKS;
  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, CustomValidators.rangeLength([6, 20])],
      ],
    });
  }

  onRegisterFormSubmit() {
    if (this.registrationForm.dirty && this.registrationForm.valid) {
      this.registrationForm.value.cpf = this.registrationForm.value.cpf.replace(
        /\D+/g,
        ''
      );
      this.user = Object.assign({}, this.user, this.registrationForm.value);
      this.formResult = this.registrationForm.value;
      console.log(this.user);
      this.authenticationService.signUpUser(this.user).subscribe(() => {
        this.handleRegisterSuccess();
      });
    }
  }

  handleRegisterSuccess() {
    this.success = 'Conta criada com sucesso! :)';
  }
}
