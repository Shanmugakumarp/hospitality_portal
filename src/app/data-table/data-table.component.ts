import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from './../shared/common-service';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  public patientList: Array<Object> = []

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.patientList = this.commonService.patientList;
  }

}
