import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {Jobtitle} from "../models/jobtitle";

@Injectable()
export class JobtitleService {
  url = "http://localhost:8080/jobtitles/";

  constructor(private http: HttpClient) {
  }

  listJobTitles():Observable<Jobtitle> {
    return this.http.get<Jobtitle>(this.url + 'list');
  }

  add(libelle: string):Observable<Jobtitle> {

    let params = new HttpParams();
    params = params.append('libelle', libelle);

    return this.http.post<Jobtitle>( this.url + 'add?' + params , {});
  }

  update(id:number,libelle:string):Observable<Jobtitle> {

    let params = new HttpParams();

    params = params.set('libelle', libelle);

    return this.http.put<Jobtitle>(this.url + 'update/' + id + '?' + params , {});
  }
}
