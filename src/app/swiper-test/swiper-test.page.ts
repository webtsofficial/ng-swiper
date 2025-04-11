import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {SwiperComponent, SwiperItemDirective} from '@webts/ng-swiper';

@Component({
  selector: 'app-swiper-test',
  imports: [
    SwiperComponent,
    SwiperItemDirective
  ],
  templateUrl: './swiper-test.page.html',
  styleUrl: './swiper-test.page.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwiperTestPage {

}
