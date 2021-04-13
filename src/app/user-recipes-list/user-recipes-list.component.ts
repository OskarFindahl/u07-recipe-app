import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-user-recipes-list',
  templateUrl: './user-recipes-list.component.html',
  styleUrls: ['./user-recipes-list.component.css']
})
export class UserRecipesListComponent implements OnInit {
 
  names: Array<string>;
  ids: Array<number>

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private RecipeService: RecipeService
  ) { }

  ngOnInit() {

    this.names = this.RecipeService.ListINames;
    this.ids = this.RecipeService.ListIDs;
    

  }

  RemoveFromList(event?: MouseEvent){
    const index = (event.target as HTMLElement).id;
    this.RecipeService.RemoveFromList(index);
  }

}
