import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import {UserService} from "../user.service"
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Router} from "@angular/router";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') form: NgForm;

  loginGroup: FormGroup;

  @Output() save: EventEmitter<any>;

  email: string;
  password: string;
  title = 'POPS';
  private nom: string;
  profile: any;

  constructor(private http: HttpClient, private userservice: UserService, private rooter: Router, private fb: FormBuilder,public auth: AuthService) {
    this.userservice = userservice;
  }

  ngOnInit(): void {
    this.auth.login();
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
    // this.auth.signIn();

  }

  onSubmit() {
    if (this.form.valid) {
      this.save.emit({
        'email': this.form.value.email,
        'password': this.form.value.password,
      });
    }
  }
}



