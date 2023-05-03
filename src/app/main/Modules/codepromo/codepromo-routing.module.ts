import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "app/auth/helpers";

import { CodePromoComponent } from "./codepromo.component";

const routes: Routes = [
  {
    path: "",
    component: CodePromoComponent, canActivate: [AuthGuard], data: { roles: ['User'] } 
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodepromoRoutingModule {}
