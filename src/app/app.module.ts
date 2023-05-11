import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import "hammerjs";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TranslateModule } from "@ngx-translate/core";
import { ToastrModule } from "ngx-toastr"; // For auth after login toast

import { CoreModule } from "@core/core.module";
import { CoreCommonModule } from "@core/common.module";
import { CoreSidebarModule, CoreThemeCustomizerModule } from "@core/components";

import { coreConfig } from "app/app-config";

import { AppComponent } from "app/app.component";
import { LayoutModule } from "app/layout/layout.module";
import { AppRoutingModule } from "./app-routing.module";
import { CommonModule } from "@angular/common";
import { ContentHeaderModule } from "./layout/components/content-header/content-header.module";

import { FormsModule, ReactiveFormsModule, NgForm } from "@angular/forms";
import { DatePipe } from '@angular/common'
import { HomeAnimationComponent } from "./main/Components/HomeAnimation/animation.component";
import { CartComponent } from './main/Modules/cart/cart.component';
import { AuthGuard } from "./auth/helpers";
import { FakeDbService } from '@fake-db/fake-db.service';
import { fakeBackendProvider } from "./auth/helpers/fake-backend";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { ListReclamationComponent } from './main/modules/reclamation/list-reclamation/list-reclamation.component';
import { UpdatereclamationComponent } from './main/modules/reclamation/updatereclamation/updatereclamation.component';
import {FilterPipe} from "./shared/filter.pipe";
import {SortPipe} from "./shared/sort/sort.pipe";
const appRoutes: Routes = [ {
  path: 'app',
  loadChildren: () => import('./main/apps/apps.module').then(m => m.AppsModule),
  canActivate: [AuthGuard]
},];

@NgModule({
  declarations: [AppComponent,
    HomeAnimationComponent,
    CartComponent,
    ListReclamationComponent,
    UpdatereclamationComponent,
      FilterPipe,
      SortPipe
    ],
  imports: [
    CommonModule,
    ContentHeaderModule,
    ContentHeaderModule,
    TranslateModule,
    CoreCommonModule,
    BrowserModule,
    FormsModule,

    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(FakeDbService, {
      delay: 0,
      passThruUnknownUrl: true
    }),
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: "enabled", // Add options right here
      relativeLinkResolution: "legacy",
    }),
    TranslateModule.forRoot(),

    //NgBootstrap
    NgbModule,
    ToastrModule.forRoot(),

    // Core modules
    CoreModule.forRoot(coreConfig),
    CoreCommonModule,
    CoreSidebarModule,
    CoreThemeCustomizerModule,
    AppRoutingModule,
    // App modules
    LayoutModule,
    ReactiveFormsModule
  ],

  bootstrap: [AppComponent],
  exports: [ReactiveFormsModule, FormsModule],
  providers:[DatePipe,fakeBackendProvider]
})
export class AppModule {}