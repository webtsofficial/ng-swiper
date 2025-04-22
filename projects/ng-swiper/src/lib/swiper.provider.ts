import {
    EnvironmentProviders,
    InjectionToken,
    makeEnvironmentProviders,
    Provider,
} from '@angular/core';
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
    ScrollbarOptions,
    SwiperModule,
    SwiperOptions,
    ThumbsOptions,
    VirtualOptions,
    ZoomOptions,
} from 'swiper/types';

/** Default `SwiperOption` value */
export const NG_SWIPER_DEFAULT_OPTIONS: SwiperOptions = {
    grabCursor: true,
};

/** Global `SwiperOption` `InjectionToken`, provided by `provideNgSwiper(features)` */
export const NG_SWIPER_OPTIONS = new InjectionToken<SwiperOptions>(
    'Default swiper options',
    {
        providedIn: 'root',
        factory: () => NG_SWIPER_DEFAULT_OPTIONS,
    },
);

/** `SwiperOption` excluding all fields, which are part of a module */
export type NgSwiperOptions = Omit<
    SwiperOptions,
    | 'a11y'
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

/** Kind of swiper feature provided in `provideNgSwiperFeatures)` */
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

/** Maps `SwiperFeatureKind` to the type of options needed for that module */
export interface SwiperFeatureOptionsMap {
    [SwiperFeatureKind.Config]: NgSwiperOptions;
    [SwiperFeatureKind.A11y]: A11yOptions;
    [SwiperFeatureKind.Autoplay]: AutoplayOptions | boolean;
    [SwiperFeatureKind.Controller]: ControllerOptions;
    [SwiperFeatureKind.CardsEffect]: CardsEffectOptions;
    [SwiperFeatureKind.CoverflowEffect]: CoverflowEffectOptions;
    [SwiperFeatureKind.CubeEffect]: CubeEffectOptions;
    [SwiperFeatureKind.FadeEffect]: FadeEffectOptions;
    [SwiperFeatureKind.FlipEffect]: FlipEffectOptions;
    [SwiperFeatureKind.CreativeEffect]: CreativeEffectOptions;
    [SwiperFeatureKind.HashNavigation]: HashNavigationOptions | boolean;
    [SwiperFeatureKind.History]: HistoryOptions;
    [SwiperFeatureKind.Keyboard]: KeyboardOptions;
    [SwiperFeatureKind.Mousewheel]: MousewheelOptions;
    [SwiperFeatureKind.Navigation]: NavigationOptions;
    [SwiperFeatureKind.Pagination]: PaginationOptions;
    [SwiperFeatureKind.Parallax]: ParallaxOptions;
    [SwiperFeatureKind.Scrollbar]: ScrollbarOptions;
    [SwiperFeatureKind.Thumbs]: ThumbsOptions;
    [SwiperFeatureKind.Virtual]: VirtualOptions | boolean;
    [SwiperFeatureKind.Zoom]: ZoomOptions | boolean;
    [SwiperFeatureKind.FreeMode]: FreeModeOptions | boolean;
    [SwiperFeatureKind.Grid]: GridOptions;
}

/** Helper type to represent a Swiper feature typed by generic `SwiperFeatureKind` */
export interface SwiperFeature<FeatureKind extends SwiperFeatureKind> {
    ɵkind: FeatureKind;
    ɵproviders: Array<Provider | EnvironmentProviders>;
    options: SwiperFeatureOptionsMap[FeatureKind];
}

/**
 * Factory to create `SwiperFeature`
 * @param kind generic type extending `SwiperFeatureKind`
 * @param providers additional providers for the feature
 * @param options options, which type gets referred by the generic `FeatureKind`
 * @returns `SwiperFeature` object, with options and kind depending on generic
 * */
