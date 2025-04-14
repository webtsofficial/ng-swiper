import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, ElementRef, inject, Signal, viewChild, viewChildren } from '@angular/core';

import { SwiperComponent } from './swiper.component';
import { provideNgSwiper, withPagination } from '../swiper.provider';
import { SwiperItemDirective } from '../item';
import { SwiperInitError, SwiperNoSlidesError } from './swiper.errors';

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
        providers: [provideNgSwiper({}),]
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
        providers: [provideNgSwiper({ wrapperClass: 'something-wrong' })]
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
          provideNgSwiper({
            initialSlide: 1,
          }),
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
      const initializedElem: Element | null = component.elRef.nativeElement.querySelector('.swiper-initialized');
      expect(initializedElem).toBeTruthy();
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

    })
  });

  describe('pagination module', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [TestSwiperComponent],
        providers: [
          provideNgSwiper({
            initialSlide: 1,
          }),
          withPagination({
          }),
        ]
      })
        .compileComponents();

      fixture = TestBed.createComponent(TestSwiperComponent);
      component = fixture.componentInstance;
      swiper = component.ngSwiper();
      swiperItems = component.ngSwiperItems();
      fixture.detectChanges();
    });

    it('should not show pagination element if not configured', () => {
      expect(component).toBeTruthy();
    });
    it('should show pagination bullets', () => {
      expect(component).toBeTruthy();
    });
    it('should apply configured `el` class', () => {
      expect(component).toBeTruthy();
    });
  });

  /*
  it('should show item in slider', () => {
    expect(component).toBeTruthy();
  });

  it('should apply a11y if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply autoplay if configured', () => {
    expect(component).toBeTruthy();
  });

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
