import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD
<<<<<<< HEAD:angular/src/app/card/card.component.spec.ts
=======
>>>>>>> 63b2130d84fc535b535c093001da3530d83a2728
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ]
<<<<<<< HEAD
=======
import { StatsComponent } from './stats.component';

describe('StatsComponent', () => {
  let component: StatsComponent;
  let fixture: ComponentFixture<StatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsComponent ]
>>>>>>> 63b2130d84fc535b535c093001da3530d83a2728:angular/src/app/admin/stats/stats.component.spec.ts
=======
>>>>>>> 63b2130d84fc535b535c093001da3530d83a2728
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<< HEAD
<<<<<<< HEAD:angular/src/app/card/card.component.spec.ts
    fixture = TestBed.createComponent(CardComponent);
=======
    fixture = TestBed.createComponent(StatsComponent);
>>>>>>> 63b2130d84fc535b535c093001da3530d83a2728:angular/src/app/admin/stats/stats.component.spec.ts
=======
    fixture = TestBed.createComponent(CardComponent);
>>>>>>> 63b2130d84fc535b535c093001da3530d83a2728
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
