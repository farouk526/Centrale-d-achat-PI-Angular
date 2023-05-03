import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "app/auth/helpers";

import { AppelOffreComponent } from "./appel-offre.component";

const routes: Routes = [
  {
    path: "",
    component: AppelOffreComponent, canActivate: [AuthGuard], data: { roles: ['User'] } 
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppeloffreRoutingModule {}
