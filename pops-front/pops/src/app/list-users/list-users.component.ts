import {Component, EventEmitter, OnInit, Output,ViewChild} from '@angular/core';
import {Http,Response} from "@angular/http";
import 'rxjs/add/operator/map';
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {BuService} from "../services/bu.service";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {DepartmentService} from "../services/department.service";
import {RoleService} from "../services/role.service";
import {ServiceService} from "../services/service.service";
import {ManagerService} from "../services/manager.service";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})

export class ListUsersComponent implements OnInit {

  public searchStringName: string;
  public searchStringEmail: string;
  public searchStringFirstname: string;
  public searchStringContract: string;
  public searchStringLocation: string;
  public searchStringPole: string;
  public searchStringService: string;
  public searchStringBu: string;
  public searchStringRole: string;
  public searchStringManager: string;
  public isSearch: boolean = true;
  profile: any;
  role: any;

  @ViewChild('f') form: NgForm;

  editUserGroup: FormGroup;

  @Output() save: EventEmitter<any>;

  title = 'POPS';
  users: any = {};
  managers: any = {};
  departments: any = {};
  business_units: any = {};
  roles: any = {};
  services: any = {};
  email: string;
  password: string;
  role_type: string;
  department: string;
  contract: string;
  location: string;
  firstname: string;
  name: string;
  service: string;
  business_unit: string;
  got_iphone: boolean;
  date_start: Date;
  date_end: Date;
  manager_id: number;
  id: number;

  constructor(private http: HttpClient, private userservice: UserService, private rooter: Router, private fb: FormBuilder,
              private departmentservice: DepartmentService,private buservice: BuService,private serviceservice: ServiceService,
              private roleservice: RoleService,private managerservice: ManagerService,public auth: AuthService) {
    this.userservice = userservice;
    this.departmentservice = departmentservice;
    this.buservice = buservice;
    this.roleservice = roleservice;
    this.serviceservice = serviceservice;
    this.managerservice = managerservice;
    this.auth = auth;
    this.getUsers();
    this.getData();
    this.getDataDepartments();
    this.getDepartments();
    this.getDataBu();
    this.getBusinessUnits();
    this.getDataRoles();
    this.getRoles();
    this.getDataServices();
    this.getServices();
    this.getDataManagers();
    this.getManagers();
    auth.handleAuthentication();
    // auth.isAuthenticated();
  }

  ngOnInit() {

    this.editUserGroup = this.fb.group({
      'id': ['',],
      'name': ['',],
      'firstname': ['',],
      'email': ['',],
      'contract': ['',],
      'location': ['',],
      'department': ['',],
      'business_unit': ['',],
      'service': ['',],
      'role_type': ['',],
      'manager_id': ['',],
      'date_start': ['',],
      'date_end': [''],
      'got_iphone': ['',]
    });

    this.auth.handleAuthentication();
    this.auth.isAuthenticated();
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
      console.log('LIST USERS :', users);
      this.users = users;
      let date_fin = new Date('1970-01-01 00:00:00');
      if(users.date_end === date_fin){
        users.date_end = null;
      }
    })
  }

  getDataDepartments() { return this.departmentservice.listDepartments(); }

  getDepartments() {
    this.getDataDepartments().subscribe(departments => {
      console.log('LIST DEPARTMENTS :', departments);
      this.departments = departments;
    })
  }

  getDataBu() { return this.buservice.listBu(); }

  getBusinessUnits() {
    this.getDataBu().subscribe(business_units => {
      console.log('LIST BUSINESS UNITS :', business_units);
      this.business_units = business_units;
    })
  }

  getDataRoles() { return this.roleservice.listRoles(); }

  getRoles() {
    this.getDataRoles().subscribe(roles => {
      console.log('LIST ROLES :', roles);
      this.roles = roles;
    })
  }

  getDataServices() { return this.serviceservice.listServices(); }

  getServices() {
    this.getDataServices().subscribe(services => {
      console.log('LIST SERVICES :', services);
      this.services = services;
    })
  }

  getDataManagers(){ return this.managerservice.list_managers(); }

  getManagers(){
    this.getDataManagers().subscribe(managers => {
      console.log('LIST MANAGERS :', managers);
      this.managers = managers;
    })
  }

  public goDashboard() { this.rooter.navigate(['pops-dashboard']); }

  public goAddUser() { this.rooter.navigate(['add-user']); }

  public goLogin() { this.rooter.navigate(['login']); }

  onSubmit() {

    if (this.form.valid) {
      this.save.emit({
        'id': this.form.value.id,
        'name': this.form.value.name,
        'firstname': this.form.value.firstname,
        'email': this.form.value.email,
        'contract': this.form.value.contract,
        'location': this.form.value.location,
        'department': this.form.value.department,
        'business_unit': this.form.value.business_unit,
        'service': this.form.value.service,
        'role_type': this.form.value.role_type,
        'manager_id': this.form.value.manager_id,
        'date_start': this.form.value.date_start,
        'date_end': this.form.value.date_end,
        'got_iphone': this.form.value.got_iphone
      });
    }
  }
}
