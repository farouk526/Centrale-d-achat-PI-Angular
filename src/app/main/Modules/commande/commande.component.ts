import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { CoreConfigService } from '@core/services/config.service';
import { Commande } from 'app/Model/Commande';
import { CommandeServiceService } from 'app/Services/commande-service.service';
import { Facture } from 'app/Model/Facture';
import { FactureService } from 'app/Services/facture.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent implements OnInit {
 Factures:Facture[];
  Commandes: Commande[];
  commande:Commande;
  public contentHeader: object;  
  constructor(private _coreSidebarService: CoreSidebarService ,private cs:CommandeServiceService, private fs:FactureService,private route:Router,  private _coreConfigService: CoreConfigService) { 
    
    this._coreConfigService.config = {
      layout: {
        navbar: {
          hidden: false
        },
     
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
    this.getCommande(); 
    this.contentHeader = {
      headerTitle: '  Commandes',
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
    this.commande = new Commande();
    
    this.cs.GetAllCommande().subscribe((data: Commande[]) => {
      this.Commandes = data;
    });

    this.fs.GetAllFacture().subscribe((data: Facture[]) => {
      this.Factures = data;
    });
  }

  public getFacture(): void {
    this.fs.GetAllFacture().subscribe((data )=> {
      this.fs.FACTURES = data 
  
    });
    
  }
  delete(id: number): void  {
    this.cs.deleteCommande(id).subscribe((data) => {
      console.log('Commande supprimé !');
      
      this.getCommande();
      location.reload();
  })
}
  public getCommande(): void {
    this.cs.GetAllCommande().subscribe((data )=> {
      this.cs.COMMANDES = data 
  
    });
    
  }
  save() : void {
    this.cs.addCommande(this.commande).subscribe ((res) => {
    console.log('commande ajouté !');
    this.route.navigateByUrl('/commande');})
        ;
        location.reload();
  }
}
