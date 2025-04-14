import { EnvironmentProviders, InjectionToken, makeEnvironmentProviders, Provider } from '@angular/core';
import {
  A11yOptions,
  AutoplayOptions,
  ControllerOptions,
  CoverflowEffectOptions,
  CreativeEffectOptions,
  CubeEffectOptions,
  FadeEffectOptions,
  FlipEffectOptions,
  FreeModeOptions,
  GridOptions,
  HashNavigationOptions,
  HistoryOptions,
  KeyboardOptions,
  MousewheelOptions,
  NavigationOptions,
  PaginationOptions,
  ParallaxOptions,
  ScrollbarOptions,
  SwiperOptions,
  ThumbsOptions,
  VirtualOptions,
  ZoomOptions,
} from 'swiper/types';
import {
  A11y,
  Autoplay,
  Controller,
  EffectCoverflow,
  EffectCreative,
  EffectCube,
  EffectFade,
  EffectFlip, FreeMode, Grid,
  HashNavigation,
  History,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Parallax,
  Scrollbar,
  Thumbs,
  Virtual, Zoom,
} from 'swiper/modules';

export const NG_SWIPER_DEFAULT_OPTIONS: SwiperOptions = {
  // /** overwriting swiper default of `'swiper-'` */
  // containerModifierClass: 'ng-swiper-',
  // /** overwriting swiper default of `'swiper-wrapper'` */
  // wrapperClass: 'ng-swiper--wrapper',
  // cssMode: true,
  grabCursor: true,
};

export const NG_SWIPER_OPTIONS = new InjectionToken<SwiperOptions>('Default swiper options', {
  providedIn: 'root',
  factory: () => NG_SWIPER_DEFAULT_OPTIONS,
});

export type NgSwiperOptions = Omit<
  SwiperOptions,
  'a11y'
  | 'autoplay'
  | 'controller'
  | 'coverflowEffect'
  | 'cubeEffect'
  | 'fadeEffect'
  | 'flipEffect'
  | 'creativeEffect'
  | 'hashNavigation'
  | 'history'
  | 'keyboard'
  | 'mousewheel'
  | 'navigation'
  | 'pagination'
  | 'parallax'
  | 'scrollbar'
  | 'thumbs'
  | 'virtual'
  | 'zoom'
  | 'freeMode'
  | 'grid'
>;

export const enum SwiperFeatureKind {
  A11y,
  Autoplay,
  Controller,
  CoverflowEffect,
  CubeEffect,
  FadeEffect,
  FlipEffect,
  CreativeEffect,
  HashNavigation,
  History,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Parallax,
  Scrollbar,
  Thumbs,
  Virtual,
  Zoom,
  FreeMode,
  Grid,
}

export interface SwiperFeatureOptionsMap {
  [SwiperFeatureKind.A11y]: A11yOptions,
  [SwiperFeatureKind.Autoplay]: AutoplayOptions | boolean,
  [SwiperFeatureKind.Controller]: ControllerOptions,
  [SwiperFeatureKind.CoverflowEffect]: CoverflowEffectOptions,
  [SwiperFeatureKind.CubeEffect]: CubeEffectOptions,
  [SwiperFeatureKind.FadeEffect]: FadeEffectOptions,
  [SwiperFeatureKind.FlipEffect]: FlipEffectOptions,
  [SwiperFeatureKind.CreativeEffect]: CreativeEffectOptions,
  [SwiperFeatureKind.HashNavigation]: HashNavigationOptions | boolean,
  [SwiperFeatureKind.History]: HistoryOptions,
  [SwiperFeatureKind.Keyboard]: KeyboardOptions,
  [SwiperFeatureKind.Mousewheel]: MousewheelOptions,
  [SwiperFeatureKind.Navigation]: NavigationOptions,
  [SwiperFeatureKind.Pagination]: PaginationOptions,
  [SwiperFeatureKind.Parallax]: ParallaxOptions,
  [SwiperFeatureKind.Scrollbar]: ScrollbarOptions,
  [SwiperFeatureKind.Thumbs]: ThumbsOptions,
  [SwiperFeatureKind.Virtual]: VirtualOptions | boolean,
  [SwiperFeatureKind.Zoom]: ZoomOptions | boolean,
  [SwiperFeatureKind.FreeMode]: FreeModeOptions | boolean,
  [SwiperFeatureKind.Grid]: GridOptions,
}

/**
 * Helper type to represent a Swiper feature.
 *
 * @publicApi
 */
export interface SwiperFeature<FeatureKind extends SwiperFeatureKind> {
  ɵkind: FeatureKind;
  ɵproviders: Array<Provider | EnvironmentProviders>;
  options: SwiperFeatureOptionsMap[FeatureKind];
}

export function swiperFeature<FeatureKind extends SwiperFeatureKind>(
  kind: FeatureKind,
  providers: Array<Provider | EnvironmentProviders>,
  options: SwiperFeatureOptionsMap[FeatureKind],
): SwiperFeature<FeatureKind> {
  return {
    ɵkind: kind,
    ɵproviders: providers,
    options: options,
  }
}

