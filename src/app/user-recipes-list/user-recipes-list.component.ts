import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from '../shared/auth.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-user-recipes-list',
  templateUrl: './user-recipes-list.component.html',
  styleUrls: ['./user-recipes-list.component.css']
})
export class UserRecipesListComponent implements OnInit {
 
  AddToListForm: FormGroup;
  names: any;
  ids: Array<number>

  constructor(
    private RecipeService: RecipeService,
    public authService: AuthService,
    public fb: FormBuilder,
    private appComponent: AppComponent,
  ) {
    this.AddToListForm = this.fb.group({
      List: [],
    })
  }

  ngOnInit() 
  {
    this.authService.getRecipesFromList().subscribe(
      result => 
      {
        this.names = result.map(item => item.item_name);
        this.ids = result.map(item => item.item_id); 
      }
    );

  }


  onSubmit() 
  {
    this.authService.addNewList(this.AddToListForm.value).subscribe(
      result => 
      {
        this.appComponent.updateUserList();
      },
  );
}

  //Remove from user list
  RemoveFromList(event?: MouseEvent){
    const index = (event.target as HTMLElement).id;
    this.RecipeService.RemoveFromList(index);
  }

}
