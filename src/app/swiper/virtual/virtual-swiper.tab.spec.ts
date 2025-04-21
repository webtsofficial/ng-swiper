import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualSwiperTab } from './virtual-swiper.tab';

describe('VirtualSwiperTab', () => {
  let component: VirtualSwiperTab;
  let fixture: ComponentFixture<VirtualSwiperTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VirtualSwiperTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualSwiperTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
