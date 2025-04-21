import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomSwiperTab } from './zoom-swiper.tab';

describe('ZoomSwiperTab', () => {
    let component: ZoomSwiperTab;
    let fixture: ComponentFixture<ZoomSwiperTab>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ZoomSwiperTab],
        }).compileComponents();

        fixture = TestBed.createComponent(ZoomSwiperTab);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
