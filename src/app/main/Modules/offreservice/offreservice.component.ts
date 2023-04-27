import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { CoreConfigService } from '@core/services/config.service';
import { OffreService } from 'app/Model/OffreService';
import { OffreserviceService } from 'app/Services/offreservice.service';

@Component({
  selector: 'app-offreservice',
  templateUrl: './offreservice.component.html',
  styleUrls: ['./offreservice.component.scss']
})
export class OffreserviceComponent implements OnInit {

  OffreServices: OffreService[];
  offreService: OffreService;
  previewImage: string;
  imageInvalid: boolean;
  offreservice: OffreService = new OffreService();
  public contentHeader: object;

  constructor(
    private _coreSidebarService: CoreSidebarService,
    private ofs: OffreserviceService,
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
    this.getOffreService();
    this.contentHeader = {
      headerTitle: 'Offres Services',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Liste des Offres Services',
            isLink: false
          }
        ]
      }
    };
    this.offreService = new OffreService();

    this.ofs.GetAllOffreService().subscribe((data: OffreService[]) => {
      this.OffreServices = data;
    });
  }

  delete(id: number): void {
    this.ofs.deleteOffreService(id).subscribe((data) => {
      console.log('Offre service supprimé !');
      this.getOffreService();
      location.reload();
    })
  }

  public getOffreService(): void {
    this.ofs.GetAllOffreService().subscribe((data) => {
      this.ofs.OFFRESERVICES = data
    });
  }

  save(): void {
    if (!this.offreService.image) {
      this.imageInvalid = true;
      return;
    }
    this.ofs.addOffreService(this.offreService).subscribe((res) => {
      console.log('Offre produit ajouté !');
      this.route.navigateByUrl('/offreservice');
      location.reload();
    });
  }

  onFileSelected(event) {
    const file = event.target.files[0];
    if (file) {
      this.imageInvalid = false;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.previewImage = reader.result as string;
        this.offreservice.image = this.previewImage;
      };
    }
  }
}
