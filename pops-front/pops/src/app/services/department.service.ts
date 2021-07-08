import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Department} from "../models/department";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class DepartmentService {
  url = "http://localhost:8080/departments/";

  constructor(private http: HttpClient) {
  }

  listDepartments():Observable<Department> {
    return this.http.get<Department>(this.url + 'list');
  }

  add(libelle: string):Observable<Department> {

    let params = new HttpParams();
    params = params.append('libelle', libelle);

    return this.http.post<Department>( this.url + 'add?' + params , {});
  }

  update(id:number,libelle:string):Observable<Department> {

    let params = new HttpParams();

    params = params.set('libelle', libelle);

    return this.http.put<Department>(this.url + 'update/' + id + '?' + params , {});
  }
}
