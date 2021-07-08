import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ServiceService} from "../services/service.service";
import {HttpErrorResponse} from "@angular/common/http";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {

  services: any = {};
  public isEdit: boolean = false;
  id: number;
  libelle:string;
  profile: any;
  role: any;

  constructor(private rooter: Router,private serviceservice: ServiceService,public auth: AuthService) {
    this.serviceservice = serviceservice;
    this.auth = auth;
    this.getDataServices();
    this.getServices();
  }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        console.log('infos profil: ', profile);
        const roles = this.profile['https://financeactive-dev:eu:auth0:com/roles'];
        this.role = roles[0];
        console.log('info role', roles);
      });
    }
  }

  public goAdmin(){
    this.rooter.navigate(['pops-admin']);
  }

  getDataServices() { return this.serviceservice.listServices() }

  getServices() {
    this.getDataServices().subscribe(services => {
      console.log('LIST SERVICES :', services);
      this.services = services;
    })
  }

  public updateService(id,libelle) {

    this.serviceservice.update(id,libelle).subscribe(res => {
        console.log(res);
        this.rooter.navigate(['list-services']);
        window.alert("Service modifié avec succès !");
        window.location.reload();
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      });
  }

}
