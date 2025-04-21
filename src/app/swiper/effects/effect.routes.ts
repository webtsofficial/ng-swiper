import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'effects/cards',
        pathMatch: 'full',
    },
    {
        path: 'cards',
        loadComponent: () =>
            import('./cards').then((comp) => comp.CardsEffectSliderTab),
    },
    {
        path: 'coverflower',
        loadComponent: () =>
            import('./coverflower').then(
                (comp) => comp.CoverflowerEffectSliderTab,
            ),
    },
    {
        path: 'creative',
        loadComponent: () =>
            import('./creative').then((comp) => comp.CreativeEffectSliderTab),
    },
    {
        path: 'fade',
        loadComponent: () =>
            import('./fade').then((comp) => comp.FadeEffectSliderTab),
    },
    {
        path: 'flip',
        loadComponent: () =>
            import('./flip').then((comp) => comp.FlipEffectSliderTab),
    },
];
