import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'environments/environment';
import { Role, User } from 'app/auth/models';
import { AuthenticationService } from './authentication.service';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {
  /**
   *
   * @param {HttpClient} _http
   */
   PATH_OF_API = 'http://localhost:9090';
   requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
   httpOptions = {
    headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
    })
  }
  constructor(private _http: HttpClient,private _authenticationService:AuthenticationService) {}

  /**
   * Get all users
   */
  getAll() {
    return this._http.get<User[]>(`${environment.apiUrl}/users`,this.httpOptions);
  }

  /**
   * Get user by id
   */
  getById(id: number) {
    return this._http.get<User>(`${environment.apiUrl}/users/${id}`);
  }
  public register(loginData) {
    return this._http.post(this.PATH_OF_API + '/registerNewUser', loginData, {
      headers: this.requestHeader,
    });
  }
  public update(user:User) {
    return this._http.put(this.PATH_OF_API + '/update',user,this.httpOptions);
  }
  public delete(userName:string) {
    return this._http.delete(this.PATH_OF_API + `/delete/${userName}`,this.httpOptions);
  }
  public count() {
    return this._http.get<number>(this.PATH_OF_API + `/count`,this.httpOptions);
  }
  public countmoderateur() {
    return this._http.get<number>(this.PATH_OF_API + `/countmoderateur`,this.httpOptions);
  }
  
  public countadmin() {
    return this._http.get<number>(this.PATH_OF_API + `/countadmin`,this.httpOptions);
  }
  public countfournisseur() {
    return this._http.get<number>(this.PATH_OF_API + `/countfournisseur`,this.httpOptions);
  }
  
  public roleMatch(allowedRoles): boolean {
    let isMatch = false;
    const userRoles: any = this._authenticationService.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
  }
  
  addRoleToUser(roleName: string, userName: string) {


    // Make HTTP requests to get the role and user objects
    /*this._http.get<Role>(roleUrl).subscribe(role => {
      this._http.get<User>(userUrl).subscribe(user => {
        // Add the new role to the user's roles and save the changes
        const newRoles = new Set<Role>();
        newRoles.add(role);
        user.roles= newRoles;*/
       
      
       
       return this._http.put(this.PATH_OF_API + `/addRole/${roleName}/${userName}`,this.httpOptions);
   
  }
  activateAccount(verificationToken: string) {
    const url = `${this.PATH_OF_API}/activate/${verificationToken}`;
    return this._http.put(url, {}).subscribe(
      (response) => {
        console.log('Account activated successfully');
      },
      (error) => {
        console.log('Error activating account');
      }
    );
  }
  
}
