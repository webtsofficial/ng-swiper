import {
    AfterContentInit,
    AfterViewInit,
    ChangeDetectionStrategy,
    Component, computed,
    contentChildren,
    effect,
    ElementRef,
    inject,
    Injector,
    input, untracked,
    ViewEncapsulation,
} from '@angular/core';
import Swiper from 'swiper';
import {SwiperOptions} from 'swiper/types';
import {mapOptions, NG_SWIPER_OPTIONS} from '../swiper.provider';
import {SwiperItemDirective} from './item';
import {SwiperInitError, SwiperNoSlidesError} from './swiper.errors';

@Component({
    selector: 'ng-swiper',
    imports: [],
    templateUrl: './swiper.component.html',
    styleUrl: './swiper.component.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[id]': 'id',
        class: 'ng-swiper swiper',
    },
})
export class SwiperComponent implements AfterContentInit, AfterViewInit {
    static nextId: number = 0;
    id = `ng-swiper-${SwiperComponent.nextId++}`;

    private _injector = inject(Injector);
    private _elRef: ElementRef<HTMLElement> = inject(ElementRef);
    optionsGlobal = inject(NG_SWIPER_OPTIONS);
    swiper?: Swiper;
    options = input<SwiperOptions>();
    items = contentChildren(SwiperItemDirective);

    currentOptions = computed<SwiperOptions>(() => {
        let opts = this.options() || this.optionsGlobal;
        opts = mapOptions(opts, {
            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
            },
            pagination: {
                el: '.swiper-pagination',
            },
            thumbs: {
                el: '.' + opts.thumbs?.thumbsContainerClass || '.swiper-thumbs',
            }
        });
        return opts;
    });

    ngAfterContentInit(): void {
        effect(
            () => this._updateItems(this.items()),
            {injector: this._injector},
        );
    }

    ngAfterViewInit(): void {
        effect(
            () => this._init(
                this.currentOptions(),
                untracked(this.items),
            ),
            {injector: this._injector},
        );
    }

    private _init(opts: SwiperOptions, items: readonly SwiperItemDirective[]): void {
        if (this.swiper) {
            this.swiper.destroy();
        }

        if (!items.length) {
            console.warn(new SwiperNoSlidesError(opts, this.id));
        }

        try {
            this.swiper = new Swiper(this._elRef.nativeElement, opts);
        } catch (e) {
            throw new SwiperInitError(opts, this.id, e);
        }
    }

    private _updateItems(items: readonly SwiperItemDirective[]): void {
        if (this.swiper && Array.isArray(items)) {
            this.swiper.updateSlides();
        }
    }
}
