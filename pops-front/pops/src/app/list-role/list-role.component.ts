import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {RoleService} from "../services/role.service";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.css']
})
export class ListRoleComponent implements OnInit {

  roles: any = {};
  profile: any;
  role: any;

  constructor(private rooter: Router,private roleservice: RoleService,public auth: AuthService) {
    this.roleservice = roleservice;
    this.auth = auth;
    this.getDataRoles();
    this.getRoles();
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

  getDataRoles() { return this.roleservice.listRoles() }

  getRoles() {
    this.getDataRoles().subscribe(roles => {
      console.log('LIST roles :', roles);
      this.roles = roles;
    })
  }
}
