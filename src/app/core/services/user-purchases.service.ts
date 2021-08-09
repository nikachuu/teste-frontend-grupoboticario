import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserPurchasesService {
  readonly MOCK_API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getUserPurchases(userId) {
    return this.http.get(`${this.MOCK_API_URL}/660/purchases?userId=${userId}`);
  }

  postNewUserPurchase(newPurchase) {
    return this.http.post(`${this.MOCK_API_URL}/660/purchases`, newPurchase);
  }
}
