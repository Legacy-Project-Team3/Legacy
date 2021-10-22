import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsTabelComponent } from './students-tabel.component';

describe('StudentsTabelComponent', () => {
  let component: StudentsTabelComponent;
  let fixture: ComponentFixture<StudentsTabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsTabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
