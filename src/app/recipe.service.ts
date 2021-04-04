import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }
  getRecipes(mealType, diet): Observable<any> {
    //
    return this.http.get<any>(`https://api.spoonacular.com/recipes/complexSearch?type=${mealType}&diet=${diet}&apiKey=6da6418b7fef4143b95505e36e83602c`);
  };

  getRecipeFromId(id): Observable<any> {
    //
    return this.http.get<any>(`https://api.spoonacular.com/recipes/${id}/information?apiKey=6da6418b7fef4143b95505e36e83602c`);
  };
}
