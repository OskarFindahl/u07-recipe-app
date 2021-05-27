import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowRecipesComponent } from './show-recipes/show-recipes.component';
import { ShowRecipesDetailsComponent } from './show-recipes-details/show-recipes-details.component';
import { UserRecipesListComponent } from './user-recipes-list/user-recipes-list.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: SigninComponent },
  { path: 'register', component: SignupComponent },
  { path: 'ShowRecipes', component: ShowRecipesComponent },
  { path: 'ShowRecipesDetails/:id', component: ShowRecipesDetailsComponent },
  { path: 'UserRecipesList', component: UserRecipesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
