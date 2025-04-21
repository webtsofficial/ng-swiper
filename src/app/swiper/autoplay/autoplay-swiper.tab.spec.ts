import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoplaySwiperTab } from './autoplay-swiper.tab';

describe('AutoplaySwiperTab', () => {
    let component: AutoplaySwiperTab;
    let fixture: ComponentFixture<AutoplaySwiperTab>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AutoplaySwiperTab],
        }).compileComponents();

        fixture = TestBed.createComponent(AutoplaySwiperTab);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
