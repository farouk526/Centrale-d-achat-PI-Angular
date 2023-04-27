import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {PaiementRoutingModule } from "./paiement-routing.module";
import { PaiementComponent } from "./paiement.component";


import { Ng2FlatpickrModule } from "ng2-flatpickr";
import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";
import { CoreCommonModule } from "@core/common.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [PaiementComponent],
  imports: [CommonModule, PaiementRoutingModule, NgbModule,
    CoreCommonModule,
    ContentHeaderModule,
    Ng2FlatpickrModule,FormsModule],
})
export class PaiementModule {}
