import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SwiperComponent, SwiperItemDirective } from '@webts/ng-swiper';

@Component({
  selector: 'app-div-slider',
  imports: [
    SwiperComponent,
    SwiperItemDirective,
  ],
  templateUrl: './div-slider.component.html',
  styleUrl: './div-slider.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DivSliderComponent {

}
