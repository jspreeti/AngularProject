import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username:string, password:string) {
    console.log("Before login" +this.isUserLoggedIn)
    if(username==="abc" && password==="abc") {
      sessionStorage.setItem('authenticatorUser', username);
      console.log("After login" +this.isUserLoggedIn)
      return true;
    }
      return false;
  }

  isUserLoggedIn() {
    let user=sessionStorage.getItem('authenticatorUser');
    return !(user===null)
  }

  logout() {
    sessionStorage.removeItem('authenticatorUser');
  }
}
