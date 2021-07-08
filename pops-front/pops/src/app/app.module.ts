import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserService} from "./user.service";
import {HttpClientModule} from "@angular/common/http";
import {routing} from "./app.routing";
import {LoginComponent} from "./login";
import {ListUsersComponent} from "./list-users";
import {HttpModule} from "@angular/http";
import {DashboardComponent } from './dashboard/dashboard.component';
import {AddUserComponent } from './add-user/add-user.component';
import {BuService} from "./services/bu.service";
import {DepartmentService} from "./services/department.service";
import {ServiceService} from "./services/service.service";
import {RoleService} from "./services/role.service";
import {ManagerService} from "./services/manager.service";
import {CommonModule} from '@angular/common';
import {ListUserElementComponent } from './list-user-element/list-user-element.component';
import {FilterPipe} from "./list-users/filter-pipe";
import { AdminComponent } from './admin/admin.component';
import {JobtitleService} from "./services/jobtitle.service";
import {LocationService} from "./services/location.service";
import {ContractService} from "./services/contract.service";
import { AddContractComponent } from './add-contract/add-contract.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { AddBuComponent } from './add-bu/add-bu.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { AddJobtitleComponent } from './add-jobtitle/add-jobtitle.component';
import { AddManagerComponent } from './add-manager/add-manager.component';
import { ListContractComponent } from './list-contract/list-contract.component';
import { ListLocationComponent } from './list-location/list-location.component';
import { ListDepartmentComponent } from './list-department/list-department.component';
import { ListBuComponent } from './list-bu/list-bu.component';
import { ListServiceComponent } from './list-service/list-service.component';
import { ListJobtitlesComponent } from './list-jobtitles/list-jobtitles.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { ListRoleComponent } from './list-role/list-role.component';
import { ListUsersByManagerComponent } from './list-users-by-manager/list-users-by-manager.component';

import { AUTH_PROVIDERS} from "angular2-jwt";
// import {AuthGuard} from "./auth.guard";
import {AuthService} from "./auth.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListUsersComponent,
    DashboardComponent,
    AddUserComponent,
    ListUserElementComponent,
    FilterPipe,
    AdminComponent,
    AddContractComponent,
    AddLocationComponent,
    AddDepartmentComponent,
    AddBuComponent,
    AddServiceComponent,
    AddJobtitleComponent,
    AddManagerComponent,
    ListContractComponent,
    ListLocationComponent,
    ListDepartmentComponent,
    ListBuComponent,
    ListServiceComponent,
    ListJobtitlesComponent,
    ListManagerComponent,
    AddRoleComponent,
    ListRoleComponent,
    ListUsersByManagerComponent
  ],

  exports: [
    HttpClientModule,
    FilterPipe
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    CommonModule,
    routing,
  ],
  providers: [UserService,BuService,DepartmentService,ServiceService,RoleService,ManagerService,JobtitleService,LocationService,ContractService,AUTH_PROVIDERS/*,AuthGuard*/,AuthService],
  bootstrap: [AppComponent]
})

export class AppModule {
}

