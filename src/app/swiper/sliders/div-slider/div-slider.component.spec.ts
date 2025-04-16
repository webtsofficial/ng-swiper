import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivSliderComponent } from './div-slider.component';

describe('DivSliderComponent', () => {
  let component: DivSliderComponent;
  let fixture: ComponentFixture<DivSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
