import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { CoreConfigService } from '@core/services/config.service';
import { OffreProduit } from 'app/Model/OffreProduit';
import { OffreProduitService } from 'app/Services/offreproduit.service';

@Component({
  selector: 'app-offreproduit',
  templateUrl: './offreproduit.component.html',
  styleUrls: ['./offreproduit.component.scss']
})
export class OffreproduitComponent implements OnInit {

  OffreProduits: OffreProduit[];
  offreProduit: OffreProduit;
  previewImage: string;
  imageInvalid: boolean;
  public contentHeader: object;

  constructor(
    private _coreSidebarService: CoreSidebarService,
    private ops: OffreProduitService,
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
    this.getOffreProduit();
    this.contentHeader = {
      headerTitle: 'Offres Produits',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Liste des Offres Produits',
            isLink: false
          }
        ]
      }
    };
    this.offreProduit = new OffreProduit();

    this.ops.GetAllOffreProduit().subscribe((data: OffreProduit[]) => {
      this.OffreProduits = data;
    });
  }

  delete(id: number): void {
    this.ops.deleteOffreProduit(id).subscribe((data) => {
      console.log('Offre produit supprimé !');
      this.getOffreProduit();
      location.reload();
    })
  }

  public getOffreProduit(): void {
    this.ops.GetAllOffreProduit().subscribe((data) => {
      this.ops.OFFREPRODUITS = data
    });
  }

  save(): void {
    if (!this.offreProduit.image) {
      this.imageInvalid = true;
      return;
    }
    this.ops.addOffreProduit(this.offreProduit).subscribe((res) => {
      console.log('Offre produit ajouté !');
      this.route.navigateByUrl('/offreproduit');
      location.reload();
    });
  }

  goToUpdateOffreProduit(id: number): void {
    const url = `/update-offreproduit/${id}`;
    console.log(url);
    this.route.navigate([url]);
  }

  onFileSelected(event) {
    const file = event.target.files[0];
    if (file) {
      this.imageInvalid = false;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.previewImage = reader.result as string;
        this.offreProduit.image = this.previewImage;
      };
    }
  }
}
