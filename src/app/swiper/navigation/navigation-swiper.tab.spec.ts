import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationSwiperTab } from './navigation-swiper.tab';

describe('NavigationSwiperTab', () => {
    let component: NavigationSwiperTab;
    let fixture: ComponentFixture<NavigationSwiperTab>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NavigationSwiperTab],
        }).compileComponents();

        fixture = TestBed.createComponent(NavigationSwiperTab);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
