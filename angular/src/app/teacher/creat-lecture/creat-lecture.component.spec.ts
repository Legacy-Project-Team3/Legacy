import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatLectureComponent } from './creat-lecture.component';

describe('CreatLectureComponent', () => {
  let component: CreatLectureComponent;
  let fixture: ComponentFixture<CreatLectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatLectureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
