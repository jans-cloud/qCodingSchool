import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-burgermenu',
  templateUrl: './burgermenu.component.html',
  styleUrls: ['./burgermenu.component.scss']
})
export class BurgermenuComponent implements OnInit, DoCheck {

  home: boolean;
  register: boolean;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    switch(this.router.url) {
      case '/home':
        this.home = false;
        this.register = true;
        break;
      case '/register':
        this.home = true;
        this.register = false;
      default:
        this.home = true;
        this.register = true;
        break;
    }
  }

}
