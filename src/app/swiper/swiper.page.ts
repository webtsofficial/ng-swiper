import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-swiper',
  imports: [],
  templateUrl: './swiper.page.html',
  styleUrl: './swiper.page.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwiperPage {

}
