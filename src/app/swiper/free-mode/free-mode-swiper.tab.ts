import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
} from '@angular/core';
import {SwiperOptions} from 'swiper/types';
import {FreeMode} from 'swiper/modules';
import {JsonPipe} from '@angular/common';
import {SwiperComponent, SwiperItemDirective} from 'ng-swiper';

@Component({
    selector: 'app-free-mode-swiper',
    imports: [
        JsonPipe,
        SwiperComponent,
        SwiperItemDirective
    ],
    templateUrl: './free-mode-swiper.tab.html',
    styleUrl: './free-mode-swiper.tab.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FreeModeSwiperTab {
    options: SwiperOptions = {
        modules: [FreeMode],
        freeMode: {
            enabled: true,
            momentum: true,
            sticky: true
        }
    };
}
