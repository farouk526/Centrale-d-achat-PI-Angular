import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminModule } from "./main/Modules/Admin/admin.module";

import { ProfileModule } from "./main/Modules/profile/profile.module";


const routes: Routes = [
  {
    path: "pages",
    loadChildren: () =>
      import("./main/pages/pages.module").then((m) => m.PagesModule),
  },
  {
    path: "appeloffre",
    loadChildren: () =>
      import("./main/Modules/appeloffre/appeloffre.module").then(
        (m) => m.AppeloffreModule
      ),
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },

  {
    path: "**",
    redirectTo: "/pages/miscellaneous/error", //Error 404 - Page not found
  },
  
  
];

@NgModule({
  imports: [ProfileModule,AdminModule,RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}