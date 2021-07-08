import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Manager} from "../models/manager";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {RequestOptions} from "@angular/http";


@Injectable()
export class ManagerService {
  url = "http://localhost:8080/managers/";
  // headers: Headers;
  // options: RequestOptions;

  constructor(private http: HttpClient) {
    // this.headers = new Headers({ 'Content-Type': 'application/json',
    //   'Accept': 'q=0.8;application/json;q=0.9' });
    // this.options = new RequestOptions();
  }

  list_managers():Observable<Manager> {
    return this.http.get<Manager>(this.url + 'list');
  }

  add(name: string):Observable<Manager> {

    let params = new HttpParams();
    params = params.append('name', name);

    return this.http.post<Manager>( this.url + 'add?' + params , {});
  }

  // deleteManager(name: string):Observable<Manager> {
  //   return this.http.delete(this.url + name).map(res => res.json());
  // }

  // deleteManager(name:string):Observable<string> {
  //
  //   return this.http.delete(this.url + 'delete?' + 'name=';
  // }

  // delete(name:string): Promise<void> {
  //
  //   return this.http.delete(url, {headers: this.headers})
  //
  // }
}
