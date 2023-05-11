import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NatureArticle } from 'app/Model/NatureArticle';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NatureArticleService {
  httpOptions = {
    headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
    })
  }
 url = 'http://localhost:9090/natureArticle';
  newUrl : string
  NATUREARTICLES = [];

  private _refresh$=new Subject<void>()

  get refresh$(){
    return this._refresh$;
  }

  constructor(private http: HttpClient) { }
  getNatureArticle(id:number):Observable<NatureArticle>{
    return this.http.get<NatureArticle>(this.url+"/"+id,this.httpOptions);
    console.log("get NatureArticle");
  }
  public GetAllNatureArticle(): Observable<NatureArticle[]> {
    return this.http.get<NatureArticle[]>(this.url+"/",this.httpOptions);
  }
  addNatureArticle (naturearticle: NatureArticle): Observable<NatureArticle> {
    return this.http.post<NatureArticle>(this.url+"/add", naturearticle,
    this.httpOptions);
    console.log("NatureArticle ajoutee");
  }
  deleteNatureArticle (naturearticle: NatureArticle | number):
Observable<NatureArticle> { const id = typeof naturearticle === 'number'
? naturearticle : naturearticle.id; 
//const url=this.url+'/delete'+id;
//return this.http.delete<NatureArticle>(url);
const url = `${this.url}/delete/${id}`;
  return this.http.delete<NatureArticle>(url, this.httpOptions);
}

getNatureArticleById(id: number): Observable<NatureArticle> {
  return this.http.get<NatureArticle>(this.url +'/'+ id); }
 
updateNatureArticle (id: number, naturearticle: NatureArticle): Observable<NatureArticle> {
    return this.http.put<NatureArticle>(this.url+'/edit'+ id, naturearticle,
    this.httpOptions);
    }
}
