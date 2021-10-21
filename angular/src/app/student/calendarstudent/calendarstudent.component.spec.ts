import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarstudentComponent } from './calendarstudent.component';

describe('CalendarstudentComponent', () => {
  let component: CalendarstudentComponent;
  let fixture: ComponentFixture<CalendarstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
