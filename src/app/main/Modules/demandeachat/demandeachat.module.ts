import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DemandeAchatRoutingModule } from "./demandeachat-routing.module";
import { DemandeachatComponent } from "./demandeachat.component";


import { Ng2FlatpickrModule } from "ng2-flatpickr";
import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";
import { CoreCommonModule } from "@core/common.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [DemandeachatComponent],
  imports: [CommonModule, DemandeAchatRoutingModule, NgbModule,
    CoreCommonModule,
    ContentHeaderModule,
    Ng2FlatpickrModule,FormsModule],
})
export class DemandeAchatModule {}
