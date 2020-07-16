import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnChanges {
  @Input() menu;

  public patientList: Array<Object> = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.menu)
  }

  ngOnChanges(val) {
    console.log(val);
    this.menu = val.menu.currentValue;
  }

  addPatient(obj) {
    this.patientList.push({
      ...obj,
      name: `${obj.firstname} ${obj.lastname}`
    });
    console.log(this.patientList);
  }
}
