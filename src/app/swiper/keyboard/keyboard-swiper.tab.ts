import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {SwiperComponent, SwiperItemDirective} from 'ng-swiper';
import {SwiperOptions} from 'swiper/types';
import {Keyboard} from 'swiper/modules';

@Component({
    selector: 'app-keyboard-swiper',
    imports: [
        JsonPipe,
        SwiperComponent,
        SwiperItemDirective
    ],
    templateUrl: './keyboard-swiper.tab.html',
    styleUrl: './keyboard-swiper.tab.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeyboardSwiperTab {
    options: SwiperOptions = {
        modules: [Keyboard],
        keyboard: {
            enabled: true,
            onlyInViewport: true
        }
    };
}
