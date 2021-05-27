import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TokenService } from './shared/token.service';
import { AuthStateService } from './shared/auth-state.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'u07-recipe-app';
  isSignedIn: boolean;

  valMem:string;
  dietMem: string;
  recipes: Observable<any>;
  constructor(
    private RecipeService: RecipeService,
    private auth: AuthStateService,
    public router: Router,
    public token: TokenService,

    ) {
  }
  ngOnInit() {
    this.recipes = this.RecipeService.getRecipes('main-corse', '');
    this.auth.userAuthState.subscribe(val => {
      this.isSignedIn = val;
  });
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


