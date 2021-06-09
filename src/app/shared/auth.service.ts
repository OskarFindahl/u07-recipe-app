import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';


// User interface
export class User {
  name: String;
  email: String;
  password: String;
  password_confirmation: String
}


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private http: HttpClient,
    public TokenService: TokenService,
    
  
  ) { }


  // User registration
  register(user: User): Observable<any> {
    return this.http.post('http://localhost/api/auth/register', user);
  }

  // Login
  signin(user: User): Observable<any> {
    return this.http.post('http://localhost/api/auth/login', user);
  }

   // Logout
   logout(): Observable<any> {
    return this.http.post('http://localhost/api/auth/logout', Headers);
  }


  // Access user profile
  profileUser(): Observable<any> {
    return this.http.get('http://localhost/api/auth/user-profile');
  }

  addToList(id, name): Observable<any> {
    const userId = this.TokenService.getUserId();
    const data = { 'user_recipe_list_name_id': localStorage.getItem('list_id'), 'item_id': id, 'item_name': name, 'user_id': userId}; 
    
    return this.http.post(`http://localhost/api/auth/list`, data);
  }

  addNewList(name): Observable<any> {
    const userId = this.TokenService.getUserId();
    const data = { 'name': name.List, 'user_id': userId}; 
    
    return this.http.post(`http://localhost/api/auth/listname`, data);
  }


  getLists(): Observable<any> {
    
    return this.http.get(`http://localhost/api/auth/listname`);
  }


  getRecipesFromList(): Observable<any> {

    return this.http.get(`http://localhost/api/auth/list/${localStorage.getItem('list_id')}`);
  }

  // removeFromList(): Observable<any> {

  //   return this.http.post(`http://localhost/api/auth/listname`);
  // }




}
