import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeModeSwiperTab } from './free-mode-swiper.tab';

describe('FreeModeSwiperTab', () => {
  let component: FreeModeSwiperTab;
  let fixture: ComponentFixture<FreeModeSwiperTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreeModeSwiperTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeModeSwiperTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
