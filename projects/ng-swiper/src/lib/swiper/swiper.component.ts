import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
  effect,
  ElementRef,
  inject,
  input,
  ViewEncapsulation
} from '@angular/core';
import {SwiperOptions} from 'swiper/types';
import {NG_SWIPER_OPTIONS} from '../swiper.provider';
import Swiper from 'swiper';
import {SwiperItemDirective} from './item';

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
  }
})
export class SwiperComponent {
  static nextId: number = 0;
  id = `ng-swiper-${SwiperComponent.nextId++}`;

  private _elRef: ElementRef<HTMLElement> = inject(ElementRef);
  options_global = inject(NG_SWIPER_OPTIONS);
  swiper?: Swiper;
  options = input<SwiperOptions>();
  items = contentChildren(SwiperItemDirective);

  constructor() {
    effect(() => {
      if (this.swiper) {
        this.swiper.destroy();
      }
      const opts = this.options() || this.options_global;
      const items = this.items();
      if (items.length) {
        this.swiper = new Swiper(this._elRef.nativeElement, opts);
      } else {
        console.error('no child item at initialization');
      }
    });
  }
}
