import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { CoreConfigService } from '@core/services/config.service';
import { ItemCommande } from 'app/Model/ItemCommande';
import { ItemCommandeService } from 'app/Services/itemcommande.service';

@Component({
  selector: 'app-itemcommande',
  templateUrl: './itemcommande.component.html',
  styleUrls: ['./itemcommande.component.scss']
})
export class ItemcommandeComponent implements OnInit {

  ItemCommandes: ItemCommande[];
  itemCommande: ItemCommande;
  public contentHeader: object;

  constructor(
    private _coreSidebarService: CoreSidebarService,
    private ics: ItemCommandeService,
    private route: Router,
    private _coreConfigService: CoreConfigService
  ) {
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
    this.getItemsCommande(); 
    this.contentHeader = {
      headerTitle: 'Items Commande',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Liste des Items Commande',
            isLink: false
          }
        ]
      }
    };
    this.itemCommande = new ItemCommande();
 
    this.ics.getAllItemCommande().subscribe((data: ItemCommande[]) => {
      this.ItemCommandes = data;
    });
  }

  delete(id: number): void  {
    this.ics.deleteItemCommande(id).subscribe((data) => {
      console.log('item commande supprimé !');
      this.getItemsCommande();
      location.reload();
    })
  }

  public getItemsCommande(): void {
    this.ics.getAllItemCommande().subscribe((data )=> {
      this.ics.ITEMCOMMANDES = data
    });
  }
  
  save(): void {
    this.ics.addItemCommande(this.itemCommande).subscribe((res) => {
      console.log('item commande ajouté !');
      this.route.navigateByUrl('/itemcommande');
    });
    location.reload();
  }

  goToUpdateItemCommande(id: number): void {
    const url = `/update-itemcommande/${id}`;
    console.log(url);
    this.route.navigate([url]);
  }
  // Add this method in your component
calculateMontantPanier(): void {
  // Iterate over each item in the cart and calculate montantHT and montantTTC
  for (let i = 0; i < this.ItemCommandes.length; i++) {
    const item = this.ItemCommandes[i];
    item.montantHt = item.quantity * item.priceHt;
    item.montantTtc = item.montantHt * (1 + item.tva / 100);
  }
}

}
