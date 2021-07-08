import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ContractService} from "../services/contract.service";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {

  contracts: any = {};
  profile: any;
  role: any;

  constructor(private rooter: Router,private contractservice: ContractService, public auth: AuthService) {
    this.contractservice = contractservice;
    this.auth = auth;
    this.getContracts();
    this.getDataContracts();

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

  public goAdmin(){ this.rooter.navigate(['pops-admin']); }

  getDataContracts() { return this.contractservice.listContracts(); }

  getContracts() {
    this.getDataContracts().subscribe(contracts => {
      console.log('LIST CONTRACTS :', contracts);
      this.contracts = contracts;
    })
  }
}
