import {Directive, ElementRef, inject} from '@angular/core';

@Directive({
  selector: '[ngSwiperItem]',
  host: {
    class: 'ng-swiper-item swiper-slide',
  }
})
export class SwiperItemDirective {
  private _elRef = inject(ElementRef<HTMLElement>);

  get element(): HTMLElement {
    return this._elRef.nativeElement;
  }
}
