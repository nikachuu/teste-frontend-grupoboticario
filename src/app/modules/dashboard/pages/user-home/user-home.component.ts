import { Component, OnInit } from '@angular/core';
import { LocalStorageUtils } from 'src/app/shared/utils/local-storage';
import { UserPurchasesService } from '../../../../core/services/user-purchases.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss'],
})
export class UserHomeComponent implements OnInit {
  localStorage = new LocalStorageUtils();
  userInfo;
  constructor(private userPurchasesService: UserPurchasesService) {}

  ngOnInit(): void {
    this.userInfo = this.localStorage.getUserLocalStorage();
  }

  getUserFirstName(name) {
    const nameArray = name.split(' ');
    const firstName = nameArray[0];
    return firstName;
  }
}
