import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenGuard } from 'src/app/core/guards/token.guard';
import { DashboardComponent } from './dashboard.component';
import { MyPurchasesComponent } from './pages/my-purchases/my-purchases.component';
import { NewPurchaseComponent } from './pages/new-purchase/new-purchase.component';
import { UserHomeComponent } from './pages/user-home/user-home.component';

const dashboardRouterConfig: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [TokenGuard],
    children: [
      { path: '', component: UserHomeComponent },
      {
        path: 'my-purchases',
        component: MyPurchasesComponent,
      },
      {
        path: 'new-purchase',
        component: NewPurchaseComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(dashboardRouterConfig)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
