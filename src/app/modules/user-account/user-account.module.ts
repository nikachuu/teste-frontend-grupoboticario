import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRegisterComponent } from './pages/login-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { UserAccountRoutingModule } from './user-account.route';
import { RouterModule } from '@angular/router';
import { UserAccountComponent } from './user-account.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationService } from '../../core/services/authentication.service';
import { LoginGuard } from 'src/app/core/guards/login.guard';
import { ErrorInterceptor } from 'src/app/core/interceptors/error.interceptor';

@NgModule({
  declarations: [
    LoginRegisterComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    UserAccountComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule,
    UserAccountRoutingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthenticationService,
    LoginGuard,
  ],
})
export class UserAccountModule {}
