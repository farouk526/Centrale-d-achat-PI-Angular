import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {OffreServiceRoutingModule } from "./offreservice-routing.module";
import { OffreserviceComponent } from "./offreservice.component";

import { NouisliderModule } from 'ng2-nouislider';

import { SwiperConfigInterface, SwiperModule, SWIPER_CONFIG } from 'ngx-swiper-wrapper';

import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";
import { CoreCommonModule } from "@core/common.module";
import { CoreSidebarModule } from '@core/components';
import { CoreTouchspinModule } from '@core/components/core-touchspin/core-touchspin.module';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  observer: true
};
@NgModule({
  declarations: [OffreserviceComponent],
  imports: [CommonModule, 
    OffreServiceRoutingModule, 
    NgbModule,
    CoreCommonModule,
    ContentHeaderModule,
    CoreTouchspinModule,
    CoreSidebarModule,
    CoreCommonModule,
    SwiperModule,
    NouisliderModule,
    ReactiveFormsModule,
  FormsModule],
    providers: [
      {
        provide: SWIPER_CONFIG,
        useValue: DEFAULT_SWIPER_CONFIG
      }
    ]
})
export class OffreServiceModule {}
