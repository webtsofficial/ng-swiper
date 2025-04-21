import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MousewheelSwiperTab } from './mousewheel-swiper.tab';

describe('MousewheelSwiperTab', () => {
    let component: MousewheelSwiperTab;
    let fixture: ComponentFixture<MousewheelSwiperTab>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MousewheelSwiperTab],
        }).compileComponents();

        fixture = TestBed.createComponent(MousewheelSwiperTab);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
