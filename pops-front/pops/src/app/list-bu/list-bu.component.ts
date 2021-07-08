import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {BuService} from "../services/bu.service";
import {HttpErrorResponse} from "@angular/common/http";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-list-bu',
  templateUrl: './list-bu.component.html',
  styleUrls: ['./list-bu.component.css']
})
export class ListBuComponent implements OnInit {

  businessunits: any = {};
  public isEdit: boolean = false;
  id: number;
  libelle:string;
  profile: any;
  role: any;

  constructor(private rooter: Router,private buservice: BuService,public auth: AuthService) {
    this.buservice = buservice;
    this.auth = auth;
    this.getBu();
    this.getDataBu();
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

  public goAdmin(){ this.rooter.navigate(['pops-admin']); }

  getDataBu() { return this.buservice.listBu() }

  getBu() {
    this.getDataBu().subscribe(businessunits => {
      console.log('LIST BUSINESS UNITS :', businessunits);
      this.businessunits = businessunits;
    })
  }

  public updateBu(id,libelle) {

    this.buservice.update(id,libelle).subscribe(res => {
        console.log(res);
        this.rooter.navigate(['list-bu']);
        window.alert("Business Unit modifiée avec succès !");
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
