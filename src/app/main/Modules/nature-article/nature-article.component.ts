import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { CoreConfigService } from '@core/services/config.service';
import { NatureArticle } from 'app/Model/NatureArticle';
import { NatureArticleService } from 'app/Services/nature-article.service';

@Component({
  selector: 'app-nature-article',
  templateUrl: './nature-article.component.html',
  styleUrls: ['./nature-article.component.scss']
})
export class NatureArticleComponent implements OnInit {

  Naturearticles: NatureArticle[];
  naturearticle:NatureArticle;
  public contentHeader: object;  
  constructor(private _coreSidebarService: CoreSidebarService ,private ns:NatureArticleService, private route:Router,  private _coreConfigService: CoreConfigService) {
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
      this.getNatureArticle(); 
      this.contentHeader = {
        headerTitle: '  Nature Articles',
        actionButton: true,
        breadcrumb: {
          type: '',
          links: [
            {
              name: 'List of Nature Articles',
              isLink: false
            }
          ]
        }
      };
      this.naturearticle = new NatureArticle();
     
      this.ns.GetAllNatureArticle().subscribe((data: NatureArticle[]) => {
        this.Naturearticles = data;
      });
    }
    delete(id: number): void  {
      this.ns.deleteNatureArticle(id).subscribe((data) => {
        console.log('nature article supprimé !');
        //this.as.GetAllnaturearticle();
        //location.reload();
        this.getNatureArticle();
        location.reload();
    })
  }
    public getNatureArticle(): void {
      this.ns.GetAllNatureArticle().subscribe((data )=> {
        this.ns.NATUREARTICLES = data 
    
      });
      
    }
    save() : void {
      this.ns.addNatureArticle(this.naturearticle).subscribe ((res) => {
      console.log('nature article ajouté !');
      this.route.navigateByUrl('/naturearticle');})
          ;
          location.reload();
    }

    goToUpdateNatureArticle(id: number): void {
      const url = `/update-naturearticle/${id}`;
    console.log(url);
    this.route.navigate([url]);
    }
  }
  
