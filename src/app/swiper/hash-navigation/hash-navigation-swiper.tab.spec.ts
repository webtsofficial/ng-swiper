import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashNavigationSwiperTab } from './hash-navigation-swiper.tab';

describe('HashNavigationSwiperTab', () => {
    let component: HashNavigationSwiperTab;
    let fixture: ComponentFixture<HashNavigationSwiperTab>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HashNavigationSwiperTab],
        }).compileComponents();

        fixture = TestBed.createComponent(HashNavigationSwiperTab);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
