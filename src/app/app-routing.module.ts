import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowRecipesComponent } from './show-recipes/show-recipes.component';
import { ShowRecipesDetailsComponent } from './show-recipes-details/show-recipes-details.component';


const routes: Routes = [
  { path: 'ShowRecipes', component: ShowRecipesComponent },
  { path: 'ShowRecipesDetails/:id', component: ShowRecipesDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
