import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperComponent } from './swiper.component';
import {ChangeDetectionStrategy, Component, input, ViewEncapsulation} from '@angular/core';
import {SwiperItemDirective} from './item';
import {SwiperOptions} from 'swiper/types';
import {NG_SWIPER_DEFAULT_OPTIONS} from '../swiper.provider';

@Component({
  imports: [SwiperComponent, SwiperItemDirective],
  template: `
    <ng-swiper [options]="options()">
        <div ngSwiperItem>Item 1</div>
        <div ngSwiperItem>Item 2</div>
        <div ngSwiperItem>Item 3</div>
        <div ngSwiperItem>Item 4</div>
        <div ngSwiperItem>Item 5</div>
        <div ngSwiperItem>Item 6</div>
        <div ngSwiperItem>Item 7</div>
        <div ngSwiperItem>Item 8</div>
    </ng-swiper>`,
})
class TestSwiperComponent {
  options = input<SwiperOptions>(NG_SWIPER_DEFAULT_OPTIONS);
}

describe('SwiperComponent', () => {
  let component: SwiperComponent;
  let fixture: ComponentFixture<SwiperComponent>;

  describe('basics', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [SwiperComponent]
      })
        .compileComponents();

      fixture = TestBed.createComponent(SwiperComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
  describe('global configuration', () => {});
  describe('local configuration', () => {});
  describe('a11y module', () => {});
  describe('autoplay module', () => {});
  describe('controller module', () => {});
  describe('controller module', () => {});
  describe('hashNavigation module', () => {});
  describe('history module', () => {});
  describe('keyboard module', () => {});
  describe('mousewheel module', () => {});
  describe('navigation module', () => {});
  describe('pagination module', () => {});
  describe('parallax module', () => {});
  describe('parallax module', () => {});
  describe('scrollbar module', () => {});
  describe('thumbs module', () => {});
  describe('virtual module', () => {});
  describe('zoom module', () => {});
  describe('freeMode module', () => {});
  describe('grid module', () => {});

  describe('cardsEffect module', () => {});
  describe('coverflowEffect module', () => {});
  describe('cubeEffect module', () => {});
  describe('fadeEffect module', () => {});
  describe('flipEffect module', () => {});
  describe('creativeEffect module', () => {});
});
