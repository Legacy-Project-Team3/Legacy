import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupteacherComponent } from './signupteacher.component';

describe('SignupteacherComponent', () => {
  let component: SignupteacherComponent;
  let fixture: ComponentFixture<SignupteacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupteacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
