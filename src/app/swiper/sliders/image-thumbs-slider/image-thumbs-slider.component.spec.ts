import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageThumbsSliderComponent } from './image-thumbs-slider.component';

describe('ImageThumbsSliderComponent', () => {
  let component: ImageThumbsSliderComponent;
  let fixture: ComponentFixture<ImageThumbsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageThumbsSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageThumbsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
