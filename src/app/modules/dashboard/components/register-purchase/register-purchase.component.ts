import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { UserPurchasesService } from 'src/app/core/services/user-purchases.service';
import { LocalStorageUtils } from 'src/app/shared/utils/local-storage';

@Component({
  selector: 'app-register-purchase',
  templateUrl: './register-purchase.component.html',
  styleUrls: ['./register-purchase.component.scss'],
})
export class RegisterPurchaseComponent implements OnInit {
  registrationForm: FormGroup;
  formResult: string = '';
  purchase;
  purchaseInfo;
  success: string = '';

  localStorageUtils = new LocalStorageUtils();

  constructor(
    private userPurchasesService: UserPurchasesService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.success = '';
    this.registrationForm = this.formBuilder.group({
      purchase_code: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          CustomValidators.rangeLength([5, 5]),
        ],
      ],
      purchase_value: [
        '',
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
      date: ['', [Validators.required]],
    });
  }
  onRegisterFormSubmit() {
    if (this.registrationForm.dirty && this.registrationForm.valid) {
      this.purchase = Object.assign(
        {},
        this.purchase,
        this.registrationForm.value
      );
      this.createPurchaseMock(this.purchase);
      console.log(this.purchase);
      this.userPurchasesService
        .postNewUserPurchase(this.purchase)
        .subscribe(() => {
          this.handleRegisterSuccess();
        });
    }
  }

  handleRegisterSuccess() {
    this.success = 'Produto criado com sucesso! :)';
  }

  createPurchaseMock(object) {
    object.userId = this.localStorageUtils.getUserLocalStorage().id;
    object.percentage = 10;
    object.cashback_value = 5;
  }
}
