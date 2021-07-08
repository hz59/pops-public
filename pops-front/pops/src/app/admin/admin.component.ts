import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public isContractClicked: boolean = false;
  public isLocationClicked: boolean = false;
  public isDepartmentClicked: boolean = false;
  public isBuClicked: boolean = false;
  public isServiceClicked: boolean =  false;
  public isJobTitleClicked: boolean = false;
  public isManagerClicked: boolean = false;
  public isRoleClicked: boolean = false;

  profile : any;
  role: any;

  constructor(private userservice: UserService, private rooter: Router, public auth: AuthService) {
    this.auth = auth;
    // auth.handleAuthentication();
  }

  ngOnInit(): void {
    // this.auth.handleAuthentication();
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        console.log('infos profil: ', profile)
        const roles = this.profile['https://financeactive-dev:eu:auth0:com/roles'];
        this.role = roles[0];
        console.log('info role', roles);
      });
    }
  }

  public goDashboard() { this.rooter.navigate(['pops-dashboard']); }

  public goLogin(){ this.rooter.navigate(['login']); }

  public goAddContract(){ this.rooter.navigate(['add-contract']); }

  public goAddLocation(){ this.rooter.navigate(['add-location']); }

  public goAddDepartment(){ this.rooter.navigate(['add-department']); }

  public goAddBu(){ this.rooter.navigate(['add-bu']); }

  public goAddService(){ this.rooter.navigate(['add-service']); }

  public goAddJobTitle(){ this.rooter.navigate(['add-jobtitle']); }

  public goAddManager(){ this.rooter.navigate(['add-manager']); }

  public goAddRole(){ this.rooter.navigate(['add-role']); }

  public goListContract(){ this.rooter.navigate(['list-contracts']); }

  public goListLocation(){ this.rooter.navigate(['list-locations']); }

  public goListDepartment(){ this.rooter.navigate(['list-departments']) }

    public goListBu(){ this.rooter.navigate(['list-bu']); }

    public goListService(){ this.rooter.navigate(['list-services']); }

    public goListJobTitle(){ this.rooter.navigate(['list-jobtitles']); }

    public goListManager(){ this.rooter.navigate(['list-managers']); }

    public goListRoles(){ this.rooter.navigate(['list-roles']); }
}

