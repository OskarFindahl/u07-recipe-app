import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRecipesDetailsComponent } from './show-recipes-details.component';

describe('ShowRecipesDetailsComponent', () => {
  let component: ShowRecipesDetailsComponent;
  let fixture: ComponentFixture<ShowRecipesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRecipesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRecipesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