export function swiperFeature<FeatureKind extends SwiperFeatureKind>(
    kind: FeatureKind,
    providers: Array<Provider | EnvironmentProviders>,
    options: SwiperFeatureOptionsMap[FeatureKind],
): SwiperFeature<FeatureKind> {
    return {
        ɵkind: kind,
        ɵproviders: providers,
        options: options,
    };
}

/**
 * Creates a configuration function for the core Swiper setup.
 * This function allows passing global Swiper configuration options.
 *
 * @param options - The configuration (`NgSwiperOptions`) options for the main Swiper module.
 * @returns A SwiperFeature object for the core configuration.
 */
export function withConfig(
    options: SwiperFeatureOptionsMap[SwiperFeatureKind.Config],
): SwiperFeature<SwiperFeatureKind.Config> {
    return swiperFeature(SwiperFeatureKind.Config, [], options);
}

/**
 * Creates a configuration function for the Swiper Accessibility (A11y) module.
 * This module enhances the slider's accessibility for users with assistive technologies.
 *
 * @param options - The `A11yOptions` for the A11y module.
 * @returns A SwiperFeature object for the A11y feature.
 */
export function withA11y(
    options: SwiperFeatureOptionsMap[SwiperFeatureKind.A11y],
): SwiperFeature<SwiperFeatureKind.A11y> {
    return swiperFeature(SwiperFeatureKind.A11y, [], options);
}

/**
 * Creates a configuration function for the Swiper Autoplay module.
 * This module enables automatic transitioning between slides.
 *
 * @param options - The `AutoplayOptions | boolean` for the Autoplay module.
 * @returns A SwiperFeature object for the Autoplay feature.
 */
export function withAutoplay(
    options: SwiperFeatureOptionsMap[SwiperFeatureKind.Autoplay],
): SwiperFeature<SwiperFeatureKind.Autoplay> {
    return swiperFeature(SwiperFeatureKind.Autoplay, [], options);
}

/**
 * Creates a configuration function for the Swiper Controller module.
 * This module allows controlling one Swiper instance by another.
 *
 * @param options - The `ControllerOptions` for the Controller module.
 * @returns A SwiperFeature object for the Controller feature.
 */
export function withController(
    options: SwiperFeatureOptionsMap[SwiperFeatureKind.Controller],
): SwiperFeature<SwiperFeatureKind.Controller> {
    return swiperFeature(SwiperFeatureKind.Controller, [], options);
}

/**
 * Creates a configuration function for the Swiper Cards Effect.
 * This effect displays slides as a stack of cards.
 *
 * @param options - The `CardsEffectOptions` for the Cards Effect.
 * @returns A SwiperFeature object for the Cards Effect.
 */
export function withCardsEffect(
    options: SwiperFeatureOptionsMap[SwiperFeatureKind.CardsEffect],
): SwiperFeature<SwiperFeatureKind.CardsEffect> {
    return swiperFeature(SwiperFeatureKind.CardsEffect, [], options);
}

/**
 * Creates a configuration function for the Swiper Coverflow Effect.
 * This effect displays slides in a 3D coverflow perspective.
 *
 * @param options - The `CoverflowEffectOptions` for the Coverflow Effect.
 * @returns A SwiperFeature object for the Coverflow Effect.
 */
export function withCoverflowEffect(
    options: SwiperFeatureOptionsMap[SwiperFeatureKind.CoverflowEffect],
): SwiperFeature<SwiperFeatureKind.CoverflowEffect> {
    return swiperFeature(SwiperFeatureKind.CoverflowEffect, [], options);
}

/**
 * Creates a configuration function for the Swiper Cube Effect.
 * This effect displays slides as faces of a rotating 3D cube.
 *
 * @param options - The `CubeEffectOptions` for the Cube Effect.
 * @returns A SwiperFeature object for the Cube Effect.
 */
export function withCubeEffect(
    options: SwiperFeatureOptionsMap[SwiperFeatureKind.CubeEffect],
): SwiperFeature<SwiperFeatureKind.CubeEffect> {
    return swiperFeature(SwiperFeatureKind.CubeEffect, [], options);
}

