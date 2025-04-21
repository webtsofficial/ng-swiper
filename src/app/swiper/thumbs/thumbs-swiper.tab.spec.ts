import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbsSwiperTab } from './thumbs-swiper.tab';

describe('ThumbsSwiperTab', () => {
    let component: ThumbsSwiperTab;
    let fixture: ComponentFixture<ThumbsSwiperTab>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ThumbsSwiperTab],
        }).compileComponents();

        fixture = TestBed.createComponent(ThumbsSwiperTab);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
