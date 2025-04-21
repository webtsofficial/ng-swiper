import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeEffectSliderTab } from './creative-effect-slider.tab';

describe('CreativeEffectSliderTab', () => {
    let component: CreativeEffectSliderTab;
    let fixture: ComponentFixture<CreativeEffectSliderTab>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CreativeEffectSliderTab],
        }).compileComponents();

        fixture = TestBed.createComponent(CreativeEffectSliderTab);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
