import { Component, OnInit } from '@angular/core';
import {ItemCommande} from "../../../../Model/ItemCommande";
import {Reclamation} from "../../../../Model/Reclamation";
import {ReclamationService} from "../../../../Services/reclamation.service";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../../auth/service";

@Component({
  selector: 'app-list-reclamation',
  templateUrl: './list-reclamation.component.html',
  styleUrls: ['./list-reclamation.component.scss']
})
export class ListReclamationComponent implements OnInit {
  Reclamation: Reclamation[];
  currentUser:any ;
    public searchTerm !: string;
    SortbyParam = '';
    SortDirection = 'asc';

    searchKey:string="";
  roles : any|undefined;
  constructor( private rs: ReclamationService,
               private authServ : AuthenticationService,
               private router: Router) { }

  ngOnInit(): void {
    this.currentUser! = JSON.parse(localStorage.getItem('currentUser'));
     this.roles =this.authServ.getRoles();
   console.log(this.roles[0].roleName) ;
    if (this.roles[0].roleName !=='Admin'){
    this.rs.getAllReclamation(this.currentUser.userName).subscribe((data: Reclamation[]) => {
      this.Reclamation = data;

    });

    }
    else if(this.roles[0].roleName ==='Admin') {
      this.rs.getAllReclamation2().subscribe((data: Reclamation[]) => {
        this.Reclamation = data;
          this.rs.search.subscribe((val:any)=>{
              this.searchKey = val;
          })
      });
    }
  }

  delete(id: number): void  {
    this.rs.deleteReclamation(id).subscribe((data) => {
      console.log('reclamation commande supprimé !');
      location.reload();
    })
  }

  update(id: number): void  {
    const url = `reclamation/edit/${id}`;
    this.router.navigate([url])
  }

    search(event:any){
        this.searchTerm = (event.target as HTMLInputElement).value;
        console.log(this.searchTerm);
        this.rs.search.next(this.searchTerm);
    }

}
