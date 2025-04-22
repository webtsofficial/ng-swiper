import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
} from '@angular/core';
import {SwiperOptions} from 'swiper/types';
import {Autoplay, Pagination} from 'swiper/modules';
import {JsonPipe} from '@angular/common';
import {SwiperComponent, SwiperItemDirective} from 'ng-swiper';

@Component({
    selector: 'app-autoplay-swiper',
    imports: [
        JsonPipe,
        SwiperComponent,
        SwiperItemDirective
    ],
    templateUrl: './autoplay-swiper.tab.html',
    styleUrl: './autoplay-swiper.tab.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoplaySwiperTab {
    options: SwiperOptions = {
        modules: [Autoplay, Pagination],
        pagination: true,
        autoplay: {
            delay: 2000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
        }
    };
}
