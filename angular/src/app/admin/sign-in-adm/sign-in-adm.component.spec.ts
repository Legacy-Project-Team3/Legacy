import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInAdmComponent } from './sign-in-adm.component';

describe('SignInAdmComponent', () => {
  let component: SignInAdmComponent;
  let fixture: ComponentFixture<SignInAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
