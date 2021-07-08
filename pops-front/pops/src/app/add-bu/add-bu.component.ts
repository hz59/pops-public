import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
import {BuService} from "../services/bu.service";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-add-bu',
  templateUrl: './add-bu.component.html',
  styleUrls: ['./add-bu.component.css']
})
export class AddBuComponent implements OnInit {

  @ViewChild('f') form: NgForm;

  addBuGroup: FormGroup;

  private libelle: string;

  @Output() save: EventEmitter<any>;

  profile: any;
  role: any;

  constructor(private rooter: Router,private fb: FormBuilder,private buservice: BuService,public auth: AuthService) {
    this.buservice = buservice;
    this.auth = auth;
  }

  ngOnInit() {
    this.addBuGroup = this.fb.group({
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

    this.buservice.add(this.libelle).subscribe(res => {
        console.log(res);
        this.rooter.navigate(['add-bu']);
        window.alert("Business Unit enregistrée avec succès !");
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
