import { Component, OnInit } from '@angular/core';
import {DepartmentService} from "../services/department.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-list-department',
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.css']
})
export class ListDepartmentComponent implements OnInit {

  departments: any = {};
  public isEdit: boolean = false;
  id: number;
  libelle:string;
  profile: any;
  role: any;


  constructor(private rooter: Router,private departmentservice: DepartmentService,public auth: AuthService) {
    this.departmentservice = departmentservice;
    this.auth = auth;
    this.getDataDepartments();
    this.getDepartments();
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

  getDataDepartments() { return this.departmentservice.listDepartments() }

  getDepartments() {
    this.getDataDepartments().subscribe(departments => {
      console.log('LIST LOCATIONS :', departments);
      this.departments = departments;
    })
  }

  public updateDepartment(id,libelle) {

    this.departmentservice.update(id,libelle).subscribe(res => {
        console.log(res);
        this.rooter.navigate(['list-departments']);
        window.alert("Departement modifiée avec succès !");
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
