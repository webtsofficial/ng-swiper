import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
} from '@angular/core';
import {SwiperOptions} from 'swiper/types';
import {Controller} from 'swiper/modules';
import {JsonPipe} from '@angular/common';
import {SwiperComponent, SwiperItemDirective } from 'ng-swiper';

@Component({
    selector: 'app-controller-swiper',
    imports: [
        JsonPipe,
        SwiperComponent,
        SwiperItemDirective
    ],
    templateUrl: './controller-swiper.tab.html',
    styleUrl: './controller-swiper.tab.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControllerSwiperTab {
    options: SwiperOptions = {

    };

    optionsController: SwiperOptions = {
        modules: [Controller],
        slideToClickedSlide: true,
        slidesPerView: 3.5,
        controller: {
            control: '.app-swiper-controller-example',
            by: 'slide',
        },
    };
}
