import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturestudentComponent } from './lecturestudent.component';

describe('LecturestudentComponent', () => {
  let component: LecturestudentComponent;
  let fixture: ComponentFixture<LecturestudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LecturestudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturestudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
