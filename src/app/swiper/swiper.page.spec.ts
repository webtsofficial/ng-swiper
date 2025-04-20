import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperPage } from './swiper.page';
import {provideExperimentalZonelessChangeDetection} from '@angular/core';

describe('SwiperPage', () => {
  let component: SwiperPage;
  let fixture: ComponentFixture<SwiperPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwiperPage],
      providers: [provideExperimentalZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
