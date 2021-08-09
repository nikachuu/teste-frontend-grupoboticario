import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from 'src/app/core/guards/login.guard';
import { LoginRegisterComponent } from './pages/login-register.component';
import { UserAccountComponent } from './user-account.component';

const userAccountRouterConfig: Routes = [
  {
    path: '',
    component: UserAccountComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: '',
        component: LoginRegisterComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(userAccountRouterConfig)],
  exports: [RouterModule],
})
export class UserAccountRoutingModule {}
