import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "app/auth/helpers";

import { ItemcommandeComponent } from "./itemcommande.component";

const routes: Routes = [
  {
    path: "",
    component: ItemcommandeComponent, canActivate: [AuthGuard], data: { roles: ['User'] } 
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemCommandeRoutingModule {}
