import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {
  SwiperComponent,
  SwiperItemDirective,
} from '@webts/ng-swiper';

@Component({
  selector: 'app-image-lazy-slider',
  imports: [
    SwiperComponent,
    SwiperItemDirective,
  ],
  providers: [],
  templateUrl: './image-lazy-slider.component.html',
  styleUrl: './image-lazy-slider.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageLazySliderComponent {

}
