import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperTestPage } from './swiper-test.page';

describe('SwiperTestPage', () => {
  let component: SwiperTestPage;
  let fixture: ComponentFixture<SwiperTestPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwiperTestPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiperTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
