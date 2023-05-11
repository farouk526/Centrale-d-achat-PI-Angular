import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { CoreConfigService } from '@core/services/config.service';
import { DemandeAchat } from 'app/Model/DemandeAchat';
import { DemandeAchatService } from 'app/Services/demandeachat.service';

@Component({
  selector: 'app-demandeachat',
  templateUrl: './demandeachat.component.html',
  styleUrls: ['./demandeachat.component.scss']
})
export class DemandeachatComponent implements OnInit {

  DemandesAchats: DemandeAchat[];
  demandeAchat: DemandeAchat;
  public contentHeader: object;  

  constructor(
    private _coreSidebarService: CoreSidebarService,
    private das: DemandeAchatService,
    private route: Router,
    private _coreConfigService: CoreConfigService
  ) {
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
    this.getDemandeAchat(); 
    this.contentHeader = {
      headerTitle: 'Demandes d\'achat',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Liste des demandes d\'achat',
            isLink: false
          }
        ]
      }
    };
    this.demandeAchat = new DemandeAchat();
   
    this.das.getAllDemandesAchat().subscribe((data: DemandeAchat[]) => {
      this.DemandesAchats = data;
    });
  }

  delete(id: number): void  {
    this.das.deleteDemandeAchat(id).subscribe((data) => {
      console.log('Demande d\'achat supprimée !');
      this.getDemandeAchat();
      location.reload();
    })
  }

  public getDemandeAchat(): void {
    this.das.getAllDemandesAchat().subscribe((data )=> {
      this.das.DEMANDESACHATS = data 
    });
  }
  
  save(): void {
    this.das.addDemandeAchat(this.demandeAchat).subscribe ((res) => {
      console.log('Demande d\'achat ajoutée !');
      this.route.navigateByUrl('/demandeachat');
    });
    location.reload();
  }

  goToUpdateDemandeAchat(id: number): void {
    const url = `/update-demandeachat/${id}`;
    console.log(url);
    this.route.navigate([url]);
  }
}
