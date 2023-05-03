import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AppeloffreRoutingModule } from "./appeloffre-routing.module";
import { AppelOffreComponent } from "./appel-offre.component";


import { Ng2FlatpickrModule } from "ng2-flatpickr";
import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";
import { CoreCommonModule } from "@core/common.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppelOffreComponent],
  imports: [CommonModule, AppeloffreRoutingModule, NgbModule,
    CoreCommonModule,
    ContentHeaderModule,
    Ng2FlatpickrModule,FormsModule],
})
export class AppeloffreModule {}
