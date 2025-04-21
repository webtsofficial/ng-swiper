/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import 'swiper/css/controller';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-creative';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-flip';
import 'swiper/css/free-mode';
import 'swiper/css/grid';
import 'swiper/css/hash-navigation';
import 'swiper/css/history';
import 'swiper/css/keyboard';
import 'swiper/css/manipulation';
import 'swiper/css/mousewheel';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';
import 'swiper/css/virtual';
import 'swiper/css/zoom';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
