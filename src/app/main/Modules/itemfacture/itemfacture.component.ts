import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { CoreConfigService } from '@core/services/config.service';
import { ItemFacture } from 'app/Model/ItemFacture';
import { ItemFactureService } from 'app/Services/itemfacture.service';

@Component({
  selector: 'app-itemfacture',
  templateUrl: './itemfacture.component.html',
  styleUrls: ['./itemfacture.component.scss']
})
export class ItemfactureComponent implements OnInit {

  
  ItemFactures: ItemFacture[];
  itemFacture: ItemFacture;
  public contentHeader: object;

  constructor(
    private _coreSidebarService: CoreSidebarService,
    private ifs: ItemFactureService,
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
      headerTitle: 'Items Factures',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Liste des Items facture',
            isLink: false
          }
        ]
      }
    };
    this.itemFacture = new ItemFacture();
 
    this.ifs.GetAllItemFacture().subscribe((data: ItemFacture[]) => {
      this.ItemFactures = data;
    });
  }

  delete(id: number): void  {
    this.ifs.deleteItemFacture(id).subscribe((data) => {
      console.log('item FACTURE supprimé !');
      this.getItemsCommande();
      location.reload();
    })
  }

  public getItemsCommande(): void {
    this.ifs.GetAllItemFacture().subscribe((data )=> {
      this.ifs.ITEMFACTURES = data
    });
  }
  
  save(): void {
    this.ifs.addItemFacture(this.itemFacture).subscribe((res) => {
      console.log('item commande ajouté !');
      this.route.navigateByUrl('/itemcommande');
    });
    location.reload();
  }

  goToUpdateItemCommande(id: number): void {
    const url = `/update-itemfacture/${id}`;
    console.log(url);
    this.route.navigate([url]);
  }
}
