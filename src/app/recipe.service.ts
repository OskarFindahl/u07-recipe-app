import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, concat, empty, forkJoin } from 'rxjs';
import { environment } from '../environments/environment';
import { AuthService } from './shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  //For User List
  ListIDs: Array<number> = [];
  ListINames: Array<string> = [];

  ListRecipes: Observable<any>;

  constructor(
    private http: HttpClient,
    private AuthService: AuthService,
    ) {}

  getRecipes(mealType, diet): Observable<any> {
    //
    return this.http.get<any>(`https://api.spoonacular.com/recipes/complexSearch?type=${mealType}&diet=${diet}&apiKey=${environment.API_KEY}`);
  };

  getRecipeFromId(id): Observable<any> {
    
    return this.http.get<any>(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${environment.API_KEY}`);
  };



  //For User List
  AddToList(recipe): any{
    var index = recipe.indexOf("+");
    if(!this.ListIDs.includes(recipe.slice(0, index))){
      this.ListIDs.push(recipe.slice(0, index));
      this.ListINames.push(recipe.slice(index+1));
    }


    //This is for the API-List connection 
    this.AuthService.addToList(recipe.slice(0, index), recipe.slice(index+1)).subscribe((data:any) => {
      console.log(data);
    });
    

  }

  RemoveFromList(index): any{
    this.ListIDs.splice(index, 1);
    this.ListINames.splice(index, 1);
  }
}
