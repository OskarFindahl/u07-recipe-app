import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowRecipesComponent } from './show-recipes/show-recipes.component';
import { ShowRecipesDetailsComponent } from './show-recipes-details/show-recipes-details.component';
import { UserRecipesListComponent } from './user-recipes-list/user-recipes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowRecipesComponent,
    ShowRecipesDetailsComponent,
    UserRecipesListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
