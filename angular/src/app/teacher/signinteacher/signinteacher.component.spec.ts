import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninteacherComponent } from './signinteacher.component';

describe('SigninteacherComponent', () => {
  let component: SigninteacherComponent;
  let fixture: ComponentFixture<SigninteacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninteacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
