import { Component, OnInit } from '@angular/core';
import {Reclamation} from "../../../../Model/Reclamation";
import {ReclamationService} from "../../../../Services/reclamation.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-updatereclamation',
  templateUrl: './updatereclamation.component.html',
  styleUrls: ['./updatereclamation.component.scss']
})
export class UpdatereclamationComponent implements OnInit {
  description ='';
  reclamationType: 'TECHNICAL';
  email ='';

  identifiant!: any;
  idItem:number;
  reclamation: Reclamation = new Reclamation();
  constructor(private rs: ReclamationService,
              private route: Router,
              private router: ActivatedRoute) { }

  ngOnInit(): void {
      this.identifiant = this.router.snapshot.paramMap.get('id');
this.retrieveUser()
  }

  retrieveUser(): void {

    this.identifiant = this.router.snapshot.paramMap.get('id');

    this.rs.getReclamationById(this.identifiant)
        .subscribe(
            (reclamation: Reclamation) => {


              this.email = reclamation.email;
              this.description = reclamation.description;
              // this.reclamationType = reclamation.reclamationType;


              console.log(this.description);

            });

  }

    update() {
        this.reclamation.description=this.description;

        this.reclamation.email=this.email;
        this.reclamation.reclamationType=this.reclamationType;
        console.log(this.reclamation+"testedit")

        this.rs.updateReclamation(this.identifiant,this.reclamation)
            .subscribe((response:any) => {
                console.log(response+"response")
                if (response.status === 200) {
                    console.log('update successfully');


                } else {
                    console.log('erreur update');
                }
                 window.location.reload();
            });
    }

}
