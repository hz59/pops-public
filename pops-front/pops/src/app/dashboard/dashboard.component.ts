import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {User} from "../models/user";
import {AuthService} from "../auth.service";
import {ListUserElementComponent} from "../list-user-element/list-user-element.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: any = {};
  // utilisateur: any = {};
  profile: any;
  role: any;

  @Input()
  public user: User;

  constructor(private userservice: UserService, private rooter: Router, public auth: AuthService) {
    this.userservice = userservice;
    this.auth = auth;
    // this.listuserelemcomp = listuserelemcomp;
    this.getUsers();
    this.getData();
    auth.handleAuthentication();
    // auth.isAuthenticated();
    // this.getDataUser();
    // this.getUser();
    // this.getServProfile();
    // this.getProfil();
  }

  ngOnInit(): void {
    // this.auth.handleAuthentication();
    // this.auth.isAuthenticated();
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

    // if (this.auth.userRole) {
    //   this.role = this.auth.userRole;
    // } else {
    //   this.auth.getRole((err, role) => {
    //     this.role = role;
    //     console.log('infos role: ', role)
    //   });
    // }



  }

  getData() { return this.userservice.list(); }

  getUsers() {
    this.getData().subscribe(users => {
      this.users = users;
    })
  }

  // getServProfile(){
  //   return this.auth.getUserInfo(this.auth.accessToken);
  // }
  //
  // getProfil(){
  //   console.log('profil:', this.getServProfile());
  // }


    /// TEST //////
  // getDataUser(){ return this.auth.list(); }
  //
  // getUser(){
  //   this.getDataUser().subscribe(utilisateur=> {
  //     this.utilisateur = utilisateur;
  //   })
  // }

  // getUser(user){
  //   this.listuserelemcomp = user;
  //   console.log('USER : ', user);
  // }

  public list(){ this.rooter.navigate(['list-users']); }

  public goAddUser(){ this.rooter.navigate(['add-user']); }

  public goLogin(){ this.rooter.navigate(['login']); }

  public goAdmin(){ this.rooter.navigate(['pops-admin']); }

  public goListUsersByManager(){ this.rooter.navigate(['list-users-by-manager']); }

  public Logout(){
    this.auth.logout();
  }
  // public getUserLogged(user,context,callback){
  //   this.auth.getUser(user,context,callback);
  // }
}
