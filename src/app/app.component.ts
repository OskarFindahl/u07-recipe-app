import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TokenService } from './shared/token.service';
import { AuthStateService } from './shared/auth-state.service';
import { AuthService } from './shared/auth.service';
import { FormBuilder } from "@angular/forms";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'u07-recipe-app';

  isSignedIn: boolean;
  ListType: number;
  Lists: any; 
  valMem:string;
  dietMem: string;
  recipes: Observable<any>;

  constructor(
    private RecipeService: RecipeService,
    private auth: AuthStateService,
    private authService: AuthService,
    public router: Router,
    public token: TokenService,
    public fb: FormBuilder,
    ) {
      
  }

SelectListForm = this.fb.group({
        chooseList: [''],
      });

  changeList(e) 
  {
    this.ListType = e.target.value;
    localStorage.setItem('list_id', e.target.value);


  }

  clearLocalStorage()
  {
    this.authService.logout().subscribe(
      result => {
        console.log(result);
        this.Lists = result; 
        localStorage.clear();
      }
    );
    

  }


  async ngOnInit()
  {
    this.recipes = this.RecipeService.getRecipes('main-corse', '');
    this.updateUserList();

    this.auth.userAuthState.subscribe(val => {
      this.isSignedIn = val;
    });
  }

public updateUserList()
{
   this.authService.getLists().subscribe(
      result => {
        console.log(result);
        this.Lists = result; 
        if(!localStorage.getItem('list_id') && this.isSignedIn){
          alert('set');
          localStorage.setItem('list_id', this.Lists[0].id)
        }

      }
    );
}

  onSubmit() {

};

  mealType(value, diet)
   {
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


