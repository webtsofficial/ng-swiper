import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'app-parallax-swiper',
    imports: [],
    templateUrl: './parallax-swiper.tab.html',
    styleUrl: './parallax-swiper.tab.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParallaxSwiperTab {}
