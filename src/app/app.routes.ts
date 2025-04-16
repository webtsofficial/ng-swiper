import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'swiper-test',
    pathMatch: 'full',
  },
  {
    path: 'swiper-test',
    loadComponent: () => import('./swiper').then(comp => comp.SwiperTestPage),
  }
];
