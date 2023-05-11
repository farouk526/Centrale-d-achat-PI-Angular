import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { CoreConfigService } from '@core/services/config.service';
import { AppelOffre } from 'app/Model/AppelOffre';
import { AppelOffreServiceService } from 'app/Services/appel-offre-service.service';

@Component({
  selector: 'app-appel-offre',
  templateUrl: './appel-offre.component.html',
  styleUrls: ['./appel-offre.component.scss']
})
export class AppelOffreComponent implements OnInit {

AppelOffres: AppelOffre[];
appeloffre:AppelOffre;
public contentHeader: object;  
constructor(private _coreSidebarService: CoreSidebarService ,private as:AppelOffreServiceService, private route:Router,  private _coreConfigService: CoreConfigService) {
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
    this.getAppelOffre(); 
    this.contentHeader = {
      headerTitle: '  Appel Offres',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'List of appels doffres',
            isLink: false
          }
        ]
      }
    };
    this.appeloffre = new AppelOffre();
   
    this.as.GetAllAppelOffre().subscribe((data: AppelOffre[]) => {
      this.AppelOffres = data;
    });
  }
  delete(id: number): void  {
    this.as.deleteAppelOffre(id).subscribe((data) => {
      console.log('Appel d\'offre supprimé !');
      //this.as.GetAllAppelOffre();
      //location.reload();
      this.getAppelOffre();
      location.reload();
  })
}
  public getAppelOffre(): void {
    this.as.GetAllAppelOffre().subscribe((data )=> {
      this.as.APPELOFFRES = data 
  
    });
    
  }
  save() : void {
    this.as.addAppelOffre(this.appeloffre).subscribe ((res) => {
    console.log('Appel d\'offre ajouté !');
    this.route.navigateByUrl('/appeloffre');})
        ;
        location.reload();
  }
  goToUpdateAppelOffre(id: number): void {
    const url = `/update-appeloffre/${id}`;
  console.log(url);
  this.route.navigate([url]);
  }
}
