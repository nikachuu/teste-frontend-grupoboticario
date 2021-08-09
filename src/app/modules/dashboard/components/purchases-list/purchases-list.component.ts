import { Component, OnInit } from '@angular/core';
import { LocalStorageUtils } from 'src/app/shared/utils/local-storage';
import { UserPurchasesService } from '../../../../core/services/user-purchases.service';

@Component({
  selector: 'app-purchases-list',
  templateUrl: './purchases-list.component.html',
  styleUrls: ['./purchases-list.component.scss'],
})
export class PurchasesListComponent implements OnInit {
  localStorage = new LocalStorageUtils();
  displayedColumns: string[] = ['cod', 'valor', 'data', 'cashback'];
  dataSource;

  constructor(private userPurchasesService: UserPurchasesService) {}

  ngOnInit(): void {
    this.userPurchasesService
      .getUserPurchases(this.localStorage.getUserLocalStorage().id)
      .subscribe((response) => {
        if (response) this.dataSource = response;
      });
  }
}
