import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TokenService {

  private issuer = {
    login: 'http://localhost/api/auth/login',
    register: 'http://localhost/api/auth/register',
  }

  constructor() { }

  handleData(token, userId){
    localStorage.setItem('auth_token', token);
    localStorage.setItem('user_id', userId);
  }

  getToken(){
    return localStorage.getItem('auth_token');
  }

  getUserId(){
    return localStorage.getItem('user_id');
  }

  // Verify the token
  isValidToken(){
     const token = this.getToken();

     if(token){
       const payload = this.payload(token);
       if(payload){
         return Object.values(this.issuer).indexOf(payload.iss) > -1 ? true : false;
       }
     } else {
        return false;
     }
  }

  payload(token) {
    const jwtPayload = token.split('.')[1];
    return JSON.parse(atob(jwtPayload));
  }

  // User state based on valid token
  isLoggedIn() {
    return this.isValidToken();
  }

  // Remove token
  removeToken(){
    localStorage.removeItem('auth_token');
  }

}
