import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorySwiperTab } from './history-swiper.tab';

describe('HistorySwiperTab', () => {
    let component: HistorySwiperTab;
    let fixture: ComponentFixture<HistorySwiperTab>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HistorySwiperTab],
        }).compileComponents();

        fixture = TestBed.createComponent(HistorySwiperTab);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
