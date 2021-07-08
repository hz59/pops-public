import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {User} from "../models/user";
import {HttpErrorResponse} from "@angular/common/http";
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";

@Component({
  selector: 'app-list-users-by-manager',
  templateUrl: './list-users-by-manager.component.html',
  styleUrls: ['./list-users-by-manager.component.css']
})
export class ListUsersByManagerComponent implements OnInit {

  private manager_name:string;
  users: any = {};

  @Input()
  public user: User;

  public ListDisplay: boolean = false;

  @ViewChild('f') form: NgForm;

  editUserGroup: FormGroup;

  @Output() save: EventEmitter<any>;

  constructor(private userservice: UserService, private rooter: Router,private fb: FormBuilder) {
    this.userservice = userservice;
    this.getUsers();
    this.getData();
    this.getUsersByManager();
    this.getDataUsersManager();
  }

  ngOnInit() {
    this.editUserGroup = this.fb.group({
      'manager_name': ['',],
    })
  }

  getData() { return this.userservice.list(); }

  getUsers() {
    this.getData().subscribe(users => {
      this.users = users.manager_name;
    })
  }

  getDataUsersManager(){ return this.userservice.listByManager(this.manager_name) }

  getUsersByManager(){
    this.getDataUsersManager().subscribe(users => {
      this.users = users;
    })
  }

  public listUsersByManagerName(user){
    user = this.user;
    this.userservice.listByManager(user.manager_name).subscribe(res => {
        console.log(res);
        this.rooter.navigate(['list-users-by-manager']);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      });
  }

  public goDashboard() { this.rooter.navigate(['pops-dashboard']); }

  onSubmit() {

    if (this.form.valid) {
      this.save.emit({
        'manager_name': this.form.value.manager_name
      });
    }
  }
}
