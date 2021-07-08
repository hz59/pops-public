import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {LoginComponent} from "./login";
import {ListUsersComponent} from "./list-users";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {AdminComponent} from "./admin/admin.component";
import {AddContractComponent} from "./add-contract/add-contract.component";
import {AddLocationComponent} from "./add-location/add-location.component";
import {AddDepartmentComponent} from "./add-department/add-department.component";
import {AddBuComponent} from "./add-bu/add-bu.component";
import {AddServiceComponent} from "./add-service/add-service.component";
import {AddJobtitleComponent} from "./add-jobtitle/add-jobtitle.component";
import {AddManagerComponent} from "./add-manager/add-manager.component";
import {ListContractComponent} from "./list-contract/list-contract.component";
import {ListLocationComponent} from "./list-location/list-location.component";
import {ListDepartmentComponent} from "./list-department/list-department.component";
import {ListBuComponent} from "./list-bu/list-bu.component";
import {ListServiceComponent} from "./list-service/list-service.component";
import {ListJobtitlesComponent} from "./list-jobtitles/list-jobtitles.component";
import {ListManagerComponent} from "./list-manager/list-manager.component";
import {AddRoleComponent} from "./add-role/add-role.component";
import {ListRoleComponent} from "./list-role/list-role.component";
import {ListUsersByManagerComponent} from "./list-users-by-manager/list-users-by-manager.component";
// import {AuthGuard} from "./auth.guard";

const appRoutes : Routes =
  [
    { path: '', component: LoginComponent /*,canActivate: [AuthGuard]*/ },
    { path: 'login', component: LoginComponent},
    { path: 'list-users', component: ListUsersComponent, /* canActivate: [AuthGuard] */},
    { path: 'pops-dashboard', component: DashboardComponent /*,canActivate: [AuthGuard]*/},
    { path: 'pops-admin', component: AdminComponent, /*canActivate: [AuthGuard]*/},
    { path: 'add-user', component: AddUserComponent,/* canActivate: [AuthGuard]*/},
    { path: 'add-contract', component: AddContractComponent,/* canActivate: [AuthGuard]*/},
    { path: 'add-location', component: AddLocationComponent, /*canActivate: [AuthGuard]*/},
    { path: 'add-department', component: AddDepartmentComponent, /*canActivate: [AuthGuard]*/},
    { path: 'add-bu', component: AddBuComponent,/* canActivate: [AuthGuard]*/},
    { path: 'add-service', component: AddServiceComponent, /*canActivate: [AuthGuard]*/},
    { path: 'add-jobtitle', component: AddJobtitleComponent,/* canActivate: [AuthGuard]*/},
    { path: 'add-manager', component: AddManagerComponent, /*canActivate: [AuthGuard]*/},
    { path: 'add-role', component: AddRoleComponent, /*canActivate: [AuthGuard]*/},
    { path: 'list-contracts', component: ListContractComponent,/* canActivate: [AuthGuard]*/},
    { path: 'list-locations', component: ListLocationComponent, /*canActivate: [AuthGuard]*/},
    { path: 'list-departments', component: ListDepartmentComponent,/* canActivate: [AuthGuard]*/},
    { path: 'list-bu', component: ListBuComponent/*, canActivate: [AuthGuard]*/},
    { path: 'list-services', component: ListServiceComponent/*, canActivate: [AuthGuard]*/},
    { path: 'list-jobtitles', component: ListJobtitlesComponent, /*canActivate: [AuthGuard]*/},
    { path: 'list-managers', component: ListManagerComponent,/* canActivate: [AuthGuard]*/},
    { path: 'list-roles', component: ListRoleComponent,/* canActivate: [AuthGuard]*/},
    { path: 'list-users-by-manager', component: ListUsersByManagerComponent, /*canActivate: [AuthGuard]*/},
    { path: '**', redirectTo: 'login'}
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
