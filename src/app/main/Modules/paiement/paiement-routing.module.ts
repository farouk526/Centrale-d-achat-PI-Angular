import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "app/auth/helpers";

import { PaiementComponent } from "./paiement.component";

const routes: Routes = [
  {
    path: "",
    component: PaiementComponent, canActivate: [AuthGuard], data: { roles: ['User'] } 
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaiementRoutingModule {}
