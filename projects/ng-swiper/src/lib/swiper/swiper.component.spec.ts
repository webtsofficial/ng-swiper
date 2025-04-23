import { ComponentFixture, TestBed } from '@angular/core/testing';

import {Component, input, InputSignal} from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { NG_SWIPER_DEFAULT_OPTIONS } from '../swiper.provider';
import { SwiperItemDirective } from './item';
import { SwiperComponent } from './swiper.component';
import {By} from '@angular/platform-browser';

abstract class AbstractTestSwiperComponent {
    abstract options: InputSignal<SwiperOptions>;
}

@Component({
    imports: [SwiperComponent, SwiperItemDirective],
    template: ` <ng-swiper [options]="options()">
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
class TestSwiperComponent extends AbstractTestSwiperComponent {
    options = input<SwiperOptions>(NG_SWIPER_DEFAULT_OPTIONS);
}

describe('SwiperComponent', () => {
    let component: AbstractTestSwiperComponent;
    let swiper: SwiperComponent;
    let fixture: ComponentFixture<TestSwiperComponent>;

    describe('basics', () => {
        beforeEach(async () => {
            await TestBed.configureTestingModule({
                imports: [TestSwiperComponent],
            }).compileComponents();

            fixture = TestBed.createComponent(TestSwiperComponent);
            component = fixture.componentInstance;
            swiper = fixture.debugElement.query(By.directive(SwiperComponent)).componentInstance;
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
