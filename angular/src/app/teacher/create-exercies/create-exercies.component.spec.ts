import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExerciesComponent } from './create-exercies.component';

describe('CreateExerciesComponent', () => {
  let component: CreateExerciesComponent;
  let fixture: ComponentFixture<CreateExerciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateExerciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExerciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
