import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {Contract} from "../models/contract";

@Injectable()
export class ContractService {
  url = "http://localhost:8080/contracts/";

  constructor(private http: HttpClient) {
  }

  listContracts():Observable<Contract> {
    return this.http.get<Contract>(this.url + 'list');
  }

  add(libelle: string):Observable<Contract> {

    let params = new HttpParams();
    params = params.append('libelle', libelle);

    return this.http.post<Contract>( this.url + 'add?' + params , {});
  }
}
