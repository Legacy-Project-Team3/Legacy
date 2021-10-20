import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:angular/src/app/card/card.component.spec.ts
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ]
=======
import { StatsComponent } from './stats.component';

describe('StatsComponent', () => {
  let component: StatsComponent;
  let fixture: ComponentFixture<StatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsComponent ]
>>>>>>> 63b2130d84fc535b535c093001da3530d83a2728:angular/src/app/admin/stats/stats.component.spec.ts
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<< HEAD:angular/src/app/card/card.component.spec.ts
    fixture = TestBed.createComponent(CardComponent);
=======
    fixture = TestBed.createComponent(StatsComponent);
>>>>>>> 63b2130d84fc535b535c093001da3530d83a2728:angular/src/app/admin/stats/stats.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
