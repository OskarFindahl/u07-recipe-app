import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, concat, empty, forkJoin } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  ListIDs: Array<number> = [];
  ListINames: Array<string> = [];
  ListRecipes: Observable<any>;

  constructor(private http: HttpClient) { }
  getRecipes(mealType, diet): Observable<any> {
    //
    return this.http.get<any>(`https://api.spoonacular.com/recipes/complexSearch?type=${mealType}&diet=${diet}&apiKey=${environment.API_KEY}`);
  };

  getRecipeFromId(id): Observable<any> {
    
    return this.http.get<any>(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${environment.API_KEY}`);
  };

  AddToList(recipe): any{
    
    var index = recipe.indexOf("+");
    this.ListIDs.push(recipe.slice(0, index));
    this.ListINames.push(recipe.slice(index+1));
    console.log(this.ListIDs);
    console.log(this.ListINames);
    
    
  }

}
