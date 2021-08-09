import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class TokenGuard implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService,
    public router: Router
  ) {}

  canActivate(): boolean {
    if (this.authenticationService.userIsSignedIn()) {
      return true;
    }
    this.router.navigate(['login-register']);
    return false;
  }
}
