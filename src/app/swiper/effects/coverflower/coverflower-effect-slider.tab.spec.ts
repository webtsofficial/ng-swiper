import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverflowerEffectSliderTab } from './coverflower-effect-slider.tab';

describe('CoverflowerEffectSliderTab', () => {
    let component: CoverflowerEffectSliderTab;
    let fixture: ComponentFixture<CoverflowerEffectSliderTab>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CoverflowerEffectSliderTab],
        }).compileComponents();

        fixture = TestBed.createComponent(CoverflowerEffectSliderTab);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
