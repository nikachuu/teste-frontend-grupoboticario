import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { LocalStorageUtils } from 'src/app/shared/utils/local-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  loginInformation;

  localStorage = new LocalStorageUtils();

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
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
      this.authenticationService
        .signInUser(this.loginInformation)
        .subscribe((response) => {
          this.handleLoginSuccess(response);
          // erros sendo tratados com Intercept
        });
    }
  }

  handleLoginSuccess(success: any) {
    this.localStorage.saveLoginInfoLocalStorage(success);

    this.router.navigate(['/dashboard']);
  }
}