export function withA11y(
  options: SwiperFeatureOptionsMap[SwiperFeatureKind.A11y]
): SwiperFeature<SwiperFeatureKind.A11y> {
  return swiperFeature(SwiperFeatureKind.A11y, [], options);
}

export function withAutoplay(options: SwiperFeatureOptionsMap[SwiperFeatureKind.Autoplay]): SwiperFeature<SwiperFeatureKind.Autoplay> {
  return swiperFeature(SwiperFeatureKind.Autoplay, [], options);
}

export function withController(
  options: SwiperFeatureOptionsMap[SwiperFeatureKind.Controller]
): SwiperFeature<SwiperFeatureKind.Controller> {
  return swiperFeature(SwiperFeatureKind.Controller, [], options);
}

export function withCoverflowEffect(
  options: SwiperFeatureOptionsMap[SwiperFeatureKind.CoverflowEffect]
): SwiperFeature<SwiperFeatureKind.CoverflowEffect> {
  return swiperFeature(SwiperFeatureKind.CoverflowEffect, [], options);
}

export function withCubeEffect(
  options: SwiperFeatureOptionsMap[SwiperFeatureKind.CubeEffect]
): SwiperFeature<SwiperFeatureKind.CubeEffect> {
  return swiperFeature(SwiperFeatureKind.CubeEffect, [], options);
}

export function withFadeEffect(
  options: SwiperFeatureOptionsMap[SwiperFeatureKind.FadeEffect]
): SwiperFeature<SwiperFeatureKind.FadeEffect> {
  return swiperFeature(SwiperFeatureKind.FadeEffect, [], options);
}

export function withFlipEffect(
  options: SwiperFeatureOptionsMap[SwiperFeatureKind.FlipEffect]
): SwiperFeature<SwiperFeatureKind.FlipEffect> {
  return swiperFeature(SwiperFeatureKind.FlipEffect, [], options);
}

export function withCreativeEffect(
  options: SwiperFeatureOptionsMap[SwiperFeatureKind.CreativeEffect]
): SwiperFeature<SwiperFeatureKind.CreativeEffect> {
  return swiperFeature(SwiperFeatureKind.CreativeEffect, [], options);
}

export function withHashNavigation(
  options: SwiperFeatureOptionsMap[SwiperFeatureKind.HashNavigation]
): SwiperFeature<SwiperFeatureKind.HashNavigation> {
  return swiperFeature(SwiperFeatureKind.HashNavigation, [], options);
}

export function withHistory(
  options: SwiperFeatureOptionsMap[SwiperFeatureKind.History]
): SwiperFeature<SwiperFeatureKind.History> {
  return swiperFeature(SwiperFeatureKind.History, [], options);
}

export function withKeyboard(
  options: SwiperFeatureOptionsMap[SwiperFeatureKind.Keyboard]
): SwiperFeature<SwiperFeatureKind.Keyboard> {
  return swiperFeature(SwiperFeatureKind.Keyboard, [], options);
}

export function withMousewheel(
  options: SwiperFeatureOptionsMap[SwiperFeatureKind.Mousewheel]
): SwiperFeature<SwiperFeatureKind.Mousewheel> {
  return swiperFeature(SwiperFeatureKind.Mousewheel, [], options);
}

export function withNavigation(
  options: SwiperFeatureOptionsMap[SwiperFeatureKind.Navigation]
): SwiperFeature<SwiperFeatureKind.Navigation> {
  return swiperFeature(SwiperFeatureKind.Navigation, [], options);
}

export function withPagination(
  options: SwiperFeatureOptionsMap[SwiperFeatureKind.Pagination]
): SwiperFeature<SwiperFeatureKind.Pagination> {
  return swiperFeature(SwiperFeatureKind.Pagination, [], options);
}

export function withParallax(
  options: SwiperFeatureOptionsMap[SwiperFeatureKind.Parallax]
): SwiperFeature<SwiperFeatureKind.Parallax> {
  return swiperFeature(SwiperFeatureKind.Parallax, [], options);
}

export function withScrollbar(
  options: SwiperFeatureOptionsMap[SwiperFeatureKind.Scrollbar]
): SwiperFeature<SwiperFeatureKind.Scrollbar> {
  return swiperFeature(SwiperFeatureKind.Scrollbar, [], options);
}

export function withThumbs(
  options: SwiperFeatureOptionsMap[SwiperFeatureKind.Thumbs]
): SwiperFeature<SwiperFeatureKind.Thumbs> {
  return swiperFeature(SwiperFeatureKind.Thumbs, [], options);
}

export function withVirtual(
  options: SwiperFeatureOptionsMap[SwiperFeatureKind.Virtual]
): SwiperFeature<SwiperFeatureKind.Virtual> {
  return swiperFeature(SwiperFeatureKind.Virtual, [], options);
}

