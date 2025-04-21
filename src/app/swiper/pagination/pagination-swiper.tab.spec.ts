import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationSwiperTab } from './pagination-swiper.tab';

describe('PaginationSwiperTab', () => {
    let component: PaginationSwiperTab;
    let fixture: ComponentFixture<PaginationSwiperTab>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PaginationSwiperTab],
        }).compileComponents();

        fixture = TestBed.createComponent(PaginationSwiperTab);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
