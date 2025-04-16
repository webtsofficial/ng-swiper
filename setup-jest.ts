import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';

setupZoneTestEnv({
  teardown: {
    destroyAfterEach: true,
  },
  errorOnUnknownElements: false,
  errorOnUnknownProperties: true,
});

jest.mock('swiper/modules', () => ({
  A11y: (props: any) => null,
  Autoplay: (props: any) => null,
  Controller: (props: any) => null,
  EffectCoverflow: (props: any) => null,
  EffectCreative: (props: any) => null,
  EffectCube: (props: any) => null,
  EffectFade: (props: any) => null,
  EffectFlip: (props: any) => null,
  FreeMode: (props: any) => null,
  Grid: (props: any) => null,
  HashNavigation: (props: any) => null,
  History: (props: any) => null,
  Keyboard: (props: any) => null,
  Mousewheel: (props: any) => null,
  Navigation: (props: any) => null,
  Pagination: (props: any) => null,
  Parallax: (props: any) => null,
  Scrollbar: (props: any) => null,
  Thumbs: (props: any) => null,
  Virtual: (props: any) => null,
  Zoom: (props: any) => null,
}));
