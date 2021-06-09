import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe';
import { AuthStateService } from '../shared/auth-state.service';



@Component({
  selector: 'app-show-recipes',
  templateUrl: './show-recipes.component.html',
  styleUrls: ['./show-recipes.component.css']
})
export class ShowRecipesComponent implements OnInit {

  valMem:string;
  dietMem: string;
  recipes$: Observable<Recipe[]>;
  selectedId: number;
  isSignedIn: boolean;


  constructor(
    private RecipeService: RecipeService,
    private route: ActivatedRoute,
    private auth: AuthStateService,

    ) {
  }
  ngOnInit() {

    this.auth.userAuthState.subscribe(val => {
      this.isSignedIn = val;
    });

     return this.recipes$ = this.RecipeService.getRecipes('main-corse', '');
}

//get recipe with specific mealtype (value) and diet 
  mealType(value, diet) {
    if (value === '') {
      value = this.valMem;
    }
    if (diet === ''){
      diet = this.dietMem;
    }
    this.recipes$ = this.RecipeService.getRecipes(value, diet);

    this.valMem = value;
    this.dietMem= diet;


  }

  //Add to List
  addToList(event?: MouseEvent){
    const id = (event.target as HTMLElement).id;
    this.RecipeService.AddToList(id);
  }



}
