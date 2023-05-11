import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "app/auth/helpers";

import { GetallcommandeComponent } from "./getallcommande.component";

const routes: Routes = [
  {
    path: "commande/getallcommande",
    component: GetallcommandeComponent, canActivate: [AuthGuard], data: { roles: ['User'] } 
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class getallCommandeRoutingModule {}
