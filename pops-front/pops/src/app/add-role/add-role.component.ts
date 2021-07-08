import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {RoleService} from "../services/role.service";
import {HttpErrorResponse} from "@angular/common/http";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  @ViewChild('f') form: NgForm;

  addRoleGroup: FormGroup;

  @Output() save: EventEmitter<any>;

  private type: string;
  private claims: string;
  profile: any;
  role: any;

  constructor(private rooter: Router,private fb: FormBuilder,private roleservice: RoleService,public auth: AuthService) {
    this.roleservice = roleservice;
    this.auth = auth;
  }

  ngOnInit() {
    this.addRoleGroup = this.fb.group({
      'type': ['',[Validators.required]],
      'claims': ['',[Validators.required]],
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

  public add(type,claims) {

    this.roleservice.add(this.type,this.claims).subscribe(res => {
        console.log(res);
        this.rooter.navigate(['add-role']);
        window.alert("Rôle enregistré avec succès !");
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
        'type': this.form.value.role_type,
        'claims': this.form.value.claims
      });
    }
  }
}
