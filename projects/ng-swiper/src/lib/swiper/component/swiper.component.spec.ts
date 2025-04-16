import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement, ElementRef, inject, Signal, viewChild, viewChildren } from '@angular/core';

import { SwiperComponent } from './swiper.component';
import {
  provideNgSwiper,
  withA11y,
  withAutoplay,
  withCardsEffect,
  withConfig,
  withPagination,
} from '../swiper.provider';
import { SwiperItemDirective } from '../item';
import { SwiperInitError, SwiperNoSlidesError } from './swiper.errors';
import { By } from '@angular/platform-browser';
import { A11y, Autoplay, EffectCards, Pagination } from 'swiper/modules';

export interface ISwiperTestComponent {
  elRef: ElementRef;
  ngSwiper: Signal<SwiperComponent | undefined>;
  ngSwiperItems: Signal<readonly SwiperItemDirective[]>;
}

@Component({
  template: `
    <div ng-swiper>
      <div ngSwiperItem>Item 1</div>
      <div ngSwiperItem>Item 2</div>
      <div ngSwiperItem>Item 3</div>
      <div ngSwiperItem>Item 4</div>
      <div ngSwiperItem>Item 5</div>
      <div ngSwiperItem>Item 6</div>
      <div ngSwiperItem>Item 7</div>
      <div ngSwiperItem>Item 8</div>
      <div ngSwiperItem>Item 9</div>
      <div ngSwiperItem>Item 10</div>
      <div ngSwiperItem>Item 11</div>
      <div ngSwiperItem>Item 12</div>
    </div>
  `,
  standalone: true,
  imports: [SwiperComponent, SwiperItemDirective]
})
class TestSwiperComponent implements ISwiperTestComponent {
  elRef = inject(ElementRef<HTMLElement>);
  ngSwiper = viewChild(SwiperComponent);
  ngSwiperItems = viewChildren(SwiperItemDirective);
}

@Component({
  template: `
    <div ng-swiper>
    </div>
  `,
  standalone: true,
  imports: [SwiperComponent]
})
class TestSwiperWithoutItemsComponent implements ISwiperTestComponent {
  elRef = inject(ElementRef<HTMLElement>);
  ngSwiper = viewChild(SwiperComponent);
  ngSwiperItems = viewChildren(SwiperItemDirective);
}

//------------------------------------------------------------------------------


