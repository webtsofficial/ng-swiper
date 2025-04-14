import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';

export abstract class SwiperError extends Error {

  constructor(
    message: string,
    public options: SwiperOptions,
    public swiper?: Swiper,
    public error?: any,
  ) {
    super(`${message}${error ? `: ${error}` : ''}`);
  }
}

export class SwiperInitError extends SwiperError {

  constructor(options: SwiperOptions, swiper?: Swiper, error?: any) {
    super(`NGSwiper: Swiper couldn't initialize`, options, swiper, error);
  }
}

export class SwiperNoSlidesError extends SwiperError {

  constructor(options: SwiperOptions, swiper?: Swiper, error?: any | Error) {
    super(`NGSwiper: No slides present when creating swiper`, options, swiper, error);
  }
}
