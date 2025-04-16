import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SwiperComponent, SwiperItemDirective } from '@webts/ng-swiper';

@Component({
  selector: 'app-image-slider',
  imports: [
    SwiperComponent,
    SwiperItemDirective,
  ],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageSliderComponent {

}
