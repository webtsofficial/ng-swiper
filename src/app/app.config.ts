import {ApplicationConfig, provideExperimentalZonelessChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration, withEventReplay} from '@angular/platform-browser';
import {provideNgSwiper} from '@webts/ng-swiper';
import {Pagination} from 'swiper/modules';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideNgSwiper({
      modules: [
        Pagination
      ],
      pagination: {
        el: '.ng-swiper--pagination',
        dynamicBullets: true,
      }
    }),
  ]
};
