import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'a11y',
    pathMatch: 'full'
  },
  {
    path: 'a11y',
    loadComponent: () => import('./a11y').then(comp => comp.A11ySwiperTab),
  },
  {
    path: 'autoplay',
    loadComponent: () => import('./autoplay').then(comp => comp.AutoplaySwiperTab),
  },
  {
    path: 'controller',
    loadComponent: () => import('./controller').then(comp => comp.ControllerSwiperTab),
  },
  {
    path: 'effects',
    loadChildren: () => import('./effects/effect.routes').then(children => children.routes),
  },
  {
    path: 'free-mode',
    loadComponent: () => import('./free-mode').then(comp => comp.FreeModeSwiperTab),
  },
  {
    path: 'grid',
    loadComponent: () => import('./grid').then(comp => comp.GridSwiperTab),
  },
  {
    path: 'hash-navigation',
    loadComponent: () => import('./hash-navigation').then(comp => comp.HashNavigationSwiperTab),
  },
  {
    path: 'history',
    loadComponent: () => import('./history').then(comp => comp.HistorySwiperTab),
  },
  {
    path: 'keyboard',
    loadComponent: () => import('./keyboard').then(comp => comp.KeyboardSwiperTab),
  },
  {
    path: 'mousewheel',
    loadComponent: () => import('./mousewheel').then(comp => comp.MousewheelSwiperTab),
  },
  {
    path: 'navigation',
    loadComponent: () => import('./navigation').then(comp => comp.NavigationSwiperTab),
  },
  {
    path: 'pagination',
    loadComponent: () => import('./pagination').then(comp => comp.PaginationSwiperTab),
  },
  {
    path: 'parallax',
    loadComponent: () => import('./parallax').then(comp => comp.ParallaxSwiperTab),
  },
  {
    path: 'scrollbar',
    loadComponent: () => import('./scrollbar').then(comp => comp.ScrollbarSwiperTab),
  },
  {
    path: 'thumbs',
    loadComponent: () => import('./thumbs').then(comp => comp.ThumbsSwiperTab),
  },
  {
    path: 'virtual',
    loadComponent: () => import('./virtual').then(comp => comp.VirtualSwiperTab),
  },
  {
    path: 'zoom',
    loadComponent: () => import('./zoom').then(comp => comp.ZoomSwiperTab),
  },
];
