import { SwiperItemDirective } from './item.directive';
import {Component, viewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';

@Component({
    imports: [SwiperItemDirective],
    template: '<div ngSwiperItem></div>'
})
class TestSwiperItemComponent {
    item = viewChild(SwiperItemDirective);
}

describe('SwiperItemDirective', () => {
    let component: TestSwiperItemComponent;
    let fixture: ComponentFixture<TestSwiperItemComponent>;
    let el: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestSwiperItemComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TestSwiperItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        el = fixture.nativeElement.querySelector('div');
    });
    it('should create an instance', () => {
        expect(component).toBeTruthy();
    });

    it('should set class "swiper-slide"', () => {
        expect(el.classList).toContain('swiper-slide');
    });

    it('should set attribute `aria-roledescription` to "slide"', () => {
        expect(el.getAttribute('aria-roledescription')).toBe('slide');
    });

    it('should set id starting with "swiper-item-"', () => {
        expect(el.id).toMatch(/^ng-swiper-item-/);
    });
});
