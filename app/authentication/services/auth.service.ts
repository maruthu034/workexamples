import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { User } from './user';

const USERS = [
	new User(1, 'mahesh', 'm123', 'ADMIN'),
	new User(2, 'krishna', 'k123', 'USER')
];
const usersObservable = Observable.of(USERS);

@Injectable()
export class AuthService {
	private redirectUrl = '/';
	private loginUrl = '/login';
	private isloggedIn = false;
	private loggedInUser: User;
	getAllUsers(): Observable<User[]> {
		return usersObservable;
	}
	isUserAuthenticated(username: string, password: string): Observable<boolean> {
		return this.getAllUsers()
			.map(users => {
				// tslint:disable-next-line:indent
				// tslint:disable-next-line:prefer-const
				let user = users.find(user => (user.username === username) && (user.password === password));
				if (user) {
					this.isloggedIn = true;
					this.loggedInUser = user;
				} else {
					this.isloggedIn = false;
				}
				return this.isloggedIn;
			});
	}

	isUserLoggedIn(): boolean {
		return this.isloggedIn;
	}
	getRedirectUrl(): string {
		return this.redirectUrl;
	}
	setRedirectUrl(url: string): void {
		this.redirectUrl = url;
	}
	getLoginUrl(): string {
		return this.loginUrl;
	}
	getLoggedInUser(): User {
		return this.loggedInUser;
	}
	logoutUser(): void {
		this.isloggedIn = false;
	}
}
