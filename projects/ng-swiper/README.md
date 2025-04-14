# NgSwiper

## Setup

To setup ng-swiper, you have to add a provider, with a `SwiperConfig` in the `app.config.ts`:

```typescript
import {ApplicationConfig} from '@angular/core';
import {provideNgSwiper} from '@webts/ng-swiper';
import {Pagination} from 'swiper/modules';

export const appConfig: ApplicationConfig = {
  providers: [
    provideNgSwiper({}),
  ]
};
```

Then you can use the `SwiperComponent`, to insert a swiper instance and fill it with `SwiperItemDirective` children (at least 1, to not get warnings):

```html
<ng-swiper>
  <div ngSwiperItem></div>
</ng-swiper>
```

```typescript
@Component({
  template: `
    <ng-swiper>
      <div ngSwiperItem>Item 1</div>
      <div ngSwiperItem>Item 2</div>
      <div ngSwiperItem>Item 3</div>
    </ng-swiper>
  `,
  imports: [
    SwiperComponent,
    SwiperItemDirective
  ],
})
export class SwiperTestPage {}
```

Then you have to add the `swiper` styles to your `angular.json` or `main.ts`:

**`angular.json`**
```json
{
  "projects": {
    "some-project-name": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "node_modules/swiper/swiper.css",
              "node_modules/swiper/modules/pagination.css"
            ]
          }
        }
      }
    }
  }
}
```

**`main.ts`**:
```typescript
/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import 'swiper/css';
import 'swiper/css/pagination';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

```

Add minimum you have to import the `swiper.css` and all additional modules used.

this is also described in the [**Swiper Docs**](https://swiperjs.com/get-started) like following:

```javascript
// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  ...
});
```

> Don't forget to import all extra module styles

## Modules

To add modules from swiper, you have to add `SwiperFeatures` to the provide function:

`app.config.ts`:
```typescript
import {provideNgSwiper, withPagination} from '@webts/ng-swiper';

export const appConfig: ApplicationConfig = {
  providers: [
    provideNgSwiper(
      {},
      withPagination({
        el: '.swiper-pagination',
        dynamicBullets: true,
        dynamicMainBullets: 3
      }),
    ),
  ]
};
```

Here a list of the current supported features:

```typescript
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
```

### A11y

Accessibility gets more and more important - for a good documentation I recommend [W3C Carousel Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/) documentation

A sample config could look like this, when using `@angular/localize`:

```typescript
import { provideNgSwiper, withA11y } from '@webts/ng-swiper';

export const appConfig: ApplicationConfig = {
  providers: [
    provideNgSwiper(
      {},
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
```

## Difference in defaults from swiper

```typescript
export const NG_SWIPER_DEFAULT_OPTIONS: SwiperOptions = {
  grabCursor: true,
}
```

- **`wrapperClass`** overwrites the swiper default to this libraries default
- **`cssmode`** adds performance for simple use cases (but should be disabled for unit testing)
- **`grabCursor`** adds usability to desktop / mouse users
