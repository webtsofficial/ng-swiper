import {Directive, ElementRef, inject} from '@angular/core';
import { SwiperComponent } from '../component';
import { SwiperOptions } from 'swiper/types';

@Directive({
  selector: '[ngSwiperItem]',
  host: {
    '[class]': 'options.slideClass || "swiper-slide"',
    'aria-roledescription': 'slide'
  }
})
export class SwiperItemDirective {
  private _swiper = inject(SwiperComponent, {host: true})
  private _elRef = inject(ElementRef<HTMLElement>);

  get element(): HTMLElement {
    return this._elRef.nativeElement;
  }

  get options(): SwiperOptions {
    return this._swiper.currentOptions();
  }
}