describe('SwiperComponent', () => {
  let component: ISwiperTestComponent;
  let swiper: SwiperComponent | undefined;
  let swiperItems: readonly SwiperItemDirective[] | undefined;
  let fixture: ComponentFixture<TestSwiperComponent>;

  describe('basic errors', () => {
    it('should warn, when no items are present', async () => {
      await TestBed.configureTestingModule({
        imports: [TestSwiperWithoutItemsComponent],
        providers: [
          provideNgSwiper(),
        ]
      }).compileComponents();
      fixture = TestBed.createComponent(TestSwiperWithoutItemsComponent);
      component = fixture.componentInstance;
      jest.spyOn(console, 'warn').mockImplementation();
      fixture.detectChanges();

      expect(console.warn).toHaveBeenCalledWith(new SwiperNoSlidesError({}))
    });

    it('should throw SwiperInitError, when wrapper is no Element', async () => {
      await TestBed.configureTestingModule({
        imports: [TestSwiperComponent],
        providers: [
          provideNgSwiper(withConfig({ wrapperClass: 'something-wrong' })),
        ]
      }).compileComponents()
      fixture = TestBed.createComponent(TestSwiperComponent);
      swiper = fixture.componentInstance.ngSwiper();
      try {
        swiper?.ngAfterViewInit();
      } catch (e) {
        expect(e).toBeInstanceOf(SwiperInitError);
      }
    });
  })

  describe('basic features', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [TestSwiperComponent],
        providers: [
          provideNgSwiper(withConfig({
            initialSlide: 1,
          })),
        ]
      })
        .compileComponents();

      fixture = TestBed.createComponent(TestSwiperComponent);
      component = fixture.componentInstance;
      swiper = component.ngSwiper();
      swiperItems = component.ngSwiperItems();
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should initialize a swiper', () => {
      const initializedElem: DebugElement | null = fixture.debugElement.query(By.css('.swiper-initialized'));
      expect(initializedElem).toBeTruthy();
    });

    it('should show item in slider', () => {
      expect(fixture.debugElement.queryAll(By.css('.swiper-slide'))?.length).toBe(12);
    });

    it('should be able to slide to index', () => {
      expect(swiper?.activeIndex).toBe(1);
      expect(swiper?.slideTo(2)).toBe(2);
      expect(swiper?.slideTo(4)).toBe(4);
    });

    it('should be able to slide next', () => {
      expect(swiper?.activeIndex).toBe(1);
      expect(swiper?.slideNext()).toBe(2);
    });

    it('should be able to slide prev', () => {
      expect(swiper?.activeIndex).toBe(1);
      expect(swiper?.slidePrev()).toBe(0);

    });

    it('should not show pagination element if not configured', () => {
      expect(fixture.debugElement.query(By.css('.swiper-pagination'))).toBeFalsy();
    });

    it('should not show navigation elements if not configured', () => {
      expect(fixture.debugElement.query(By.css('.swiper-button-prev'))).toBeFalsy();
      expect(fixture.debugElement.query(By.css('.swiper-button-next'))).toBeFalsy();
    });

    it('should not show scrollbar element if not configured', () => {
      expect(fixture.debugElement.query(By.css('.swiper-scrollbar'))).toBeFalsy();
    });

    it('should not show thumbs element if not configured', () => {
      expect(fixture.debugElement.query(By.css('.swiper-thumbs'))).toBeFalsy();
    });
  });

  describe('pagination module', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [TestSwiperComponent],
        providers: [
          provideNgSwiper(
            withConfig({
              initialSlide: 1,
            }),
            withPagination({
              el: '.swiper-pagination'
            }),
          ),
        ]
      }).compileComponents();

      fixture = TestBed.createComponent(TestSwiperComponent);
      component = fixture.componentInstance;
      swiper = component.ngSwiper();
      swiperItems = component.ngSwiperItems();
      fixture.detectChanges();
    });

    it('should combine pagination and global options', () => {
      expect(swiper?.currentOptions()).toStrictEqual({
        grabCursor: true,
        initialSlide: 1,
        modules: [Pagination],
        pagination: {
          el: '.swiper-pagination'
        }
      })
    });

    it('should show pagination element', () => {
      expect(fixture.debugElement.query(By.css('.swiper-pagination'))).toBeTruthy();
    });
  });

  describe('a11y module', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [TestSwiperComponent],
        providers: [
          provideNgSwiper(
            withConfig({
              initialSlide: 1,
            }),
            withA11y({
              prevSlideMessage: 'Previous slide',
              nextSlideMessage: 'Next slide',
              firstSlideMessage: 'First slide',
              lastSlideMessage: 'Last slide',
              paginationBulletMessage: 'Pagination bullet',
              containerMessage: 'Slider Container',
              containerRoleDescriptionMessage: 'Contains wrapper for slides and pagination, scrollbar or navigation elements',
              containerRole: 'region',
              itemRoleDescriptionMessage: 'Non interactive content slider container',
              slideLabelMessage: 'Slide element for content slider',
              slideRole: 'group',
              scrollOnFocus: true,
            }),
          ),
        ]
      }).compileComponents();

      fixture = TestBed.createComponent(TestSwiperComponent);
      component = fixture.componentInstance;
      swiper = component.ngSwiper();
      swiperItems = component.ngSwiperItems();
      fixture.detectChanges();
    });

    it('should combine pagination and global options', () => {
      expect(swiper?.currentOptions()).toStrictEqual({
        grabCursor: true,
        initialSlide: 1,
        modules: [A11y],
        a11y: {
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
          firstSlideMessage: 'First slide',
          lastSlideMessage: 'Last slide',
          paginationBulletMessage: 'Pagination bullet',
          containerMessage: 'Slider Container',
          containerRoleDescriptionMessage: 'Contains wrapper for slides and pagination, scrollbar or navigation elements',
          containerRole: 'region',
          itemRoleDescriptionMessage: 'Non interactive content slider container',
          slideLabelMessage: 'Slide element for content slider',
          slideRole: 'group',
          scrollOnFocus: true,
        }
      })
    });
  });

  describe('autoplay module', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [TestSwiperComponent],
        providers: [
          provideNgSwiper(
            withConfig({
              initialSlide: 1,
            }),
            withAutoplay({
              delay: 4000,
              stopOnLastSlide: true,
              disableOnInteraction: true,
              waitForTransition: true,
              pauseOnMouseEnter: true,
            }),
          ),
        ]
      }).compileComponents();

      fixture = TestBed.createComponent(TestSwiperComponent);
      component = fixture.componentInstance;
      swiper = component.ngSwiper();
      swiperItems = component.ngSwiperItems();
      fixture.detectChanges();
    });

    it('should combine autoplay and global options', () => {
      expect(swiper?.currentOptions()).toStrictEqual({
        grabCursor: true,
        initialSlide: 1,
        modules: [Autoplay],
        autoplay: {
          delay: 4000,
          stopOnLastSlide: true,
          disableOnInteraction: true,
          waitForTransition: true,
          pauseOnMouseEnter: true,
        }
      })
    });
  });

  describe('cards module', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [TestSwiperComponent],
        providers: [
          provideNgSwiper(
            withConfig({
              initialSlide: 1,
              effect: 'cards',
            }),
            withCardsEffect({
              slideShadows: true,
              rotate: true,
              perSlideRotate: 15,
              perSlideOffset: 24,
            }),
          ),
        ]
      }).compileComponents();

      fixture = TestBed.createComponent(TestSwiperComponent);
      component = fixture.componentInstance;
      swiper = component.ngSwiper();
      swiperItems = component.ngSwiperItems();
      fixture.detectChanges();
    });

    it('should combine cards and global options', () => {
      expect(swiper?.currentOptions()).toStrictEqual({
        grabCursor: true,
        initialSlide: 1,
        modules: [EffectCards],
        cardsEffect: {
          slideShadows: true,
          rotate: true,
          perSlideRotate: 15,
          perSlideOffset: 24,
        }
      })
    });
  });

  /*

  it('should apply cards if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply controller if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply overflow if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply cube if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply fade if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply flip if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply free-mode if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply grid if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply hash-navigation if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply history if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply keyboard if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply lazy-loading if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply manipulation if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply mousewheel if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply parallax if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply scrollbar if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply thumbs if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply virtual if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply zoom if configured', () => {
    expect(component).toBeTruthy();
  });
   */
});
