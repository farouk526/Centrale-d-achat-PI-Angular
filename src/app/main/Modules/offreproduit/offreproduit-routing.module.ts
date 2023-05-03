import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "app/auth/helpers";

import { OffreproduitComponent } from "./offreproduit.component";

const routes: Routes = [
  {
    path: "",
    component: OffreproduitComponent, canActivate: [AuthGuard], data: { roles: ['User'] } 
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffreProduitRoutingModule {}
