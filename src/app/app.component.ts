import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hospitality-portal';
  menu = 'Register Patient';

  onMenuChange(menu) {
    this.menu = menu;
  }
}
