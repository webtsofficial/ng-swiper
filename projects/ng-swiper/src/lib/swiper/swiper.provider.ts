import {EnvironmentProviders, InjectionToken, makeEnvironmentProviders} from '@angular/core';
import {SwiperOptions} from 'swiper/types';

export const NG_SWIPER_DEFAULT_OPTIONS: SwiperOptions = {
  wrapperClass: 'ng-swiper--wrapper',
}

export const NG_SWIPER_OPTIONS = new InjectionToken<SwiperOptions>('Default swiper options', {
  providedIn: 'root',
  factory: () => NG_SWIPER_DEFAULT_OPTIONS,
});

export function provideNgSwiper(option: SwiperOptions): EnvironmentProviders {
  return makeEnvironmentProviders([
    {provide: NG_SWIPER_OPTIONS, useValue: {...NG_SWIPER_DEFAULT_OPTIONS, ...option}},
  ]);
}
