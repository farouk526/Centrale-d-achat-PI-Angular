import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OffreService} from 'app/Model/OffreService';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OffreserviceService {
  httpOptions = {
    headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
    })
  }
 url = 'http://localhost:9090/offreService';
  newUrl : string
  OFFRESERVICES = [];

  private _refresh$=new Subject<void>()

  get refresh$(){
    return this._refresh$;
  }

  constructor(private http: HttpClient) { }
  getOffreService(id:number):Observable<OffreService>{
    return this.http.get<OffreService>(this.url+"/"+id,this.httpOptions);
    console.log("get OffreService");
  }
  public GetAllOffreService(): Observable<OffreService[]> {
    return this.http.get<OffreService[]>(this.url+"/",this.httpOptions);
  }
  addOffreService (offreService: OffreService): Observable<OffreService> {
    return this.http.post<OffreService>(this.url+"/add", offreService,
    this.httpOptions);
    console.log("OffreService ajoutee");
  }
  deleteOffreService (offreService: OffreService | number):
Observable<OffreService> { const id = typeof offreService === 'number'
? offreService : offreService.id; 
//const url=this.url+'/delete'+id;
//return this.http.delete<OffreService>(url);
const url = `${this.url}/delete/${id}`;
  return this.http.delete<OffreService>(url, this.httpOptions);
}

getOffreServiceById(id: number): Observable<OffreService> {
  return this.http.get<OffreService>(this.url +'/'+ id); }
 
updateOffreService (id: number, offreService: OffreService): Observable<OffreService> {
    return this.http.put<OffreService>(this.url+'/edit'+ id, offreService,
    this.httpOptions);
    }
}
