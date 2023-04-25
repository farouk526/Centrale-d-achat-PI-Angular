import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { AppelOffre } from 'app/Model/AppelOffre';
import { AppelOffreServiceService } from 'app/Services/appel-offre-service.service';

@Component({
  selector: 'app-appel-offre',
  templateUrl: './appel-offre.component.html',
  styleUrls: ['./appel-offre.component.scss']
})
export class AppelOffreComponent implements OnInit {
AppelOffres: AppelOffre[];
  constructor(private _coreSidebarService: CoreSidebarService ,private as:AppelOffreServiceService, private route:Router) { }

  toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }

  ngOnInit(): void {
    this.getAppelOffre(); 
  }

  public getAppelOffre(): void {
    this.as.GetAllAppelOffre().subscribe((data )=> {
      this.as.APPELOFFRES = data 
  
    });
    
  }
}
