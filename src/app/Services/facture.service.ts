import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Facture } from 'app/Model/Facture';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  httpOptions = {
    headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
    })
  }
 url = 'http://localhost:9090/facture';
  newUrl : string
  FACTURES = [];

  private _refresh$=new Subject<void>()

  get refresh$(){
    return this._refresh$;
  }
  constructor(private http: HttpClient) { }
  getFacture(id:number):Observable<Facture>{
    return this.http.get<Facture>(this.url+"/"+id,this.httpOptions);
    console.log("get facture");
  }
  public GetAllFacture(): Observable<Facture[]> {
    return this.http.get<Facture[]>(this.url+"/",this.httpOptions);
  }
  addFacture (facture: Facture): Observable<Facture> {
    return this.http.post<Facture>(this.url+"/add", facture,
    this.httpOptions);
    console.log("facture ajoutee");
  }
  deleteFacture (facture: Facture | number):
Observable<Facture> { const id = typeof facture === 'number'
? facture : facture.id; 
//const url=this.url+'/delete'+id;
//return this.http.delete<Facture>(url);
const url = `${this.url}/delete/${id}`;
  return this.http.delete<Facture>(url, this.httpOptions);
}

getFactureById(id: number): Observable<Facture> {
  return this.http.get<Facture>(this.url +'/'+ id); }
 
updateFacture (id: number, facture: Facture): Observable<Facture> {
    return this.http.put<Facture>(this.url+'/'+ id, facture,
    this.httpOptions);
    }
}

