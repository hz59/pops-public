import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {User} from "./models/user";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class UserService {
  url = "http://localhost:8080/users/";

  constructor(private http: HttpClient) {
  }

  login(email:string, password:string):Observable<User> {

    let params = new HttpParams();
    params = params.set('email', email);
    params = params.append('password', password);

    return this.http.get<User>(this.url + 'login', { params: params});
  }

  list(/*role_type: string*/):Observable<User> {

    // let params = new HttpParams();
    // params = params.set('role_type',role_type);
    return this.http.get<User>(this.url + 'list');
    // return this.http.get<User>(this.url + 'list/' + params: params);
  }



  add(email:string, role_type: string, department: string, contract: string,
      location: string, firstname: string, name: string, service: string, business_unit: string, got_iphone: boolean,
      date_start: Date,manager_name: string,job_title:string, date_end?: Date):Observable<User> {

    let params = new HttpParams();
    let i = got_iphone.toString();
    let e = new Date(date_start);
    let s = new Date(date_end);

    params = params.append('email', email);
    params = params.append('role_type', role_type);
    params = params.append('department', department);
    params = params.append('contract', contract);
    params = params.append('location', location);
    params = params.append('firstname', firstname);
    params = params.set('name', name);
    // params = params.append('password', password);
    params = params.append('service' , service);
    params = params.append('business_unit', business_unit);
    params = params.append('got_iphone', i);
    params = params.append('date_start', e.toDateString());

    if (date_end != null) { params = params.append('date_end', s.toDateString()); }

    else { let n = new Date(null); params = params.append('date_end', n.toDateString()); }

    params = params.append('manager_name', manager_name);
    params = params.append('job_title', job_title);

    return this.http.post<User>( this.url + 'add?' + params , {});
  }

  update(id:number,email?:string, role_type?: string, department?: string, contract?: string,
         location?: string, firstname?: string, name?: string, service?: string, business_unit?: string,manager_name?: string, got_iphone?: boolean,
         date_start?: Date,date_end?: Date, is_enabled?: boolean):Observable<User> {

    let params = new HttpParams();

    let i = got_iphone.toString();
    let a = is_enabled.toString();
    let e = new Date(date_start);
    let ex = new Date(date_end);

    params = params.set('name', name);
    params = params.append('firstname', firstname);
    params = params.append('email', email);
    params = params.append('contract', contract);
    params = params.append('department', department);
    params = params.append('location', location);
    // params = params.append('password', password);
    params = params.append('role_type', role_type);
    params = params.append('service' , service);
    params = params.append('business_unit', business_unit);
    params = params.append('manager_name', manager_name);
    params = params.append('date_start', e.toDateString());
    params = params.append('got_iphone', i);
    params = params.append('date_end', ex.toDateString());
    params = params.append('is_enabled', a);

    return this.http.put<User>(this.url + 'update/' + id + '?' + params , {});
  }

  listByManager(manager_name: string):Observable<User> {
    let params = new HttpParams();
    params = params.set('manager_name', manager_name);


    return this.http.get<User>(this.url + 'listbymanager' + '?' + params , {});
  }

}
