import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() { }
  patientList: Array<object> = []

  setList(patObj) {
    this.patientList = [...this.patientList, patObj];
  }

  getList() {
     return this.patientList; 
  }
}