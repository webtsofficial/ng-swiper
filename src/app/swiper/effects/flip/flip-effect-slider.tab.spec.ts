import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipEffectSliderTab } from './flip-effect-slider.tab';

describe('FlipEffectSliderTab', () => {
    let component: FlipEffectSliderTab;
    let fixture: ComponentFixture<FlipEffectSliderTab>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FlipEffectSliderTab],
        }).compileComponents();

        fixture = TestBed.createComponent(FlipEffectSliderTab);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
