import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { CoreConfigService } from '@core/services/config.service';
import { CodePromo } from 'app/Model/CodePromo';
import { CodePromoService } from 'app/Services/codepromo.service';

@Component({
selector: 'app-codepromo',
templateUrl: './codepromo.component.html',
styleUrls: ['./codepromo.component.scss']
})
export class CodePromoComponent implements OnInit {

CodePromos: CodePromo[];
codepromo:CodePromo;
public contentHeader: object;
constructor(private _coreSidebarService: CoreSidebarService ,private cps:CodePromoService, private route:Router, private _coreConfigService: CoreConfigService) {
this._coreConfigService.config = {
layout: {
navbar: {
hidden: false
},  
skin:'dark',
menu: {
  hidden: false
},
footer: {
  hidden: false
},
customizer: false,
enableLocalStorage: false
}
};
}
toggleSidebar(name): void {
  this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
}

ngOnInit(): void {
  this.getCodePromo(); 
  this.contentHeader = {
    headerTitle: 'Code Promos',
    actionButton: true,
    breadcrumb: {
      type: '',
      links: [
        {
          name: 'Liste des Code Promos',
          isLink: false
        }
      ]
    }
  };
  this.codepromo = new CodePromo();
 
  this.cps.GetAllCodePromo().subscribe((data: CodePromo[]) => {
    this.CodePromos = data;
  });
}
delete(id: number): void  {
  this.cps.deleteCodePromo(id).subscribe((data) => {
    console.log('code promo supprimé !');
    this.getCodePromo();
    location.reload();
})
}
public getCodePromo(): void {
this.cps.GetAllCodePromo().subscribe((data )=> {
this.cps.CODEPROMOS = data  });
  
}
save() : void {
  this.cps.addCodePromo(this.codepromo).subscribe ((res) => {
  console.log('code promo ajouté !');
  this.route.navigateByUrl('/codepromo');})
      ;
      location.reload();
}

goToUpdateCodePromo(id: number): void {
  const url = `/update-codepromo/${id}`;
console.log(url);
this.route.navigate([url]);
}
}
