import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FactureRoutingModule } from "./facture-routing.module";
import { FactureComponent } from "./facture.component";


import { Ng2FlatpickrModule } from "ng2-flatpickr";
import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";
import { CoreCommonModule } from "@core/common.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [FactureComponent],
  imports: [CommonModule, FactureRoutingModule, NgbModule,
    CoreCommonModule,
    ContentHeaderModule,
    Ng2FlatpickrModule,FormsModule],
})
export class FactureModule {}
