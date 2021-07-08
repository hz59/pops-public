import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LocationService} from "../services/location.service";
import {HttpErrorResponse} from "@angular/common/http";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-list-location',
  templateUrl: './list-location.component.html',
  styleUrls: ['./list-location.component.css']
})
export class ListLocationComponent implements OnInit {

  locations: any = {};
  public isEdit: boolean = false;
  id: number;
  libelle:string;
  profile: any;
  role: any;

  constructor(private rooter: Router,private locationservice: LocationService, public auth: AuthService) {
    this.locationservice = locationservice;
    this.auth = auth;
    this.getLocations();
    this.getDataLocations();
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

  getDataLocations() { return this.locationservice.listLocations() }

  getLocations() {
    this.getDataLocations().subscribe(locations => {
      console.log('LIST LOCATIONS :', locations);
      this.locations = locations;
    })
  }

  public updateLocation(id,libelle) {

    this.locationservice.update(id,libelle).subscribe(res => {
        console.log(res);
        this.rooter.navigate(['list-locations']);
        window.alert("Localisation modifiée avec succès !");
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
