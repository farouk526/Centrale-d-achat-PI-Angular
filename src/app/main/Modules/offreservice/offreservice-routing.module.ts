import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "app/auth/helpers";

import { OffreserviceComponent } from "./offreservice.component";

const routes: Routes = [
  {
    path: "",
    component: OffreserviceComponent, canActivate: [AuthGuard], data: { roles: ['User'] } 
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffreServiceRoutingModule {}
