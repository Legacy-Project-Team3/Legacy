import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChckpointToDoComponent } from './chckpoint-to-do.component';

describe('ChckpointToDoComponent', () => {
  let component: ChckpointToDoComponent;
  let fixture: ComponentFixture<ChckpointToDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChckpointToDoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChckpointToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
