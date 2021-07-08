import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {BusinessUnit} from "../models/businessunit";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class BuService {
  url = "http://localhost:8080/bu/";

  constructor(private http: HttpClient) {
  }

  listBu():Observable<BusinessUnit> {
    return this.http.get<BusinessUnit>(this.url + 'list');
  }

  add(libelle: string):Observable<BuService> {

    let params = new HttpParams();
    params = params.append('libelle', libelle);

    return this.http.post<BuService>( this.url + 'add?' + params , {});
  }

  update(id:number,libelle:string):Observable<BusinessUnit> {

    let params = new HttpParams();

    params = params.set('libelle', libelle);

    return this.http.put<BusinessUnit>(this.url + 'update/' + id + '?' + params , {});
  }
}