/**
 * Creates a configuration function for the Swiper Fade Effect.
 * This effect fades slides in and out during transitions.
 *
 * @param options - The `FadeEffectOptions` for the Fade Effect.
 * @returns A SwiperFeature object for the Fade Effect.
 */
export function withFadeEffect(
    options: SwiperFeatureOptionsMap[SwiperFeatureKind.FadeEffect],
): SwiperFeature<SwiperFeatureKind.FadeEffect> {
    return swiperFeature(SwiperFeatureKind.FadeEffect, [], options);
}

/**
 * Creates a configuration function for the Swiper Flip Effect.
 * This effect flips slides around an axis during transitions.
 *
 * @param options - The `FlipEffectOptions` for the Flip Effect.
 * @returns A SwiperFeature object for the Flip Effect.
 */
export function withFlipEffect(
    options: SwiperFeatureOptionsMap[SwiperFeatureKind.FlipEffect],
): SwiperFeature<SwiperFeatureKind.FlipEffect> {
    return swiperFeature(SwiperFeatureKind.FlipEffect, [], options);
}

/**
 * Creates a configuration function for the Swiper Creative Effect.
 * This effect allows defining custom, creative transition effects.
 *
 * @param options - The `CreativeEffectOptions` for the Creative Effect.
 * @returns A SwiperFeature object for the Creative Effect.
 */
export function withCreativeEffect(
    options: SwiperFeatureOptionsMap[SwiperFeatureKind.CreativeEffect],
): SwiperFeature<SwiperFeatureKind.CreativeEffect> {
    return swiperFeature(SwiperFeatureKind.CreativeEffect, [], options);
}

/**
 * Creates a configuration function for the Swiper HashNavigation module.
 * This module allows controlling the slider using URL hash values (#).
 *
 * @param options - The `HashNavigationOptions | boolean` for the HashNavigation module.
 * @returns A SwiperFeature object for the HashNavigation feature.
 */
export function withHashNavigation(
    options: SwiperFeatureOptionsMap[SwiperFeatureKind.HashNavigation],
): SwiperFeature<SwiperFeatureKind.HashNavigation> {
    return swiperFeature(SwiperFeatureKind.HashNavigation, [], options);
}

/**
 * Creates a configuration function for the Swiper History module.
 * This module integrates the slider state with the browser's history (History API).
 *
 * @param options - The `HistoryOptions` for the History module.
 * @returns A SwiperFeature object for the History feature.
 */
export function withHistory(
    options: SwiperFeatureOptionsMap[SwiperFeatureKind.History],
): SwiperFeature<SwiperFeatureKind.History> {
    return swiperFeature(SwiperFeatureKind.History, [], options);
}

/**
 * Creates a configuration function for the Swiper Keyboard module.
 * This module enables controlling the slider using the keyboard.
 *
 * @param options - The `KeyboardOptions` for the Keyboard module.
 * @returns A SwiperFeature object for the Keyboard feature.
 */
export function withKeyboard(
    options: SwiperFeatureOptionsMap[SwiperFeatureKind.Keyboard],
): SwiperFeature<SwiperFeatureKind.Keyboard> {
    return swiperFeature(SwiperFeatureKind.Keyboard, [], options);
}

/**
 * Creates a configuration function for the Swiper Mousewheel module.
 * This module enables controlling the slider using the mouse wheel.
 *
 * @param options - The `MousewheelOptions` for the Mousewheel module.
 * @returns A SwiperFeature object for the Mousewheel feature.
 */
export function withMousewheel(
    options: SwiperFeatureOptionsMap[SwiperFeatureKind.Mousewheel],
): SwiperFeature<SwiperFeatureKind.Mousewheel> {
    return swiperFeature(SwiperFeatureKind.Mousewheel, [], options);
}

