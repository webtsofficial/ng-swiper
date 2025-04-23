import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'app-mousewheel-swiper',
    imports: [],
    templateUrl: './mousewheel-swiper.tab.html',
    styleUrl: './mousewheel-swiper.tab.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MousewheelSwiperTab {}
