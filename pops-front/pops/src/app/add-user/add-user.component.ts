import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {BuService} from "../services/bu.service";
import {DepartmentService} from "../services/department.service";
import {ServiceService} from "../services/service.service";
import {RoleService} from "../services/role.service";
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ManagerService} from "../services/manager.service";
import {HttpErrorResponse} from "@angular/common/http";
import {JobtitleService} from "../services/jobtitle.service";
import {LocationService} from "../services/location.service";
import {ContractService} from "../services/contract.service";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  @ViewChild('f') form: NgForm;

  addUserGroup: FormGroup;

  @Output() save: EventEmitter<any>;

  businessunits: any = {};
  departments: any = {};
  jobtitles: any = {};
  services: any = {};
  roles: any = {};
  managers: any = {};
  localisations: any = {};
  contracts: any = {};
  email: string;
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
  manager_name: string;
  job_title: string;
  date_end?: Date;
  id:number;
  profile: any;
  role: any;

  constructor(private userservice: UserService, private buservice: BuService, private departmentservice: DepartmentService, private serviceservice: ServiceService, private roleservice: RoleService, private rooter: Router
  , private fb: FormBuilder, private managerservice: ManagerService,private jobtitleservice: JobtitleService, private locationservice: LocationService,private contractservice: ContractService,public auth: AuthService) {
    this.userservice = userservice;
    this.buservice = buservice;
    this.departmentservice = departmentservice;
    this.serviceservice = serviceservice;
    this.roleservice = roleservice;
    this.managerservice = managerservice;
    this.jobtitleservice = jobtitleservice;
    this.locationservice = locationservice;
    this.contractservice = contractservice;
    this.auth = auth;
    this.getDataBu();
    this.getBusinessUnits();
    this.getDataDepartments();
    this.getDepartments();
    this.getDataServices();
    this.getServices();
    this.getDataRoles();
    this.getRoles();
    this.getDataManagers();
    this.getManagers();
    this.getDataJobtitles();
    this.getJobtitles();
    this.getDataLocalisations();
    this.getLocalisations();
    this.getDataContracts();
    this.getContracts();
    // auth.handleAuthentication();


  }

  ngOnInit() {
    // this.auth.handleAuthentication();
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        console.log('info profile: ', profile);
        const roles = this.profile['https://financeactive-dev:eu:auth0:com/roles'];
        this.role = roles[0];
        console.log('info role', roles);
      });
    }

    this.addUserGroup = this.fb.group({
      'name': ['',[Validators.required]],
      'firstname': ['',[Validators.required]],
      'email': ['',[Validators.required]],
      'contract': ['',[Validators.required]],
      'location': ['',[Validators.required]],
      'department': ['',[Validators.required]],
      'business_unit': ['',[Validators.required]],
      'service': ['',[Validators.required]],
      'job_title': ['',[Validators.required]],
      'role_type': ['',[Validators.required]],
      'manager_name': ['',[Validators.required]],
      'date_start': ['',[Validators.required]],
      'date_end': [''],
      'got_iphone': ['',Validators.required],
    });
  }

  getDataBu() { return this.buservice.listBu(); }

  getBusinessUnits() {
    this.getDataBu().subscribe(businessunits => {
      console.log('LIST BUSINESS UNITS :', businessunits);
      this.businessunits = businessunits;
    })
  }

  getDataDepartments() { return this.departmentservice.listDepartments(); }

  getDepartments() {
    this.getDataDepartments().subscribe(departments => {
      console.log('LIST DEPARTMENTS :', departments);
      this.departments = departments;
    })
  }

  getDataServices() { return this.serviceservice.listServices(); }

  getServices() {
    this.getDataServices().subscribe(services => {
      console.log('LIST SERVICES :', services);
      this.services = services;
    })
  }

  getDataRoles() { return this.roleservice.listRoles(); }

  getRoles() {
    this.getDataRoles().subscribe(roles => {
      console.log('LIST ROLES :', roles);
      this.roles = roles;
    })
  }

  getDataManagers(){ return this.managerservice.list_managers(); }

  getManagers(){
    this.getDataManagers().subscribe(managers => {
      console.log('LIST MANAGERS :', managers);
      this.managers = managers;
    })
  }

  getDataJobtitles(){ return this.jobtitleservice.listJobTitles(); }

  getJobtitles(){
    this.getDataJobtitles().subscribe(jobtitles => {
      console.log('LIST JOB TITLES :', jobtitles);
      this.jobtitles = jobtitles;
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

  public goDashboard() { this.rooter.navigate(['pops-dashboard']); }

  public add(email,role_type, department, contract,
             location, firstname, name, service, business_unit, got_iphone,
             date_start, date_end, manager_name,job_title) {

    this.userservice.add(this.email, this.role_type, this.department, this.contract, this.location,
      this.firstname, this.name, this.service, this.business_unit, this.got_iphone, this.date_start,this.manager_name,this.job_title, this.date_end).subscribe(res => {
        console.log(res);
        this.rooter.navigate(['list-users']);
        window.alert("Utilisateur enregistré avec succès !");
        // window.location.reload();
        this.rooter.navigate(['list-users']);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      });
  }

  public goLogin() { this.rooter.navigate(['login']); }

  onSubmit() {

    if (this.form.valid) {

      this.save.emit({
        'name': this.form.value.name,
        'firstname': this.form.value.firstname,
        'email': this.form.value.email,
        'contract': this.form.value.contract,
        'location': this.form.value.location,
        'department': this.form.value.department,
        'business_unit': this.form.value.business_unit,
        'service': this.form.value.service,
        'job_title': this.form.value.job_title,
        'role_type': this.form.value.role_type,
        'manager_name': this.form.value.manager_name,
        'date_start': this.form.value.date_start,
        'date_end': this.form.value.date_end,
        'got_iphone': this.form.value.got_iphone
      });
    }
    }
}
