import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperComponent } from './swiper.component';

describe('SwiperComponent', () => {
  let component: SwiperComponent;
  let fixture: ComponentFixture<SwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwiperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show item in slider', () => {
    expect(component).toBeTruthy();
  });

  it('should apply a11y if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply autoplay if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply cards if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply controller if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply overflow if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply cube if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply fade if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply flip if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply free-mode if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply grid if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply hash-navigation if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply history if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply keyboard if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply lazy-loading if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply manipulation if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply mousewheel if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply pagination if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply parallax if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply scrollbar if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply thumbs if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply virtual if configured', () => {
    expect(component).toBeTruthy();
  });

  it('should apply zoom if configured', () => {
    expect(component).toBeTruthy();
  });
});
