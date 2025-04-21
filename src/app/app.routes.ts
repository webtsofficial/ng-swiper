import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'swiper',
        pathMatch: 'full',
    },
    {
        path: 'swiper',
        loadComponent: () =>
            import('./swiper/swiper.page').then((comp) => comp.SwiperPage),
        children: [
            {
                path: 'tabs',
                outlet: 'tab',
                loadChildren: () =>
                    import('./swiper/tab.routes').then(
                        (children) => children.routes,
                    ),
            },
        ],
    },
    {
        path: '**',
        redirectTo: 'swiper',
        pathMatch: 'prefix',
    },
];
