import {ApplicationConfig, provideExperimentalZonelessChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration, withEventReplay} from '@angular/platform-browser';
import {
  provideNgSwiper,
  withA11y,
  withCardsEffect,
  withConfig,
  withController, withNavigation,
  withPagination,
  withThumbs,
} from '@webts/ng-swiper';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideNgSwiper(
      withConfig({
        effect: 'cards'
      }),
      withNavigation({}),
      withPagination({
        el: '.swiper-pagination',
        dynamicBullets: true,
        dynamicMainBullets: 3,
        clickable: true
      }),
      withController({}),
      withThumbs({}),
      withCardsEffect({}),
      withA11y({
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
      })
    ),
  ]
};
