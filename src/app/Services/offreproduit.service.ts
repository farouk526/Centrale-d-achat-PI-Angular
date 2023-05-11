import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OffreProduit } from 'app/Model/OffreProduit';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OffreProduitService {
  httpOptions = {
    headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
    })
  }
 url = 'http://localhost:9090/offreProduit';
  newUrl : string
  OFFREPRODUITS = [];

  private _refresh$=new Subject<void>()

  get refresh$(){
    return this._refresh$;
  }

  constructor(private http: HttpClient) { }
  getOffreProduit(id:number):Observable<OffreProduit>{
    return this.http.get<OffreProduit>(this.url+"/"+id,this.httpOptions);
    console.log("get OffreProduit");
  }
  public GetAllOffreProduit(): Observable<OffreProduit[]> {
    return this.http.get<OffreProduit[]>(this.url+"/",this.httpOptions);
  }
  addOffreProduit (offreproduit: OffreProduit): Observable<OffreProduit> {
    return this.http.post<OffreProduit>(this.url+"/addavecImage", offreproduit,
    this.httpOptions);
    console.log("OffreProduit ajoutee");
  }
  deleteOffreProduit (offreproduit: OffreProduit | number):
Observable<OffreProduit> { const id = typeof offreproduit === 'number'
? offreproduit : offreproduit.id; 
//const url=this.url+'/delete'+id;
//return this.http.delete<OffreProduit>(url);
const url = `${this.url}/delete/${id}`;
  return this.http.delete<OffreProduit>(url, this.httpOptions);
}

getOffreProduitById(id: number): Observable<OffreProduit> {
  return this.http.get<OffreProduit>(this.url +'/'+ id); }
 
updateOffreProduit (id: number, offreproduit: OffreProduit): Observable<OffreProduit> {
    return this.http.put<OffreProduit>(this.url+'/edit'+ id, offreproduit,
    this.httpOptions);
    }
}
