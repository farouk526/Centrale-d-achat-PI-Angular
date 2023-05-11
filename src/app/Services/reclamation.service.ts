import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reclamation } from 'app/Model/Reclamation';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ReclamationService {
  httpOptions = {
    headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
    })
  }
  url = 'http://localhost:9090/reclamation';
  newUrl: string;
  ITEMCOMMANDES = [];

  private _refresh$ = new Subject<void>();

  get refresh$() {
    return this._refresh$;
  }

  constructor(private http: HttpClient) { }

  getReclamation(id: number): Observable<Reclamation> {
    return this.http.get<Reclamation>(this.url + "/" + id, this.httpOptions);
  }

  getAllReclamation(username:string): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(this.url + "/getReclamationByUser/"+username, this.httpOptions);
  }

  getAllReclamation2(): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(this.url + "/", this.httpOptions);
  }

  addReclamation(reclamation: Reclamation): Observable<Reclamation> {
    return this.http.post<Reclamation>(this.url + "/add", reclamation, this.httpOptions);
  }

  deleteReclamation(reclamation: number): Observable<Reclamation> {

    const url = `${this.url}/delete/${reclamation}`;
    return this.http.delete<Reclamation>(url, this.httpOptions);
  }

  getReclamationById(id: number): Observable<Reclamation> {
    return this.http.get<Reclamation>(this.url + '/' + id, this.httpOptions);
  }

  updateReclamation(id: number, reclamation: Reclamation): Observable<Reclamation> {
    return this.http.put<Reclamation>(this.url + '/edit/' + id, reclamation, this.httpOptions);
  }

  public search = new BehaviorSubject<string>("");
}
