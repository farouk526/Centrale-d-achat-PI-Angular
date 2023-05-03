import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "app/auth/helpers";

import { DemandeachatComponent } from "./demandeachat.component";

const routes: Routes = [
  {
    path: "",
    component: DemandeachatComponent, canActivate: [AuthGuard], data: { roles: ['User'] } 
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandeAchatRoutingModule {}
