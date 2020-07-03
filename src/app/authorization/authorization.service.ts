import { Injectable } from '@angular/core';
import { AuthorizationModule } from './authorization.module';

@Injectable({
  providedIn: AuthorizationModule
})
export class AuthorizationService {

  users: any[] = [];

  get getToken(): string {
    return sessionStorage.getItem('token');
  }

  get loggedIn(): boolean {
    return this.getToken !== null ? true : false;
  }

  constructor() { }

  add(username: string, password: string) {
    this.users.push({username, password});
  }

  login(username: string, password: string): boolean {
    const user = this.users.find(x => x.username === username);
    if ( user !== undefined && user.password === password){
      sessionStorage.setItem('token', `${username}${password}`);
      return true;
    }
    return false;
  }
}
