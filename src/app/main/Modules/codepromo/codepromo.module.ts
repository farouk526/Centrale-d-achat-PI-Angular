import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CodepromoRoutingModule } from "./codepromo-routing.module";
import { CodePromoComponent } from "./codepromo.component";


import { Ng2FlatpickrModule } from "ng2-flatpickr";
import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";
import { CoreCommonModule } from "@core/common.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [CodePromoComponent],
  imports: [CommonModule, CodepromoRoutingModule, NgbModule,
    CoreCommonModule,
    ContentHeaderModule,
    Ng2FlatpickrModule,FormsModule],
})
export class CodepromoModule {}
