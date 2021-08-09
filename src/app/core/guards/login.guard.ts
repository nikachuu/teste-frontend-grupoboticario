import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService,
    public router: Router
  ) {}

  canActivate(): boolean {
    if (!this.authenticationService.userIsSignedIn()) {
      return true;
    }
    this.router.navigate(['dashboard']);
    return false;
  }
}
