import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqwestOfDeliteComponent } from './reqwest-of-delite.component';

describe('ReqwestOfDeliteComponent', () => {
  let component: ReqwestOfDeliteComponent;
  let fixture: ComponentFixture<ReqwestOfDeliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReqwestOfDeliteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqwestOfDeliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