/**
 * Creates a configuration function for the Swiper Navigation module.
 * This module adds previous/next navigation arrows.
 *
 * @param options - The `NavigationOptions` for the Navigation module.
 * @returns A SwiperFeature object for the Navigation feature.
 */
export function withNavigation(
    options: SwiperFeatureOptionsMap[SwiperFeatureKind.Navigation],
): SwiperFeature<SwiperFeatureKind.Navigation> {
    return swiperFeature(SwiperFeatureKind.Navigation, [], options);
}

/**
 * Creates a configuration function for the Swiper Pagination module.
 * This module adds pagination dots (bullets) to indicate the current slide.
 *
 * @param options - The `PaginationOptions` for the Pagination module.
 * @returns A SwiperFeature object for the Pagination feature.
 */
export function withPagination(
    options: SwiperFeatureOptionsMap[SwiperFeatureKind.Pagination],
): SwiperFeature<SwiperFeatureKind.Pagination> {
    return swiperFeature(SwiperFeatureKind.Pagination, [], options);
}

/**
 * Creates a configuration function for the Swiper Parallax module.
 * This module enables parallax scrolling effects for elements within slides.
 *
 * @param options - The `ParallaxOptions` for the Parallax module.
 * @returns A SwiperFeature object for the Parallax feature.
 */
export function withParallax(
    options: SwiperFeatureOptionsMap[SwiperFeatureKind.Parallax],
): SwiperFeature<SwiperFeatureKind.Parallax> {
    return swiperFeature(SwiperFeatureKind.Parallax, [], options);
}

/**
 * Creates a configuration function for the Swiper Scrollbar module.
 * This module adds a scrollbar for navigation.
 *
 * @param options - The `ScrollbarOptions` for the Scrollbar module.
 * @returns A SwiperFeature object for the Scrollbar feature.
 */
export function withScrollbar(
    options: SwiperFeatureOptionsMap[SwiperFeatureKind.Scrollbar],
): SwiperFeature<SwiperFeatureKind.Scrollbar> {
    return swiperFeature(SwiperFeatureKind.Scrollbar, [], options);
}

/**
 * Creates a configuration function for the Swiper Thumbs module.
 * This module allows linking a main Swiper instance with a thumbnail Swiper instance.
 *
 * @param options - The `ThumbsOptions` for the Thumbs module.
 * @returns A SwiperFeature object for the Thumbs feature.
 */
export function withThumbs(
    options: SwiperFeatureOptionsMap[SwiperFeatureKind.Thumbs],
): SwiperFeature<SwiperFeatureKind.Thumbs> {
    return swiperFeature(SwiperFeatureKind.Thumbs, [], options);
}

/**
 * Creates a configuration function for the Swiper Virtual module.
 * This module renders only visible slides, improving performance for a large number of slides.
 *
 * @param options - The `VirtualOptions | boolean` for the Virtual module.
 * @returns A SwiperFeature object for the Virtual feature.
 */
export function withVirtual(
    options: SwiperFeatureOptionsMap[SwiperFeatureKind.Virtual],
): SwiperFeature<SwiperFeatureKind.Virtual> {
    return swiperFeature(SwiperFeatureKind.Virtual, [], options);
}

/**
 * Creates a configuration function for the Swiper Zoom module.
 * This module enables zooming into images within slides.
 *
 * @param options - The `ZoomOption | booleans` for the Zoom module.
 * @returns A SwiperFeature object for the Zoom feature.
 */
export function withZoom(
    options: SwiperFeatureOptionsMap[SwiperFeatureKind.Zoom],
): SwiperFeature<SwiperFeatureKind.Zoom> {
    return swiperFeature(SwiperFeatureKind.Zoom, [], options);
}

/**
 * Creates a configuration function for the Swiper FreeMode module.
 * This module allows free scrolling without snapping to specific slides.
 *
 * @param options - The `FreeModeEffectOptions | boolean` for the FreeMode module.
 * @returns A SwiperFeature object for the FreeMode feature.
 */
