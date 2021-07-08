import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Role} from "../models/role";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class RoleService {
  url = "http://localhost:8080/roles/";

  constructor(private http: HttpClient) {
  }

  listRoles():Observable<Role> {
    return this.http.get<Role>(this.url + 'list');
  }

  add(type: string,claims: string):Observable<Role> {

    let params = new HttpParams();
    params = params.append('type', type);
    params = params.append('claims', claims);

    return this.http.post<Role>( this.url + 'add?' + params , {});
  }
}
