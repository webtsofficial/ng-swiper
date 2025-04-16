import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {
  DivSliderComponent, ImageCardSliderComponent, ImageLazySliderComponent,
  ImageSliderComponent,
  ImageThumbsSliderComponent,
  ImageVirtualSliderComponent,
} from './sliders';

@Component({
  selector: 'app-swiper-test-page',
  imports: [
    DivSliderComponent,
    ImageSliderComponent,
    ImageThumbsSliderComponent,
    ImageVirtualSliderComponent,
    ImageLazySliderComponent,
    ImageCardSliderComponent,
  ],
  templateUrl: './swiper-test.page.html',
  styleUrl: './swiper-test.page.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwiperTestPage {

}
