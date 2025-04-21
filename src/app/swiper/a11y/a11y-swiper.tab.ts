import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {SwiperOptions} from 'swiper/types';
import {A11y, Navigation} from 'swiper/modules';
import {SwiperComponent, SwiperItemDirective} from 'ng-swiper';

@Component({
  selector: 'app-a11y-swiper',
  imports: [
    SwiperComponent,
    SwiperItemDirective
  ],
  templateUrl: './a11y-swiper.tab.html',
  styleUrl: './a11y-swiper.tab.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class A11ySwiperTab {
  options: SwiperOptions = {
    modules: [A11y, Navigation],
    navigation: true,
    a11y: {
      prevSlideMessage: $localize`:@@swiper.a11y.prevSlideMessage:Previous slide`,
      nextSlideMessage: $localize`:@@swiper.a11y.nextSlideMessage:Next slide`,
      firstSlideMessage: $localize`:@@swiper.a11y.firstSlideMessage:First slide`,
      lastSlideMessage: $localize`:@@swiper.a11y.lastSlideMessage:Last slide`,
      paginationBulletMessage: $localize`:@@swiper.a11y.paginationBulletMessage:Pagination bullet`,
      containerMessage: $localize`:@@swiper.a11y.containerMessage:Slider Container`,
      containerRoleDescriptionMessage: $localize`:@@swiper.a11y.containerRoleDescriptionMessage:Contains wrapper for slides and pagination, scrollbar or navigation elements`,
      containerRole: 'region',
      itemRoleDescriptionMessage: $localize`:@@swiper.a11y.itemRoleDescriptionMessage:Non interactive content slider container`,
      slideLabelMessage: $localize`:@@swiper.a11y.slideLabelMessage:Slide element for content slider`,
      slideRole: 'group',
      scrollOnFocus: true,
    }
  };
}
