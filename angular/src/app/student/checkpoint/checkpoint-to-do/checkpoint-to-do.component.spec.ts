import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckpointToDoComponent } from './checkpoint-to-do.component';

describe('CheckpointToDoComponent', () => {
  let component: CheckpointToDoComponent;
  let fixture: ComponentFixture<CheckpointToDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckpointToDoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckpointToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