export function withZoom(
  options: SwiperFeatureOptionsMap[SwiperFeatureKind.Zoom]
): SwiperFeature<SwiperFeatureKind.Zoom> {
  return swiperFeature(SwiperFeatureKind.Zoom, [], options);
}

export function withFreeMode(
  options: SwiperFeatureOptionsMap[SwiperFeatureKind.FreeMode]
): SwiperFeature<SwiperFeatureKind.FreeMode> {
  return swiperFeature(SwiperFeatureKind.FreeMode, [], options);
}

export function withGrid(
  options: SwiperFeatureOptionsMap[SwiperFeatureKind.Grid]
): SwiperFeature<SwiperFeatureKind.Grid> {
  return swiperFeature(SwiperFeatureKind.Grid, [], options);
}


/**
 * provides basic swiper config for the application
 * @param options `SwiperOptions` fpr thr application (except supported module configs)
 * @param features `NgSwiperFeature` for module configs like pagination or navigation
 * */
export function provideNgSwiper(
  options: NgSwiperOptions,
  ...features: SwiperFeature<any>[]
): EnvironmentProviders {
  const combinedOptions: SwiperOptions = options;

  if (!combinedOptions.modules) {
    combinedOptions.modules = [];
  }

  // set option from features
  features.forEach(feature => {
    switch (feature.ɵkind) {
      case SwiperFeatureKind.A11y:
        combinedOptions.modules?.push(A11y);
        combinedOptions.a11y = feature.options;
        break;
      case SwiperFeatureKind.Autoplay:
        combinedOptions.modules?.push(Autoplay);
        combinedOptions.autoplay = feature.options;
        break;
      case SwiperFeatureKind.Controller:
        combinedOptions.modules?.push(Controller);
        combinedOptions.controller = feature.options;
        break;
      case SwiperFeatureKind.CoverflowEffect:
        combinedOptions.modules?.push(EffectCoverflow);
        combinedOptions.coverflowEffect = feature.options;
        break;
      case SwiperFeatureKind.CubeEffect:
        combinedOptions.modules?.push(EffectCube);
        combinedOptions.cubeEffect = feature.options;
        break;
      case SwiperFeatureKind.FadeEffect:
        combinedOptions.modules?.push(EffectFade);
        combinedOptions.fadeEffect = feature.options;
        break;
      case SwiperFeatureKind.FlipEffect:
        combinedOptions.modules?.push(EffectFlip);
        combinedOptions.flipEffect = feature.options;
        break;
      case SwiperFeatureKind.CreativeEffect:
        combinedOptions.modules?.push(EffectCreative);
        combinedOptions.creativeEffect = feature.options;
        break;
      case SwiperFeatureKind.HashNavigation:
        combinedOptions.modules?.push(HashNavigation);
        combinedOptions.hashNavigation = feature.options;
        break;
      case SwiperFeatureKind.History:
        combinedOptions.modules?.push(History);
        combinedOptions.history = feature.options;
        break;
      case SwiperFeatureKind.Keyboard:
        combinedOptions.modules?.push(Keyboard);
        combinedOptions.keyboard = feature.options;
        break;
      case SwiperFeatureKind.Mousewheel:
        combinedOptions.modules?.push(Mousewheel);
        combinedOptions.mousewheel = feature.options;
        break;
      case SwiperFeatureKind.Navigation:
        combinedOptions.modules?.push(Navigation);
        combinedOptions.navigation = feature.options;
        break;
      case SwiperFeatureKind.Pagination:
        combinedOptions.modules?.push(Pagination);
        combinedOptions.pagination = feature.options;
        break;
      case SwiperFeatureKind.Parallax:
        combinedOptions.modules?.push(Parallax);
        combinedOptions.parallax = feature.options;
        break;
      case SwiperFeatureKind.Scrollbar:
        combinedOptions.modules?.push(Scrollbar);
        combinedOptions.scrollbar = feature.options;
        break;
      case SwiperFeatureKind.Thumbs:
        combinedOptions.modules?.push(Thumbs);
        combinedOptions.thumbs = feature.options;
        break;
      case SwiperFeatureKind.Virtual:
        combinedOptions.modules?.push(Virtual);
        combinedOptions.virtual = feature.options;
        break;
      case SwiperFeatureKind.Zoom:
        combinedOptions.modules?.push(Zoom);
        combinedOptions.zoom = feature.options;
        break;
      case SwiperFeatureKind.FreeMode:
        combinedOptions.modules?.push(FreeMode);
        combinedOptions.freeMode = feature.options;
        break;
      case SwiperFeatureKind.Grid:
        combinedOptions.modules?.push(Grid);
        combinedOptions.grid = feature.options;
        break;
    }
  });

  return makeEnvironmentProviders([
    { provide: NG_SWIPER_OPTIONS, useValue: { ...NG_SWIPER_DEFAULT_OPTIONS, ...combinedOptions } },
    features.map(feature => feature.ɵproviders),
  ]);
}
