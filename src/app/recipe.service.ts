import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, concat, empty, forkJoin } from 'rxjs';

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
    console.log(this.http.get<any>(`https://api.spoonacular.com/recipes/complexSearch?type=${mealType}&diet=${diet}&apiKey=6da6418b7fef4143b95505e36e83602c`));
    return this.http.get<any>(`https://api.spoonacular.com/recipes/complexSearch?type=${mealType}&diet=${diet}&apiKey=6da6418b7fef4143b95505e36e83602c`);
  };

  getRecipeFromId(id): Observable<any> {
    
    return this.http.get<any>(`https://api.spoonacular.com/recipes/${id}/information?apiKey=6da6418b7fef4143b95505e36e83602c`);
  };

  AddToList(recipe): any{
    
    var index = recipe.indexOf("+");
    this.ListIDs.push(recipe.slice(0, index));
    this.ListINames.push(recipe.slice(index+1));
    console.log(this.ListIDs);
    console.log(this.ListINames);
    
    
  }

  // getRecipeFromUserList(): Observable<any>{
  //   console.log('id' + this.ListItems)
  //    this.ListItems.forEach((element,index) => {
  //      console.log("hej");
  //      const example = forkJoin(const,this.http.get<any>(`https://api.spoonacular.com/recipes/${element}/information?apiKey=6da6418b7fef4143b95505e36e83602c`)); //this.getRecipeFromId(element)
  //    });
  //    console.log(this.ListRecipes)
  //   return this.ListRecipes;
  // }
}
