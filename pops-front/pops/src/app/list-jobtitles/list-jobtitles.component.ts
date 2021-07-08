import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {JobtitleService} from "../services/jobtitle.service";
import {HttpErrorResponse} from "@angular/common/http";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-list-jobtitles',
  templateUrl: './list-jobtitles.component.html',
  styleUrls: ['./list-jobtitles.component.css']
})
export class ListJobtitlesComponent implements OnInit {

  jobtitles: any = {};
  public isEdit: boolean = false;
  id: number;
  libelle:string;
  profile: any;
  role: any;

  constructor(private rooter: Router,private jobtitleservice: JobtitleService,public auth: AuthService) {
    this.jobtitleservice = jobtitleservice;
    this.auth = auth;
    this.getDataJobTitles();
    this.getJobTitles();
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

  public goAdmin(){
    this.rooter.navigate(['pops-admin']);
  }

  getDataJobTitles() { return this.jobtitleservice.listJobTitles() }

  getJobTitles() {
    this.getDataJobTitles().subscribe(jobtitles => {
      console.log('LIST JOB TITLES :', jobtitles);
      this.jobtitles = jobtitles;
    })
  }

  public updateJobTitle(id,libelle) {

    this.jobtitleservice.update(id,libelle).subscribe(res => {
        console.log(res);
        this.rooter.navigate(['list-jobtitles']);
        window.alert("Job Title modifié avec succès !");
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
