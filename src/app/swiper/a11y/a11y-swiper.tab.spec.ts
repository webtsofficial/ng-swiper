import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A11ySwiperTab } from './a11y-swiper.tab';

describe('A11ySwiperTab', () => {
  let component: A11ySwiperTab;
  let fixture: ComponentFixture<A11ySwiperTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A11ySwiperTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A11ySwiperTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
