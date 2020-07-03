import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from './authorization.service';
import { AuthorizationModule } from './authorization.module';

@Injectable({
  providedIn: AuthorizationModule
})
export class AuthorizationGuard implements CanActivate {

  constructor(private authorizationService: AuthorizationService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (this.authorizationService.loggedIn){
        return true;
      }
      this.router.navigate(['login']);
      return false;
  }
}
