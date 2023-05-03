import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { CoreConfigService } from '@core/services/config.service';
import { Commande } from 'app/Model/Commande';
import { CommandeServiceService } from 'app/Services/commande-service.service';
import { Facture } from 'app/Model/Facture';
import { FactureService } from 'app/Services/facture.service';
import { ItemCommande } from 'app/Model/ItemCommande';
import { ItemCommandeService } from 'app/Services/itemcommande.service';
import { Panier } from 'app/Model/Panier';
import { MontantPanier } from 'app/Model/MontantPanier';
import { CodePromo } from 'app/Model/CodePromo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-getallcommande',
  templateUrl: './getallcommande.component.html',
  styleUrls: ['./getallcommande.component.scss']
})

export class GetallcommandeComponent implements OnInit {
  itemCommande : ItemCommande;
  ItemCommandes : ItemCommande[];
  Factures:Facture[];
  Commandes: Commande[];
  commande:Commande;
  /*montantPanier:MontantPanier = null;
  panier: Panier = {
    clientcin: '',
    codePromo: '',
    items: [
      { 
        id: 1, 
        code: 'ABC123', 
        label: 'Product 1', 
        quantity: null, 
        tva: null ,
        priceHt: 10.0, 
        montantHt: null, 
        montantTtc: null,
        montantTotalHT: null, 
        
      }
    ] };*/
    panierForm: FormGroup;
    montantTotalAPayer: number;

  public contentHeader: object;  
  constructor(private fb: FormBuilder, private http: HttpClient,private _coreSidebarService: CoreSidebarService ,private cs:CommandeServiceService, private is:ItemCommandeService ,private fs:FactureService,private route:Router,  private _coreConfigService: CoreConfigService) { 
    
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
    this.getItemsCommande(); 
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

    this.panierForm = this.fb.group({
      clientcin: ['', [Validators.required, Validators.minLength(8)]],
      codePromo: [''],
      items: this.fb.array([
        this.fb.group({
          quantity: ['', Validators.required],
          montantHt: ['', Validators.required],
          montantTotalHT: [''],
          tva: ['']
        })
      ])
    });

    this.cs.GetAllCommande().subscribe((data: Commande[]) => {
      this.Commandes = data;
    });

    this.fs.GetAllFacture().subscribe((data: Facture[]) => {
      this.Factures = data;
    });
    this.itemCommande = new ItemCommande();
 
    this.is.getAllItemCommande().subscribe((data: ItemCommande[]) => {
      this.ItemCommandes = data;
    });
  }

  public getFacture(): void {
    this.fs.GetAllFacture().subscribe((data )=> {
      this.fs.FACTURES = data 
  
    });
    
  }
  public getItemsCommande(): void {
    this.is.getAllItemCommande().subscribe((data )=> {
      this.is.ITEMCOMMANDES = data
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

  onSubmit(): void {
    this.http.post<any>('http://localhost:9090/commande/montant-panier', this.panierForm.value)
      .subscribe(data => {
        this.montantTotalAPayer = data.montantTotalAPayer;
      });
  }
  
 /* onSubmit(): void {
    this.cs.calculMontantPanier(this.panier)
      .subscribe(montantPanier => this.montantPanier = montantPanier);
  }*/

  

}
