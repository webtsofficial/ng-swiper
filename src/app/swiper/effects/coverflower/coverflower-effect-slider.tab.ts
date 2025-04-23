import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'app-coverflower-effect-slider',
    imports: [],
    templateUrl: './coverflower-effect-slider.tab.html',
    styleUrl: './coverflower-effect-slider.tab.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoverflowerEffectSliderTab {}
