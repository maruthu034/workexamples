import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

	constructor(private authService: AuthService, private router: Router) {
	}
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		const url: string = state.url;
		if (this.authService.isUserLoggedIn()) {
			return true;
		}
		this.authService.setRedirectUrl(url);
		this.router.navigate([this.authService.getLoginUrl()]);
		return false;
	}
	canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		const loggedInUser = this.authService.getLoggedInUser();
		if (loggedInUser.role === 'ADMIN') {
			return true;
		} else {
			alert('Unauthorized to open link: ' + state.url);
			return false;
		}
	}
}