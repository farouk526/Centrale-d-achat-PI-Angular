import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { CoreConfigService } from '@core/services/config.service';
import { Facture } from 'app/Model/Facture';
import { FactureService } from 'app/Services/facture.service';


@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss']
})
export class FactureComponent implements OnInit {

  Factures: Facture[];
  facture:Facture;
  public contentHeader: object;  
  constructor(private _coreSidebarService: CoreSidebarService ,private fs:FactureService, private route:Router,  private _coreConfigService: CoreConfigService) { 
    
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
    this.getFacture(); 
    this.contentHeader = {
      headerTitle: '  Factures',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'List of Orders',
            isLink: false
          }
        ]
      }
    };
    this.facture = new Facture();
    
    this.fs.GetAllFacture().subscribe((data: Facture[]) => {
      this.Factures = data;
    });
  }

  delete(id: number): void  {
    this.fs.deleteFacture(id).subscribe((data) => {
      console.log('Facture supprimé !');
      
      this.getFacture();
      location.reload();
  })
}
  public getFacture(): void {
    this.fs.GetAllFacture().subscribe((data )=> {
      this.fs.FACTURES = data 
  
    });
    
  }
  save() : void {
    this.fs.addFacture(this.facture).subscribe ((res) => {
    console.log('facture ajouté !');
    this.route.navigateByUrl('/facture');})
        ;
        location.reload();
  }
}
