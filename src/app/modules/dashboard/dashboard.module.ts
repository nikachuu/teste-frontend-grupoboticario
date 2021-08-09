import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPurchaseComponent } from './components/register-purchase/register-purchase.component';
import { DashboardRoutingModule } from './dashboard.route';
import { RouterModule } from '@angular/router';
import { PurchasesListComponent } from './components/purchases-list/purchases-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserPurchasesService } from '../../core/services/user-purchases.service';
import { DashboardComponent } from './dashboard.component';
import { UserHomeComponent } from './pages/user-home/user-home.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { NewPurchaseComponent } from './pages/new-purchase/new-purchase.component';
import { MyPurchasesComponent } from './pages/my-purchases/my-purchases.component';
import { TokenGuard } from 'src/app/core/guards/token.guard';
import { TokenInterceptor } from 'src/app/core/interceptors/token.interceptor';
import { ErrorsComponent } from 'src/app/shared/components/errors/errors.component';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ErrorInterceptor } from 'src/app/core/interceptors/error.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
  declarations: [
    DashboardComponent,
    RegisterPurchaseComponent,
    PurchasesListComponent,
    UserHomeComponent,
    NewPurchaseComponent,
    MyPurchasesComponent,
    ErrorsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    CurrencyMaskModule,
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    UserPurchasesService,
    TokenGuard,
  ],
})
export class DashboardModule {}
