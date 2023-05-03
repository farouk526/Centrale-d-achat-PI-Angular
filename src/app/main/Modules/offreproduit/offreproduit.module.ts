import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {OffreProduitRoutingModule } from "./offreproduit-routing.module";
import { OffreproduitComponent } from "./offreproduit.component";


import { Ng2FlatpickrModule } from "ng2-flatpickr";
import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";
import { CoreCommonModule } from "@core/common.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [OffreproduitComponent],
  imports: [CommonModule, OffreProduitRoutingModule, NgbModule,
    CoreCommonModule,
    ContentHeaderModule,
    Ng2FlatpickrModule,FormsModule],
})
export class OffreProduitModule {}
