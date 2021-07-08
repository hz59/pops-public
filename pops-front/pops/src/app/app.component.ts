import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map'
import {UserService} from "./user.service";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  email: string;
  password: string;
  title = 'POPS';

  constructor(private http: HttpClient,private userservice:UserService, public auth: AuthService) {
      this.userservice = userservice;
  }

  ngOnInit() {

  }
}

