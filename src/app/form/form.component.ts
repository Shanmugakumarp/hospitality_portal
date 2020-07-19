import { Component, OnInit } from '@angular/core';
import { CommonService } from './../shared/common-service';
import {ConfirmationService} from 'primeng/api';

import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public model: object = {
    firstname: '',
    lastname: '',
    gender: '',
    age: 0,
    city: ''
  }

  constructor(private commonService: CommonService, 
    private router: Router,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.commonService.setList({...this.model, name: `${this.model['firstname']} ${this.model['lastname']}`});
    this.confirmationService.confirm({
      message: 'Patient data added successfully, please proceed to view patient list',
      accept: () => {
          this.router.navigate(['table'])
      }
  });
  }

  validate() {
    return (this.model['firstname'] && this.model['lastname'] && this.model['gender'] && this.model['age'] > 0 && this.model['city']);
  }
}
