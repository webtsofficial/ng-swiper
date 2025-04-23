import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxSwiperTab } from './parallax-swiper.tab';

describe('ParallaxSwiperTab', () => {
    let component: ParallaxSwiperTab;
    let fixture: ComponentFixture<ParallaxSwiperTab>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ParallaxSwiperTab],
        }).compileComponents();

        fixture = TestBed.createComponent(ParallaxSwiperTab);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
