import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../models/user';
import { ILoginInformation } from '../../models/login-information';
import { NgBrazilValidators } from 'ng-brazil';
import { utilsBr } from 'js-brasil';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss'],
})
export class LoginRegisterComponent implements OnInit {
  loginForm: FormGroup;
  registrationForm: FormGroup;
  formResult: string = '';
  user: IUser;
  loginInformation: ILoginInformation;

  MASKS = utilsBr.MASKS;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      loginEmail: ['', [Validators.required, Validators.email]],
      loginPassword: [
        '',
        [Validators.required, CustomValidators.rangeLength([6, 15])],
      ],
    });

    this.registrationForm = this.formBuilder.group({
      registrationName: ['', Validators.required],
      registrationCpf: ['', [Validators.required, NgBrazilValidators.cpf]],
      registrationEmail: ['', [Validators.required, Validators.email]],
      registrationPassword: [
        '',
        [Validators.required, CustomValidators.rangeLength([6, 15])],
      ],
    });
  }

  onLoginFormSubmit() {
    if (this.loginForm.dirty && this.loginForm.valid) {
      this.loginInformation = Object.assign(
        {},
        this.loginInformation,
        this.loginForm.value
      );
      this.formResult = this.loginForm.value;
      console.log(this.loginInformation);
    }
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
