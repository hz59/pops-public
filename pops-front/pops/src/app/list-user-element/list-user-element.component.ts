import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {User} from "../models/user";
import {UserService} from "../user.service";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {DepartmentService} from "../services/department.service";
import {ServiceService} from "../services/service.service";
import {BuService} from "../services/bu.service";
import {RoleService} from "../services/role.service";
import {Router} from "@angular/router";
import {ManagerService} from "../services/manager.service";
import {LocationService} from "../services/location.service";
import {ContractService} from "../services/contract.service";
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-list-user-element',
  templateUrl: './list-user-element.component.html',
  styleUrls: ['./list-user-element.component.css']
})
export class ListUserElementComponent implements OnInit {

  users: any = {};
  departments: any = {};
  services: any = {};
  business_units: any = {};
  roles: any = {};
  managers: any = {};
  localisations: any = {};
  contracts: any = {};
  test: Date;
  profile: any;
  role: any;

  @Input()
  public user: User;

  public isEdit: boolean = false;

  constructor(private http: HttpClient, private rooter: Router, private userservice: UserService, private departmentservice: DepartmentService,
              private serviceservice: ServiceService, private buservice: BuService, private roleservice: RoleService,
              private managerservice: ManagerService,private locationservice: LocationService,private contractservice: ContractService,public auth: AuthService) {
    this.userservice = userservice;
    this.departmentservice = departmentservice;
    this.serviceservice = serviceservice;
    this.buservice = buservice;
    this.roleservice = roleservice;
    this.managerservice = managerservice;
    this.locationservice = locationservice;
    this.contractservice = contractservice;
    this.getUsers();
    this.getData();
    this.getDataDepartments();
    this.getDepartments();
    this.getDataServices();
    this.getServices();
    this.getDataBu();
    this.getBusinessUnits();
    this.getDataRoles();
    this.getRoles();
    this.getDataManagers();
    this.getManagers();
    this.getDataLocalisations();
    this.getLocalisations();
    this.getDataContracts();
    this.getContracts();
    // auth.handleAuthentication();
  }

  ngOnInit() {
    this.test = new Date('1969-12-31T23:00:00.000+0000');

    this.auth.handleAuthentication();
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

  getData() { return this.userservice.list(); }

  getUsers() {
    this.getData().subscribe(users => {
      this.users = users;
    })
  }

  getDataDepartments() { return this.departmentservice.listDepartments(); }

  getDepartments() {
    this.getDataDepartments().subscribe(departments => {
      this.departments = departments;
    })
  }

  getDataServices() { return this.serviceservice.listServices(); }

  getServices() {
    this.getDataServices().subscribe(services => {
      this.services = services;
    })
  }

  getDataBu() { return this.buservice.listBu(); }

  getBusinessUnits() {
    this.getDataBu().subscribe(business_units => {
      this.business_units = business_units;
    })
  }

  getDataRoles() { return this.roleservice.listRoles(); }

  getRoles() {
    this.getDataRoles().subscribe(roles => {
      this.roles = roles;
    })
  }

  getDataManagers(){ return this.managerservice.list_managers(); }

  getManagers(){
    this.getDataManagers().subscribe(managers => {
      this.managers = managers;
    })
  }

  getDataLocalisations(){ return this.locationservice.listLocations(); }

  getLocalisations(){
    this.getDataLocalisations().subscribe(localisations => {
      console.log('LIST LOCATIONS :', localisations);
      this.localisations = localisations;
    })
  }

  getDataContracts(){ return this.contractservice.listContracts(); }

  getContracts(){
    this.getDataContracts().subscribe(contracts => {
      console.log('LIST CONTRACTS : ', contracts);
      this.contracts = contracts;
    })
  }

  public updateUser(user) {

    user = this.user;
    this.userservice.update(user.id,user.email,user.role_type,user.department,user.contract,user.location,user.firstname,user.name,user.service,user.business_unit,user.manager_name,user.got_iphone,user.date_start,user.date_end,user.is_enabled).subscribe(res => {
        console.log(res);
        this.rooter.navigate(['list-users']);
        window.alert("Utilisateur modifié avec succès !");
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

  public exitUpdate(){
    window.location.reload();
  }
}
