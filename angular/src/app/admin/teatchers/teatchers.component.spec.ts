import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeatchersComponent } from './teatchers.component';

describe('TeatchersComponent', () => {
  let component: TeatchersComponent;
  let fixture: ComponentFixture<TeatchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeatchersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeatchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
