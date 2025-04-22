import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {SwiperComponent, SwiperItemDirective} from 'ng-swiper';
import {SwiperOptions} from 'swiper/types';
import {HashNavigation} from 'swiper/modules';

@Component({
    selector: 'app-hash-navigation-swiper',
    imports: [
        JsonPipe,
        SwiperComponent,
        SwiperItemDirective
    ],
    templateUrl: './hash-navigation-swiper.tab.html',
    styleUrl: './hash-navigation-swiper.tab.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HashNavigationSwiperTab {
    options: SwiperOptions = {
        modules: [HashNavigation],
        hashNavigation: {
            watchState: true,
        }
    };
}