export function withFreeMode(
    options: SwiperFeatureOptionsMap[SwiperFeatureKind.FreeMode],
): SwiperFeature<SwiperFeatureKind.FreeMode> {
    return swiperFeature(SwiperFeatureKind.FreeMode, [], options);
}

/**
 * Creates a configuration function for the Swiper Grid module.
 * This module allows arranging slides in a multi-row grid layout.
 *
 * @param options - The `GridOptions | boolean` for the Grid module.
 * @returns A SwiperFeature object for the Grid feature.
 */
export function withGrid(
    options: SwiperFeatureOptionsMap[SwiperFeatureKind.Grid],
): SwiperFeature<SwiperFeatureKind.Grid> {
    return swiperFeature(SwiperFeatureKind.Grid, [], options);
}

/**
 * check if module already exists in a list of `SwiperModule[]`
 * @param module - module to search for
 * @param modules - modules to search in
 * @return true, if module is not already inside the module array
 * */
export function moduleNotExists(
    module: SwiperModule,
    modules?: SwiperModule[],
): boolean {
    return modules?.findIndex((mods) => mods.name === module.name) === -1;
}

/**
 * Combines an array of features to a `SwiperOption` object
 * @param features list of `SwiperFeature<any>[]`, which contain the options for the swiper
 * @returns constructed `SwiperOption` object
 * */
export function combineFeaturesToOptions(
    ...features: SwiperFeature<any>[]
): SwiperOptions {
    const options: SwiperOptions =
        features.find((feature) => feature.ɵkind === SwiperFeatureKind.Config)
            ?.options || NG_SWIPER_DEFAULT_OPTIONS;

    if (!options.modules) {
        options.modules = [];
    }
    // set option from features
    features.forEach((feature) => {
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

export interface SwiperElements {
    navigation?: {
        prevEl?: HTMLElement | string;
        nextEl?: HTMLElement | string;
    };
    pagination?: {
        el?: HTMLElement | string;
    },
    scrollbar?: {
        el?: HTMLElement | string;
    },
    history?: {
        root?: string;
    }
}

export function mapOptions(opts: SwiperOptions, config: SwiperElements): SwiperOptions {
    if (opts.navigation) {
        if (typeof opts.navigation === 'boolean') {
            opts.navigation = { enabled: true };
        }
        opts.navigation.prevEl = opts.navigation?.prevEl || config.navigation?.prevEl;
        opts.navigation.nextEl = opts.navigation?.nextEl || config.navigation?.nextEl;
    }
    if (opts.pagination) {
        if (typeof opts.pagination === 'boolean') {
            opts.pagination = { enabled: true };
        }
        opts.pagination.el = opts.pagination?.el || config.pagination?.el;
    }
    if (opts.scrollbar) {
        if (typeof opts.scrollbar === 'boolean') {
            opts.scrollbar = { enabled: true };
        }
        opts.scrollbar.el = opts.scrollbar?.el || config.scrollbar?.el;
    }
    if (opts.history) {
        if (typeof opts.history === 'boolean') {
            opts.history = { enabled: true };
        }
        opts.history.root = opts.history?.root || config.history?.root;
    }
    return opts;
}

/**
 * provides basic swiper config for the application
 * @param features `NgSwiperFeature` for module configs like pagination or navigation
 * @returns environment providers for swiper
 * */
export function provideNgSwiper(
    ...features: SwiperFeature<any>[]
): EnvironmentProviders {
    return makeEnvironmentProviders([
        {
            provide: NG_SWIPER_OPTIONS,
            useValue: {
                ...NG_SWIPER_DEFAULT_OPTIONS,
                ...combineFeaturesToOptions(...features),
            },
        },
        ...features.map((feature) => feature.ɵproviders),
    ]);
}
