import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCheckpointComponent } from './checkpoint.component';

describe('TeacherCheckpointComponent', () => {
  let component: TeacherCheckpointComponent;
  let fixture: ComponentFixture<TeacherCheckpointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherCheckpointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCheckpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
