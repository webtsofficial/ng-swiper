import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'app-free-mode-swiper',
    imports: [],
    templateUrl: './free-mode-swiper.tab.html',
    styleUrl: './free-mode-swiper.tab.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FreeModeSwiperTab {}
