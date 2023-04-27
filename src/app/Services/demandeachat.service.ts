import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DemandeAchat } from 'app/Model/DemandeAchat';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeAchatService {
  httpOptions = {
    headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
    })
  }
  url = 'http://localhost:9090/demandeAchat';
  DEMANDESACHATS = [];

  private _refresh$ = new Subject<void>()

  get refresh$(){
    return this._refresh$;
  }

  constructor(private http: HttpClient) { }

  getDemandeAchat(id: number): Observable<DemandeAchat> {
    return this.http.get<DemandeAchat>(`${this.url}/${id}`, this.httpOptions);
  }

  getAllDemandesAchat(): Observable<DemandeAchat[]> {
    return this.http.get<DemandeAchat[]>(this.url, this.httpOptions);
  }

  addDemandeAchat(demandeAchat: DemandeAchat): Observable<DemandeAchat> {
    return this.http.post<DemandeAchat>(`${this.url}/add`, demandeAchat, this.httpOptions);
  }

  deleteDemandeAchat(demandeAchat: DemandeAchat | number): Observable<DemandeAchat> {
    const id = typeof demandeAchat === 'number' ? demandeAchat : demandeAchat.id;
    const url = `${this.url}/delete/${id}`;
    return this.http.delete<DemandeAchat>(url, this.httpOptions);
  }

  updateDemandeAchat(id: number, demandeAchat: DemandeAchat): Observable<DemandeAchat> {
    return this.http.put<DemandeAchat>(`${this.url}/edit/${id}`, demandeAchat, this.httpOptions);
  }
}
