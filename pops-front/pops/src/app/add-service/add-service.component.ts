import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {ServiceService} from "../services/service.service";
import {HttpErrorResponse} from "@angular/common/http";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  @ViewChild('f') form: NgForm;

  addServiceGroup: FormGroup;

  @Output() save: EventEmitter<any>;

  private libelle: string;
  profile: any;
  role: any;

  constructor(private rooter: Router,private fb: FormBuilder,private serviceservice: ServiceService, public auth: AuthService) {
    this.serviceservice = serviceservice;
    this.auth = auth;
  }

  ngOnInit() {
    this.addServiceGroup = this.fb.group({
      'libelle': ['',[Validators.required]],
    });

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

  public add(libelle) {

    this.serviceservice.add(this.libelle).subscribe(res => {
        console.log(res);
        this.rooter.navigate(['add-service']);
        window.alert("Service enregistré avec succès !");
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

  onSubmit() {

    if (this.form.valid) {

      this.save.emit({
        'libelle': this.form.value.libelle,
      });
    }
  }
}
