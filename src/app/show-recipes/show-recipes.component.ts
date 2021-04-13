import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Observable } from 'rxjs';

import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe';
import { decimalDigest } from '@angular/compiler/src/i18n/digest';



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


  constructor(
    private RecipeService: RecipeService,
    private route: ActivatedRoute,
    ) {
  }
  ngOnInit() {

     return this.recipes$ = this.RecipeService.getRecipes('main-corse', '');
}

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

  addToList(event?: MouseEvent){
    const id = (event.target as HTMLElement).id;
    this.RecipeService.AddToList(id);
  }



}
