import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'app-controller-swiper',
    imports: [],
    templateUrl: './controller-swiper.tab.html',
    styleUrl: './controller-swiper.tab.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControllerSwiperTab {}
