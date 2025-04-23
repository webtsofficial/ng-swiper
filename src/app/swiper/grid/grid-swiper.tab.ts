import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {SwiperComponent, SwiperItemDirective} from 'ng-swiper';
import {SwiperOptions} from 'swiper/types';
import {Grid} from 'swiper/modules';

@Component({
    selector: 'app-grid-swiper',
    imports: [
        JsonPipe,
        SwiperComponent,
        SwiperItemDirective
    ],
    templateUrl: './grid-swiper.tab.html',
    styleUrl: './grid-swiper.tab.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridSwiperTab {
    options: SwiperOptions = {
        modules: [Grid],
        spaceBetween: 32,
        slidesPerView: 1,
        breakpoints: {
            // when window width is >= 320px
            480: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 480px
            640: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // when window width is >= 640px
            768: {
                slidesPerView: 4,
                spaceBetween: 40
            }
        },
        grid: {
            fill: 'row',
            rows: 2
        }
    };
}
