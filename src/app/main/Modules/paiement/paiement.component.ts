import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { CoreConfigService } from '@core/services/config.service';
import { Paiement } from 'app/Model/Paiement';
import { PaiementService } from 'app/Services/paiement.service';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.scss']
})
export class PaiementComponent implements OnInit {
  paiements: Paiement[];
  paiement: Paiement;
  public contentHeader: object;

  constructor(private _coreSidebarService: CoreSidebarService,
              private ps: PaiementService,
              private route: Router,
              private _coreConfigService: CoreConfigService) {
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
    this.getPaiements();
    this.contentHeader = {
      headerTitle: 'Paiements',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Liste des Paiements',
            isLink: false
          }
        ]
      }
    };
    this.paiement = new Paiement();

    this.ps.getAllPaiements().subscribe((data: Paiement[]) => {
      this.paiements = data;
    });
  }

  delete(id: number): void {
    this.ps.deletePaiement(id).subscribe((data) => {
      console.log('Paiement supprimé !');
      this.getPaiements();
      location.reload();
    });
  }

  public getPaiements(): void {
    this.ps.getAllPaiements().subscribe((data) => {
      this.ps.PAIEMENTS = data;
    });
  }

  save(): void {
    this.ps.addPaiement(this.paiement).subscribe((res) => {
      console.log('Paiement ajouté !');
      this.route.navigateByUrl('/paiement');
    });
    location.reload();
  }

  goToUpdatePaiement(id: number): void {
    const url = `/update-paiement/${id}`;
    console.log(url);
    this.route.navigate([url]);
  }
}

