import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ItemCommandeRoutingModule } from "./itemcommande-routing.module";
import { ItemcommandeComponent } from "./itemcommande.component";


import { Ng2FlatpickrModule } from "ng2-flatpickr";
import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";
import { CoreCommonModule } from "@core/common.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [ItemcommandeComponent],
  imports: [CommonModule, ItemCommandeRoutingModule, NgbModule,
    CoreCommonModule,
    ContentHeaderModule,
    Ng2FlatpickrModule,FormsModule],
})
export class ItemCommandeModule {}
