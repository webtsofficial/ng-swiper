import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageVirtualSliderComponent } from './image-virtual-slider.component';

describe('ImageVirtualSliderComponent', () => {
  let component: ImageVirtualSliderComponent;
  let fixture: ComponentFixture<ImageVirtualSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageVirtualSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageVirtualSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
