import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Location} from "../models/location";
import {Injectable} from "@angular/core";

@Injectable()
export class LocationService {
  url = "http://localhost:8080/locations/";

  constructor(private http: HttpClient) {
  }

  listLocations():Observable<Location> {
    return this.http.get<Location>(this.url + 'list');
  }

  add(libelle: string):Observable<Location> {

    let params = new HttpParams();
    params = params.append('libelle', libelle);

    return this.http.post<Location>( this.url + 'add?' + params , {});
  }

  update(id:number,libelle:string):Observable<Location> {

    let params = new HttpParams();

    params = params.set('libelle', libelle);

    return this.http.put<Location>(this.url + 'update/' + id + '?' + params , {});
  }
}
