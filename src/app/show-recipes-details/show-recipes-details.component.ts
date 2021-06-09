import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';


@Component({
  selector: 'app-show-recipes-details',
  templateUrl: './show-recipes-details.component.html',
  styleUrls: ['./show-recipes-details.component.css']
})
export class ShowRecipesDetailsComponent implements OnInit {
  recipe$: Observable<Recipe>
  

  constructor(
    private route: ActivatedRoute,
    private service: RecipeService
  ) { }

  ngOnInit() {
    this.recipe$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getRecipeFromId(params.get("id")))
    );
  }



}
