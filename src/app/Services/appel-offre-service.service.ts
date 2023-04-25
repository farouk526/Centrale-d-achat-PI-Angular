import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppelOffre } from '../Model/AppelOffre';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AppelOffreServiceService {
  httpOptions = {
    headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
    })
  }
 url = 'http://localhost:9090/appelOffre';
  newUrl : string
  APPELOFFRES = [];

  private _refresh$=new Subject<void>()

  get refresh$(){
    return this._refresh$;
  }

  constructor(private http: HttpClient) { }
  getAppelOffre(id:number):Observable<AppelOffre>{
    return this.http.get<AppelOffre>(this.url+"/"+id,this.httpOptions);
    console.log("get AppelOffre");
  }
  public GetAllAppelOffre(): Observable<AppelOffre[]> {
    return this.http.get<AppelOffre[]>(this.url+"/",this.httpOptions);
  }
  addAppelOffre (appelOffre: AppelOffre): Observable<AppelOffre> {
    return this.http.post<AppelOffre>(this.url+"/add", appelOffre,
    this.httpOptions).pipe(
      tap(()=>{
        this._refresh$.next()
      }
      ));
    console.log("appeloffre ajoutee");
  }
  deleteAppelOffre (appelOffre: AppelOffre | number):
Observable<AppelOffre> { const id = typeof appelOffre === 'number'
? appelOffre : appelOffre.idAppelOffre; const url=this.url+'/'+id;
return this.http.delete<AppelOffre>(url);
}

getAppelOffreById(id: number): Observable<AppelOffre> {
  return this.http.get<AppelOffre>(this.url +'/'+ id); }
 
updateAppelOffre (id: number, appelOffre: AppelOffre): Observable<AppelOffre> {
    return this.http.put<AppelOffre>(this.url+'/'+ id, appelOffre,
    this.httpOptions);
    }
}
