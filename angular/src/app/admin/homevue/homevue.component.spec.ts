import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomevueComponent } from './homevue.component';

describe('HomevueComponent', () => {
  let component: HomevueComponent;
  let fixture: ComponentFixture<HomevueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomevueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomevueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
