import { EnvironmentProviders, InjectionToken, makeEnvironmentProviders, Provider } from '@angular/core';
import {
  A11yOptions,
  AutoplayOptions,
  CardsEffectOptions,
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
  ScrollbarOptions, SwiperModule,
  SwiperOptions,
  ThumbsOptions,
  VirtualOptions,
  ZoomOptions,
} from 'swiper/types';
import {
  A11y,
  Autoplay,
  Controller,
  EffectCards,
  EffectCoverflow,
  EffectCreative,
  EffectCube,
  EffectFade,
  EffectFlip,
  FreeMode,
  Grid,
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
} from 'swiper/modules';

export const NG_SWIPER_DEFAULT_OPTIONS: SwiperOptions = {
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
  | 'cardsEffect'
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
  Config,
  A11y,
  Autoplay,
  Controller,
  CardsEffect,
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
  [SwiperFeatureKind.Config]: NgSwiperOptions,
  [SwiperFeatureKind.A11y]: A11yOptions,
  [SwiperFeatureKind.Autoplay]: AutoplayOptions | boolean,
  [SwiperFeatureKind.Controller]: ControllerOptions,
  [SwiperFeatureKind.CardsEffect]: CardsEffectOptions,
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

export function withConfig(
  options: SwiperFeatureOptionsMap[SwiperFeatureKind.Config]
): SwiperFeature<SwiperFeatureKind.Config> {
  return swiperFeature(SwiperFeatureKind.Config, [], options);
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

export function withCardsEffect(
  options: SwiperFeatureOptionsMap[SwiperFeatureKind.CardsEffect]
): SwiperFeature<SwiperFeatureKind.CardsEffect> {
  return swiperFeature(SwiperFeatureKind.CardsEffect, [], options);
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

export function moduleNotExists(module: SwiperModule, modules?: SwiperModule[]): boolean {
  return modules?.findIndex(mods => mods.name === module.name) === -1;
}

export function combineFeaturesWithOptions(...features: SwiperFeature<any>[]): SwiperOptions {
  const options: SwiperOptions = features.find(
      feature => feature.ɵkind === SwiperFeatureKind.Config)?.options
    || NG_SWIPER_DEFAULT_OPTIONS;

  if (!options.modules) {
    options.modules = [];
  }
  // set option from features
  features.forEach(feature => {
    switch (feature.ɵkind) {
      case SwiperFeatureKind.A11y:
        options.modules?.push(A11y);
        options.a11y = feature.options;
        break;
      case SwiperFeatureKind.Autoplay:
        if (moduleNotExists(Autoplay, options.modules)) {
          options.modules?.push(Autoplay);
        }
        options.autoplay = feature.options;
        break;
      case SwiperFeatureKind.Controller:
        if (moduleNotExists(Controller, options.modules)) {
          options.modules?.push(Controller);
        }
        options.controller = feature.options;
        break;
      case SwiperFeatureKind.CardsEffect:
        if (moduleNotExists(EffectCards, options.modules)) {
          options.modules?.push(EffectCards);
        }
        options.cardsEffect = feature.options;
        break;
      case SwiperFeatureKind.CoverflowEffect:
        if (moduleNotExists(EffectCoverflow, options.modules)) {
          options.modules?.push(EffectCoverflow);
        }
        options.coverflowEffect = feature.options;
        break;
      case SwiperFeatureKind.CubeEffect:
        if (moduleNotExists(EffectCube, options.modules)) {
          options.modules?.push(EffectCube);
        }
        options.cubeEffect = feature.options;
        break;
      case SwiperFeatureKind.FadeEffect:
        if (moduleNotExists(EffectFade, options.modules)) {
          options.modules?.push(EffectFade);
        }
        options.fadeEffect = feature.options;
        break;
      case SwiperFeatureKind.FlipEffect:
        if (moduleNotExists(EffectFlip, options.modules)) {
          options.modules?.push(EffectFlip);
        }
        options.flipEffect = feature.options;
        break;
      case SwiperFeatureKind.CreativeEffect:
        if (moduleNotExists(EffectCreative, options.modules)) {
          options.modules?.push(EffectCreative);
        }
        options.creativeEffect = feature.options;
        break;
      case SwiperFeatureKind.HashNavigation:
        if (moduleNotExists(HashNavigation, options.modules)) {
          options.modules?.push(HashNavigation);
        }
        options.hashNavigation = feature.options;
        break;
      case SwiperFeatureKind.History:
        if (moduleNotExists(History, options.modules)) {
          options.modules?.push(History);
        }
        options.history = feature.options;
        break;
      case SwiperFeatureKind.Keyboard:
        if (moduleNotExists(Keyboard, options.modules)) {
          options.modules?.push(Keyboard);
        }
        options.keyboard = feature.options;
        break;
      case SwiperFeatureKind.Mousewheel:
        if (moduleNotExists(Mousewheel, options.modules)) {
          options.modules?.push(Mousewheel);
        }
        options.mousewheel = feature.options;
        break;
      case SwiperFeatureKind.Navigation:
        if (moduleNotExists(Navigation, options.modules)) {
          options.modules?.push(Navigation);
        }
        options.navigation = feature.options;
        break;
      case SwiperFeatureKind.Pagination:
        if (moduleNotExists(Pagination, options.modules)) {
          options.modules?.push(Pagination);
        }
        options.pagination = feature.options;
        break;
      case SwiperFeatureKind.Parallax:
        if (moduleNotExists(Parallax, options.modules)) {
          options.modules?.push(Parallax);
        }
        options.parallax = feature.options;
        break;
      case SwiperFeatureKind.Scrollbar:
        if (moduleNotExists(Scrollbar, options.modules)) {
          options.modules?.push(Scrollbar);
        }
        options.scrollbar = feature.options;
        break;
      case SwiperFeatureKind.Thumbs:
        if (moduleNotExists(Thumbs, options.modules)) {
          options.modules?.push(Thumbs);
        }
        options.thumbs = feature.options;
        break;
      case SwiperFeatureKind.Virtual:
        if (moduleNotExists(Virtual, options.modules)) {
          options.modules?.push(Virtual);
        }
        options.virtual = feature.options;
        break;
      case SwiperFeatureKind.Zoom:
        if (moduleNotExists(Zoom, options.modules)) {
          options.modules?.push(Zoom);
        }
        options.zoom = feature.options;
        break;
      case SwiperFeatureKind.FreeMode:
        if (moduleNotExists(FreeMode, options.modules)) {
          options.modules?.push(FreeMode);
        }
        options.freeMode = feature.options;
        break;
      case SwiperFeatureKind.Grid:
        if (moduleNotExists(Grid, options.modules)) {
          options.modules?.push(Grid);
        }
        options.grid = feature.options;
        break;
    }
  });
  return options;
}


/**
 * provides basic swiper config for the application
 * @param options `SwiperOptions` fpr thr application (except supported module configs)
 * @param features `NgSwiperFeature` for module configs like pagination or navigation
 * */
export function provideNgSwiper(
  ...features: SwiperFeature<any>[]
): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: NG_SWIPER_OPTIONS,
      useValue: { ...NG_SWIPER_DEFAULT_OPTIONS, ...combineFeaturesWithOptions(...features) }
    },
    ...features.map(feature => feature.ɵproviders),
  ]);
}
