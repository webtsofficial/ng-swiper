import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollbarSwiperTab } from './scrollbar-swiper.tab';

describe('ScrollbarSwiperTab', () => {
    let component: ScrollbarSwiperTab;
    let fixture: ComponentFixture<ScrollbarSwiperTab>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ScrollbarSwiperTab],
        }).compileComponents();

        fixture = TestBed.createComponent(ScrollbarSwiperTab);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
