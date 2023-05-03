import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CodePromo } from 'app/Model/CodePromo';
import { Observable, Subject } from 'rxjs';

@Injectable({
providedIn: 'root'
})

export class CodePromoService {
httpOptions = {
headers: new HttpHeaders({
'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
})
}
url = 'http://localhost:9090/codePromo';
newUrl : string
CODEPROMOS = [];

private _refresh$=new Subject<void>()

get refresh$(){
return this._refresh$;
}

constructor(private http: HttpClient) { }

getCodePromo(id:number):Observable<CodePromo>{
return this.http.get<CodePromo>(this.url+"/"+id,this.httpOptions);
console.log("get CodePromo");
}

public GetAllCodePromo(): Observable<CodePromo[]> {
return this.http.get<CodePromo[]>(this.url+"/",this.httpOptions);
}

addCodePromo (codepromo: CodePromo): Observable<CodePromo> {
return this.http.post<CodePromo>(this.url+"/add", codepromo, this.httpOptions);
console.log("CodePromo ajoutee");
}

deleteCodePromo (codepromo: CodePromo | number): Observable<CodePromo> {
const id = typeof codepromo === 'number' ? codepromo : codepromo.id;
const url = `${this.url}/delete/${id}`;
return this.http.delete<CodePromo>(url, this.httpOptions);
}

getCodePromoById(id: number): Observable<CodePromo> {
return this.http.get<CodePromo>(this.url +'/'+ id);
}

updateCodePromo(id: number, codepromo: CodePromo): Observable<CodePromo> {
return this.http.put<CodePromo>(this.url+'/edit'+ id, codepromo, this.httpOptions);
}
}