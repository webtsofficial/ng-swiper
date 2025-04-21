import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-swiper',
  imports: [
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './swiper.page.html',
  styleUrl: './swiper.page.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwiperPage {

}
