import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {ManagerService} from "../services/manager.service";
import {HttpErrorResponse} from "@angular/common/http";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.css']
})
export class AddManagerComponent implements OnInit {

  @ViewChild('f') form: NgForm;

  addManagerGroup: FormGroup;

  @Output() save: EventEmitter<any>;

  private name: string;
  profile: any;
  role: any;

  constructor(private rooter: Router,private fb: FormBuilder,private managerservice: ManagerService,public auth: AuthService) {
    this.managerservice = managerservice;
    this.auth = auth;
  }

  ngOnInit() {
    this.addManagerGroup = this.fb.group({
      'name': ['',[Validators.required]],
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

  public add(name) {

    this.managerservice.add(this.name).subscribe(res => {
        console.log(res);
        this.rooter.navigate(['add-manager']);
        window.alert("Manager enregistré avec succès !");
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
        'name': this.form.value.name,
      });
    }
  }
}
