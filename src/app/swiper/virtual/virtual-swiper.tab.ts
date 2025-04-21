import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-virtual-swiper',
  imports: [],
  templateUrl: './virtual-swiper.tab.html',
  styleUrl: './virtual-swiper.tab.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VirtualSwiperTab {

}
