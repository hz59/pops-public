import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Service} from "../models/service";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class ServiceService {
  url = "http://localhost:8080/services/";

  constructor(private http: HttpClient) {
  }

  listServices():Observable<Service> {
    return this.http.get<Service>(this.url + 'list');
  }

  add(libelle: string):Observable<Service> {

    let params = new HttpParams();
    params = params.append('libelle', libelle);

    return this.http.post<Service>( this.url + 'add?' + params , {});
  }

  update(id:number,libelle:string):Observable<Service> {

    let params = new HttpParams();

    params = params.set('libelle', libelle);

    return this.http.put<Service>(this.url + 'update/' + id + '?' + params , {});
  }
}
