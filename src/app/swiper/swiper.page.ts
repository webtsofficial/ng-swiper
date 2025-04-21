import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
} from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-swiper',
    imports: [
        RouterOutlet,
        MatSidenavModule,
        MatListModule,
    ],
    templateUrl: './swiper.page.html',
    styleUrl: './swiper.page.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwiperPage {}
