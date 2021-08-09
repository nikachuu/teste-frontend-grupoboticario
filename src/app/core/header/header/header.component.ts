import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { LocalStorageUtils } from 'src/app/shared/utils/local-storage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  localStorage = new LocalStorageUtils();
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  handleAuthentication() {
    if (this.localStorage.getUserLocalStorage()) {
      this.authenticationService.signOutUser();
    }
    this.router.navigate(['/login-register']);
  }
}
