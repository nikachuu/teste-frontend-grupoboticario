import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/navigation/notfound/not-found.component';
import { LoginRegisterComponent } from './modules/user-account/pages/login-register.component';

const routes: Routes = [
  { path: '', redirectTo: 'login-register', pathMatch: 'full' },
  {
    path: 'login-register',
    loadChildren: () =>
      import('./modules/user-account/user-account.module').then(
        (m) => m.UserAccountModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
