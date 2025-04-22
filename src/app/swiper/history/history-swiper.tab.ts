import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {SwiperComponent, SwiperItemDirective} from 'ng-swiper';
import {SwiperOptions} from 'swiper/types';
import {History} from 'swiper/modules';

@Component({
    selector: 'app-history-swiper',
    imports: [
        JsonPipe,
        SwiperComponent,
        SwiperItemDirective
    ],
    templateUrl: './history-swiper.tab.html',
    styleUrl: './history-swiper.tab.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistorySwiperTab {
    options: SwiperOptions = {
        modules: [History],
        history: {
            enabled: true,
            key: 'currentSlide',
            keepQuery: true,
        }
    };
}
