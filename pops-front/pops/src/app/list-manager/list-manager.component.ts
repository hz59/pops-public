import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ManagerService} from "../services/manager.service";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {

  managers: any = {};
  profile: any;
  role: any;


  constructor(private rooter: Router,private managerservice: ManagerService,public auth: AuthService) {
    this.managerservice = managerservice;
    this.auth = auth;
    this.getDataManagers();
    this.getManagers();
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

  getDataManagers() { return this.managerservice.list_managers() }

  getManagers() {
    this.getDataManagers().subscribe(managers => {
      console.log('LIST JOB managers :', managers);
      this.managers = managers;
    })
  }
}
