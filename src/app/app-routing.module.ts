import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminModule } from "./main/Modules/Admin/admin.module";

import { ProfileModule } from "./main/Modules/profile/profile.module";
import { HomeComponent } from "./main/Modules/home/home.component";
import { GetallcommandeComponent } from "./main/Modules/commande/getallcommande/getallcommande.component";
import { CartComponent } from "./main/Modules/cart/cart.component";
import { AuthGuard } from "./auth/helpers";


const routes: Routes = [
  {path:'form', component:GetallcommandeComponent},
  {path:'cart', component:CartComponent},
  {
    path: 'apps',
    loadChildren: () => import('./main/apps/apps.module').then(m => m.AppsModule)
  },
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
    path: "codepromo",
    loadChildren: () =>
      import("./main/Modules/codepromo/codepromo.module").then(
        (m) => m.CodepromoModule
      ),
  },
  
  {
    path: "commande",
    loadChildren: () =>
      import("./main/Modules/commande/commande.module").then(
        (m) => m.CommandeModule
      ),
  },

  {
    path: "demandeachat",
    loadChildren: () =>
      import("./main/Modules/demandeachat/demandeachat.module").then(
        (m) => m.DemandeAchatModule
      ),
  },
  {
    path: "facture",
    loadChildren: () =>
      import("./main/Modules/facture/facture.module").then(
        (m) => m.FactureModule
      ),
  },
  {
    path: "itemcommande",
    loadChildren: () =>
      import("./main/Modules/itemcommande/itemcommande.module").then(
        (m) => m.ItemCommandeModule
      ),
  },
  {
    path: "itemfacture",
    loadChildren: () =>
      import("./main/Modules/itemfacture/itemfacture.module").then(
        (m) => m.ItemFactureModule
      ),
  },
  {
    path: "naturearticle",
    loadChildren: () =>
      import("./main/Modules/nature-article/nature-article.module").then(
        (m) => m.NatureArticleModule
      ),
  }, 
  {
    path: "offreproduit",
    loadChildren: () =>
      import("./main/Modules/offreproduit/offreproduit.module").then(
        (m) => m.OffreProduitModule
      ),
  },
  {
    path: "offreservice",
    loadChildren: () =>
      import("./main/Modules/offreservice/offreservice.module").then(
        (m) => m.OffreServiceModule
      ),
  }, 
  {
    path: "paiement",
    loadChildren: () =>
      import("./main/Modules/paiement/paiement.module").then(
        (m) => m.PaiementModule
      ),
  }, 
  {
    path: "home",
    component: HomeComponent,
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