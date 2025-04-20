import { Directive, inject } from '@angular/core';
import {SwiperComponent} from '../swiper.component';
import { SwiperOptions } from 'swiper/types';

@Directive({
  selector: '[ngSwiperItem]',
  host: {
    '[id]': 'id',
    '[class]': 'options.slideClass || "swiper-slide"',
    'aria-roledescription': 'slide'
  }
})
export class SwiperItemDirective {
  static nextId: number = 0;
  id = `ng-swiper-item-${SwiperItemDirective.nextId++}`;

  private _swiper = inject(SwiperComponent, {host: true})

  get options(): SwiperOptions {
    return this._swiper.options() || this._swiper.options_global;
  }
}
