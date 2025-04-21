import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsEffectSliderTab } from './cards-effect-slider.tab';

describe('CardsEffectSliderTab', () => {
  let component: CardsEffectSliderTab;
  let fixture: ComponentFixture<CardsEffectSliderTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsEffectSliderTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsEffectSliderTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
