import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {
  SwiperComponent,
  SwiperItemDirective,
} from '@webts/ng-swiper';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-image-thumbs-slider',
  imports: [
    SwiperComponent,
    SwiperItemDirective,
    JsonPipe,
  ],
  templateUrl: './image-thumbs-slider.component.html',
  styleUrl: './image-thumbs-slider.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: []
})
export class ImageThumbsSliderComponent {

}
