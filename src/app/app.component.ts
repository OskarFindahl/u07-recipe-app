import { Component } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'u07-recipe-app';

  valMem:string;
  dietMem: string;
  recipes: Observable<any>;
  constructor(
    private RecipeService: RecipeService,
    ) {
  }
  ngOnInit() {
    this.recipes = this.RecipeService.getRecipes('main-corse', '');
  }

  mealType(value, diet) {
    if (value === '') {
      value = this.valMem;
    }
    if (diet === ''){
      diet = this.dietMem;
    }
    this.recipes = this.RecipeService.getRecipes(value, diet);

    this.valMem = value;
    this.dietMem= diet;

  }
}


