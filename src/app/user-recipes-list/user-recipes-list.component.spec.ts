import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecipesListComponent } from './user-recipes-list.component';

describe('UserRecipesListComponent', () => {
  let component: UserRecipesListComponent;
  let fixture: ComponentFixture<UserRecipesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRecipesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRecipesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
