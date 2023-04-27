import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemCommande } from 'app/Model/ItemCommande';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ItemCommandeService {
  httpOptions = {
    headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
    })
  }
  url = 'http://localhost:9090/itemcommande';
  newUrl: string;
  ITEMCOMMANDES = [];

  private _refresh$ = new Subject<void>();

  get refresh$() {
    return this._refresh$;
  }

  constructor(private http: HttpClient) { }

  getItemCommande(id: number): Observable<ItemCommande> {
    return this.http.get<ItemCommande>(this.url + "/" + id, this.httpOptions);
  }

  getAllItemCommande(): Observable<ItemCommande[]> {
    return this.http.get<ItemCommande[]>(this.url + "/", this.httpOptions);
  }

  addItemCommande(itemcommande: ItemCommande): Observable<ItemCommande> {
    return this.http.post<ItemCommande>(this.url + "/add", itemcommande, this.httpOptions);
  }

  deleteItemCommande(itemcommande: ItemCommande | number): Observable<ItemCommande> {
    const id = typeof itemcommande === 'number' ? itemcommande : itemcommande.id;
    const url = `${this.url}/delete/${id}`;
    return this.http.delete<ItemCommande>(url, this.httpOptions);
  }

  getItemCommandeById(id: number): Observable<ItemCommande> {
    return this.http.get<ItemCommande>(this.url + '/' + id);
  }

  updateItemCommande(id: number, itemcommande: ItemCommande): Observable<ItemCommande> {
    return this.http.put<ItemCommande>(this.url + '/edit/' + id, itemcommande, this.httpOptions);
  }
}
