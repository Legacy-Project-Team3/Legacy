import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingRequestComponent } from './coming-request.component';

describe('ComingRequestComponent', () => {
  let component: ComingRequestComponent;
  let fixture: ComponentFixture<ComingRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComingRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
