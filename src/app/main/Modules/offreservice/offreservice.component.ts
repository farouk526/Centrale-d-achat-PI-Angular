import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { CoreConfigService } from '@core/services/config.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OffreService } from 'app/Model/OffreService';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { OffreserviceService } from 'app/Services/offreservice.service';
import { Console } from 'console';


@Component({
  selector: 'app-offreservice',
  templateUrl: './offreservice.component.html',
  styleUrls: ['./offreservice.component.scss']
})
export class OffreserviceComponent implements OnInit {


  public obj: any = {};
  imgg :any
  url:any
  OffreServices: OffreService[];
  offreService: OffreService;
  previewImage: string;
  imageInvalid: boolean;
  offreservice: OffreService = new OffreService();
  public contentHeader: object;
  model : OffreService = {
    id: null,
    nom: null,
    heures: 24,
    disponibilite: true,
    image: "assets/images/pages/eCommerce/8.png",
    prixparheure: 25,
    
    };
    @ViewChild('img') input :ElementRef; 
    submitted = false;


    onSubmit(form: NgForm): void {
      this.submitted = true;
      console.log("a");
      
      if (form.valid) {
        console.log("b");
        this.ofs.postData(this.model).subscribe(response => {
          console.log(response);
        });
      }
      console.log("c");
    }

     /**
   * Constructor
   *
   * @param {NgbModal} modalService
   */

  constructor(
    private _coreSidebarService: CoreSidebarService,
    private ofs: OffreserviceService,
    private route: Router,private modalService: NgbModal,
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
    //if (!this.offreService.image) {
     // this.imageInvalid = true;
      //return;
    //}
    this.ofs.addOffreService(this.offreService).subscribe((res) => {
      console.log('Offre SERVICE ajouté !');
      this.route.navigateByUrl('/offreservice');
      location.reload();
    });
  }

  async upload(){
    const base64Image = this.imgg
    const formData = new FormData()
    formData.append('file', base64Image)
    formData.append('upload_preset', 'angular')
    
    await fetch(`https://api.cloudinary.com/v1_1/dnnhnqiym/image/upload`, {
      method: 'POST',
      body: formData,
    }).then((response) => response.json())
    .then((data) => {
      this.url = data.secure_url
      this.model.image= this.url
      console.log(this.model.image= this.url)
    });
   
  }
  
  onFileSelect(input: HTMLInputElement): void {
    const file = input.files[0];
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        this.model.image = reader.result as string;
        this.previewImage = reader.result as string;
      };
      reader.readAsDataURL(file);
    } else {
      this.imageInvalid = true;
    }
  }

   
  modalOpen(modalBasic) {
    this.modalService.open(modalBasic, {
      windowClass: 'modal'
    });
    
  }
  modalOpenVC(modalVC) {
    this.modalService.open(modalVC, {
      centered: true
    });}

    alertWithSuccess(){
      Swal.fire('Well done...', 'The new '+this.model.nom+' has been added succesfully!', 'success')
    }
}
