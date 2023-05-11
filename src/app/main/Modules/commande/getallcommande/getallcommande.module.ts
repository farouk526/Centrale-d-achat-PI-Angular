import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { getallCommandeRoutingModule } from "./getallcommande-routing.module";
import { GetallcommandeComponent } from "./getallcommande.component";


import { Ng2FlatpickrModule } from "ng2-flatpickr";
import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";
import { CoreCommonModule } from "@core/common.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [ GetallcommandeComponent],
  imports: [CommonModule, getallCommandeRoutingModule, NgbModule,
    CoreCommonModule,
    ContentHeaderModule,
    Ng2FlatpickrModule,FormsModule,ReactiveFormsModule
  ],
})
export class getallCommandeModule {}
