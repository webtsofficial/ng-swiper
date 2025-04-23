import {SwiperOptions} from 'swiper/types';
import Swiper from 'swiper';

export abstract class SwiperError extends Error {

  constructor(
    message: string,
    public options: SwiperOptions,
    public id: string,
    public swiper?: Swiper,
    public error?: any,
  ) {
    const extraInfos = [
      error ? `Error: ${error}` : null,
      id ? `Id: ${id}` : null,
    ].filter(info => info !== null);
    super(`${message}${extraInfos?.length ? '\n' + extraInfos.join(',\n') : ''}`);
  }
}

export class SwiperInitError extends SwiperError {

  constructor(options: SwiperOptions, id: string, error?: any) {
    super(`NGSwiper: Swiper couldn't initialize`, options, id, undefined, error);
  }
}

export class SwiperNoSlidesError extends SwiperError {

  constructor(options: SwiperOptions, id: string, swiper?: Swiper, error?: any | Error) {
    super(`NGSwiper: No slides present when creating swiper`, options, id, swiper, error);
  }
}
