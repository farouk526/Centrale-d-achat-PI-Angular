import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemFacture } from 'app/Model/ItemFacture';
import { Observable, Subject } from 'rxjs';

@Injectable({
providedIn: 'root'
})

export class ItemFactureService {
httpOptions = {
headers: new HttpHeaders({
'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
})
}
url = 'http://localhost:9090/itemfacture';
newUrl : string
ITEMFACTURES = [];

private _refresh$=new Subject<void>()

get refresh$(){
return this._refresh$;
}

constructor(private http: HttpClient) { }
getItemFacture(id:number):Observable<ItemFacture>{
return this.http.get<ItemFacture>(this.url+"/"+id,this.httpOptions);
console.log("get ItemFacture");
}
public GetAllItemFacture(): Observable<ItemFacture[]> {
return this.http.get<ItemFacture[]>(this.url+"/",this.httpOptions);
}
addItemFacture (itemfacture: ItemFacture): Observable<ItemFacture> {
return this.http.post<ItemFacture>(this.url+"/add", itemfacture,
this.httpOptions);
console.log("ItemFacture ajoutee");
}
deleteItemFacture (itemfacture: ItemFacture | number):
Observable<ItemFacture> { const id = typeof itemfacture === 'number'
? itemfacture : itemfacture.id;
//const url=this.url+'/delete'+id;
//return this.http.delete<ItemFacture>(url);
const url = `${this.url}/delete/${id}`;
return this.http.delete<ItemFacture>(url, this.httpOptions);
}

getItemFactureById(id: number): Observable<ItemFacture> {
return this.http.get<ItemFacture>(this.url +'/'+ id); }

updateItemFacture (id: number, itemfacture: ItemFacture): Observable<ItemFacture> {
return this.http.put<ItemFacture>(this.url+'/edit'+ id, itemfacture,
this.httpOptions);
}
}