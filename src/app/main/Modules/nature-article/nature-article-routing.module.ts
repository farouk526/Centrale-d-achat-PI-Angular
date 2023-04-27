import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "app/auth/helpers";

import { NatureArticleComponent } from "./nature-article.component";

const routes: Routes = [
  {
    path: "",
    component: NatureArticleComponent, canActivate: [AuthGuard], data: { roles: ['User'] } 
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NatureArticleRoutingModule {}
