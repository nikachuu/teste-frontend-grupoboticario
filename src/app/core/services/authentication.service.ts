import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageUtils } from 'src/app/shared/utils/local-storage';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  readonly MOCK_API_URL = 'http://localhost:3000';
  localStorageUtils = new LocalStorageUtils();

  constructor(private http: HttpClient, private router: Router) {}

  signInUser(user): Observable<any> {
    return this.http.post(`${this.MOCK_API_URL}/signin`, user);
  }

  getAllUsers() {
    return this.http.get(`${this.MOCK_API_URL}/users`);
  }

  signUpUser(user) {
    return this.http.post(`${this.MOCK_API_URL}/signup`, user);
  }

  userIsSignedIn() {
    const userHasToken = this.localStorageUtils.getTokenLocalStorage();
    if (userHasToken) {
      console.log('tem token');
      return true;
    } else {
      console.log('nao tem token');
      return false;
    }
  }

  signOutUser() {
    this.localStorageUtils.clearUserInfoLocalStorage();
    this.router.navigate(['/login-register']);
  }
}
