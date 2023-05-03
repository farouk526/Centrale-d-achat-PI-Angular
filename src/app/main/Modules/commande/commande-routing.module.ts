import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "app/auth/helpers";

import { CommandeComponent } from "./commande.component";
import { GetallcommandeComponent } from "./getallcommande/getallcommande.component";

const routes: Routes = [
  {
    path: "",
    component: CommandeComponent, canActivate: [AuthGuard], data: { roles: ['User'] } 
    
  }, 
  {
    path: "/getallcommande",
    component: GetallcommandeComponent, canActivate: [AuthGuard], data: { roles: ['User'] } 
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommandeRoutingModule {}
