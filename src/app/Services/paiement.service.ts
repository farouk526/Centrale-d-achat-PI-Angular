import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paiement } from 'app/Model/Paiement';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {
  httpOptions = {
    headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
    })
  }
  url = 'http://localhost:9090/paiement';
  newUrl : string
  PAIEMENTS = [];

  private _refresh$=new Subject<void>()

  get refresh$(){
    return this._refresh$;
  }

  constructor(private http: HttpClient) { }

  getPaiement(id: number): Observable<Paiement> {
    return this.http.get<Paiement>(`${this.url}/${id}`, this.httpOptions);
    console.log("get Paiement");
  }

  getAllPaiements(): Observable<Paiement[]> {
    return this.http.get<Paiement[]>(this.url + "/", this.httpOptions);
  }

  addPaiement(paiement: Paiement): Observable<Paiement> {
    return this.http.post<Paiement>(this.url+"/add" , paiement, this.httpOptions);
    console.log("Paiement ajoutee");
  }

  deletePaiement(paiement: Paiement | number): Observable<Paiement> {
    const id = typeof paiement === 'number' ? paiement : paiement.id;
    const url = `${this.url}/delete/${id}`;
    return this.http.delete<Paiement>(url, this.httpOptions);
  }


  updatePaiement(id: number, paiement: Paiement): Observable<Paiement> {
    return this.http.put<Paiement>(`${this.url}/edit/${id}`, paiement, this.httpOptions);
  }
}
