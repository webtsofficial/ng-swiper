import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component, computed,
  contentChildren, effect,
  ElementRef,
  inject, input, OnDestroy, PLATFORM_ID,
  ViewEncapsulation,
} from '@angular/core';
import Swiper from 'swiper/core';
import { NG_SWIPER_OPTIONS } from '../swiper.provider';
import {SwiperItemDirective} from '../item';
import {isPlatformBrowser} from '@angular/common';
import { SwiperEvents, SwiperOptions } from 'swiper/types';
import { SwiperInitError, SwiperNoSlidesError } from './swiper.errors';

@Component({
  selector: 'ng-swiper, div[ng-swiper]',
  imports: [],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'ng-swiper swiper',
  }
})
export class SwiperComponent implements AfterViewInit, OnDestroy {
  private _platform = inject(PLATFORM_ID);
  private _elRef: ElementRef<HTMLElement> = inject(ElementRef<HTMLElement>);
  private _default_options = inject(NG_SWIPER_OPTIONS);

  private _swiper?: Swiper;
  private _items = contentChildren(SwiperItemDirective);

  /** Override for default `NG_SWIPER_OPTIONS`  */
  options = input<SwiperOptions>();

  /** Merged `NG_SWIPER_OPTIONS` and `options` input into one object */
  currentOptions = computed<SwiperOptions>(() => ({
    ...this._default_options,
    ...this.options()
  }));

  /** @returns Current active slide index, or `-1` if `undefined`  */
  get activeIndex(): number {
    return this._swiper?.activeIndex !== undefined ? this._swiper?.activeIndex : -1;
  }

  constructor() {
    effect(() => {
      if (this._swiper && this._items()) {
        this._swiper.update();
      }
    });
  }

  ngAfterViewInit(): void {
    this._init(this._items(), this.currentOptions());
  }

  ngOnDestroy(): void {
    this._swiper?.destroy();
  }

  private _init(items: readonly SwiperItemDirective[], options: SwiperOptions): void {
    if (isPlatformBrowser(this._platform)) {
      if (items.length) {
        try {
          this._swiper = new Swiper(this._elRef.nativeElement, options);
        } catch (e) {
          throw new SwiperInitError(this.currentOptions(), this._swiper, e);
        }
      } else {
        console.warn(new SwiperNoSlidesError(this.currentOptions(), this._swiper));
      }
    }
  }

  /**
   * Add event handler (in component instead of globally)
   * @param event - SwiperEvent (like 'init', 'beforeDestroy', ...)
   * @param handler - handler function (typically `(swiper: Swiper) => void`, sometimes with extra parameters)
   * */
  on<E extends keyof SwiperEvents>(event: E, handler: SwiperEvents[E]): void {
    this._swiper?.on<E>(event, handler);
  }

  /**
   * Add event handler that will be removed after it was fired
   * @param event - SwiperEvent (like 'init', 'beforeDestroy', ...)
   * @param handler - handler function (typically `(swiper: Swiper) => void`, sometimes with extra parameters)
   * */
  once<E extends keyof SwiperEvents>(event: E, handler: SwiperEvents[E]): void {
    this._swiper?.once<E>(event, handler);
  }

  /**
   * Slide to given `index` (via `Swiper.slideTo()`)
   * @param index index, to slide to
   * @param speed transition duration (in ms)
   * @param runCallback Set it to false (by default it is true) and transition will not produce transition events.
   * @return index of the current slide
   * */
  slideTo(index: number, speed?: number, runCallback: boolean = true): number {
    this._swiper?.slideTo(index, speed, runCallback);
    return this.activeIndex;
  }

  /**
   * Slide to next slide (via `Swiper.slideNext()`)
   * @return index of the current slide
   * */
  slideNext(): number {
    this._swiper?.slideNext();
    return this.activeIndex;
  }

  /**
   * Slide to previous slide (via `Swiper.slidePrev()`)
   * @return index of the current slide
   * */
  slidePrev(): number {
    this._swiper?.slidePrev();
    return this.activeIndex;
  }
}
