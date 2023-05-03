import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "app/auth/helpers";

import { ItemfactureComponent } from "./itemfacture.component";

const routes: Routes = [
  {
    path: "",
    component: ItemfactureComponent, canActivate: [AuthGuard], data: { roles: ['User'] } 
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemFactureRoutingModule {}
