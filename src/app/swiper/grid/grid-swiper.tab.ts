import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'app-grid-swiper',
    imports: [],
    templateUrl: './grid-swiper.tab.html',
    styleUrl: './grid-swiper.tab.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridSwiperTab {}
