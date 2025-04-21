import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeEffectSliderTab } from './fade-effect-slider.tab';

describe('FadeEffectSliderTab', () => {
  let component: FadeEffectSliderTab;
  let fixture: ComponentFixture<FadeEffectSliderTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FadeEffectSliderTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FadeEffectSliderTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
