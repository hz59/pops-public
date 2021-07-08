import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
import {ContractService} from "../services/contract.service";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-add-contrat',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.css']
})
export class AddContractComponent implements OnInit {

  @ViewChild('f') form: NgForm;

  addContractGroup: FormGroup;

  @Output() save: EventEmitter<any>;

  private libelle: string;
  profile: any;
  role: any;

  constructor(private rooter: Router,private fb: FormBuilder, private contractservice: ContractService, public auth: AuthService) {
    this.contractservice = contractservice;
    this.auth = auth;
  }

  ngOnInit() {
    this.addContractGroup = this.fb.group({
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

    this.contractservice.add(this.libelle).subscribe(res => {
        console.log(res);
        this.rooter.navigate(['add-contract']);
        window.alert("Contrat enregistré avec succès !");
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
