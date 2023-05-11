import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commande } from 'app/Model/Commande';
import { MontantPanier } from 'app/Model/MontantPanier';
import { Panier } from 'app/Model/Panier';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommandeServiceService {
  httpOptions = {
    headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
    })
  }
 url = 'http://localhost:9090/commande';
  newUrl : string
  COMMANDES = [];

  private _refresh$=new Subject<void>()

  get refresh$(){
    return this._refresh$;
  }
  constructor(private http: HttpClient) { }
  getCommande(id:number):Observable<Commande>{
    return this.http.get<Commande>(this.url+"/"+id,this.httpOptions);
    console.log("get Commande");
  }
  public GetAllCommande(): Observable<Commande[]> {
    return this.http.get<Commande[]>(this.url+"/",this.httpOptions);
  }
  addCommande (commande: Commande): Observable<Commande> {
    return this.http.post<Commande>(this.url+"/add", commande,
    this.httpOptions);
    console.log("commande ajoutee");
  }
  deleteCommande (commande: Commande | number):
Observable<Commande> { const id = typeof commande === 'number'
? commande : commande.id; 
//const url=this.url+'/delete'+id;
//return this.http.delete<Commande>(url);
const url = `${this.url}/delete/${id}`;
  return this.http.delete<Commande>(url, this.httpOptions);
}

getCommandeById(id: number): Observable<Commande> {
  return this.http.get<Commande>(this.url +'/'+ id); }
 
updateCommande (id: number, commande: Commande): Observable<Commande> {
    return this.http.put<Commande>(this.url+'/'+ id, commande,
    this.httpOptions);
    }
   
    
      calculMontantPanier(panier: Panier): Observable<MontantPanier> {
        return this.http.post<MontantPanier>(this.url+'/montant-panier', panier);
      }
}
