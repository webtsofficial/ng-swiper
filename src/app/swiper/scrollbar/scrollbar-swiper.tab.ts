import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'app-scrollbar-swiper',
    imports: [],
    templateUrl: './scrollbar-swiper.tab.html',
    styleUrl: './scrollbar-swiper.tab.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollbarSwiperTab {}
