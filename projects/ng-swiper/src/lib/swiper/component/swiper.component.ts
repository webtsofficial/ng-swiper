import {
  ChangeDetectionStrategy,
  Component, computed,
  contentChildren, effect,
  ElementRef,
  inject, input, PLATFORM_ID,
  ViewEncapsulation
} from '@angular/core';
import Swiper from 'swiper';
import {NG_SWIPER_OPTIONS} from '../swiper.provider';
import {SwiperItemDirective} from '../item';
import {isPlatformBrowser, NgClass} from '@angular/common';
import {SwiperOptions} from 'swiper/types';

@Component({
  selector: 'ng-swiper',
  imports: [
    NgClass
  ],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'ng-swiper swiper',
  }
})
export class SwiperComponent {
  private _platform = inject(PLATFORM_ID);
  private _elRef = inject(ElementRef<HTMLElement>);
  private _default_options = inject(NG_SWIPER_OPTIONS);

  private _swiper?: Swiper;
  private _items = contentChildren(SwiperItemDirective);

  options = input<SwiperOptions>();

  currentOptions = computed(() => ({
    ...this._default_options,
    ...this.options()
  }));

  constructor() {
    if (isPlatformBrowser(this._platform)) {
      effect(() => {
        this._init(this._items(), this.currentOptions());
      });
    }
  }

  private _init(items: readonly SwiperItemDirective[], options: SwiperOptions): void {
    console.error('options', options);
    console.error('default_options', this._default_options);
    if (this._swiper) {
      this._swiper.destroy();
    }
    if (items.length) {
      this._swiper = new Swiper(this._elRef.nativeElement, options);
    }
  }
}
