import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerSwiperTab } from './controller-swiper.tab';

describe('ControllerSwiperTab', () => {
    let component: ControllerSwiperTab;
    let fixture: ComponentFixture<ControllerSwiperTab>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ControllerSwiperTab],
        }).compileComponents();

        fixture = TestBed.createComponent(ControllerSwiperTab);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
