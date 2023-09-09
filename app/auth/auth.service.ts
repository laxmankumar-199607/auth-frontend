import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../model/login-request';
import { SignupRequest } from '../model/signup-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:8080'
  rootURL = '/api/auth';

  userSignin(loginRequest: LoginRequest) {
    return this.http.post(this.baseUrl + this.rootURL + '/signin', loginRequest)

  }

  userRegisteration(signUpRequest: SignupRequest) {
    return this.http.post(this.baseUrl + this.rootURL + '/signup', signUpRequest)

  }

  getAuthStatus(): boolean {
    var currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (!currentUser.token && !currentUser.name) {
      return false;
    } else {
      return true;
    }
  }

  logout(){
    localStorage.removeItem('currentUser');
  }

}
