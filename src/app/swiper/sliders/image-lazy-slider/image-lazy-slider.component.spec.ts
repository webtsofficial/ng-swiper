import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageLazySliderComponent } from './image-lazy-slider.component';

describe('ImageLazySliderComponent', () => {
  let component: ImageLazySliderComponent;
  let fixture: ComponentFixture<ImageLazySliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageLazySliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageLazySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
