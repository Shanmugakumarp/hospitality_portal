import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output()
  menuChange: EventEmitter<string> = new EventEmitter<string>();


  public moment = moment();
  public items: MenuItem[];

  constructor(private router: Router ) { }

  ngOnInit(): void {
    setInterval(() => {
      this.moment = moment();
    }, 1000);

    this.items = [{
      label: 'Register Patient',
      command: () => this.router.navigate(['/'])
    },
    {
      label: 'Patient Details',
      command: () => this.router.navigate(['table'])
    }];
  }
}
