import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSwiperTab } from './grid-swiper.tab';

describe('GridSwiperTab', () => {
  let component: GridSwiperTab;
  let fixture: ComponentFixture<GridSwiperTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridSwiperTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridSwiperTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
