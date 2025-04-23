import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'app-creative-effect-slider',
    imports: [],
    templateUrl: './creative-effect-slider.tab.html',
    styleUrl: './creative-effect-slider.tab.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreativeEffectSliderTab {}
