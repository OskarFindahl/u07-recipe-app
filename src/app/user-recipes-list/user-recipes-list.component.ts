import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';

import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-user-recipes-list',
  templateUrl: './user-recipes-list.component.html',
  styleUrls: ['./user-recipes-list.component.css']
})
export class UserRecipesListComponent implements OnInit {
 
  AddToListForm: FormGroup;
  //For user List
  names: Array<string>;
  ids: Array<number>

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private RecipeService: RecipeService,
    public authService: AuthService,
    public fb: FormBuilder,
  ) {
    this.AddToListForm = this.fb.group({
      List: [],
    })
  }

  ngOnInit() {

    this.names = this.RecipeService.ListINames;
    this.ids = this.RecipeService.ListIDs;
    

  }


  onSubmit() {
    this.authService.addNewList(this.AddToListForm.value).subscribe(
      result => {
        
        console.log(result);
      },
      
        
       
       
    );
}

  //Remove from user list
  RemoveFromList(event?: MouseEvent){
    const index = (event.target as HTMLElement).id;
    this.RecipeService.RemoveFromList(index);
  }

}
