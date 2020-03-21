import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-burgermenu',
  templateUrl: './burgermenu.component.html',
  styleUrls: ['./burgermenu.component.scss']
})
export class BurgermenuComponent implements OnInit, DoCheck {

  home: boolean;
  learner: boolean;
  teacher: boolean;
  coperate: boolean;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    console.log(this.router.url);
    switch(this.router.url) {
      case '/home':
        this.home = false;
        this.learner = true;
        this.teacher = true;
        this.coperate = true;
        break;
      case '/learner':
        this.home = true;
        this.learner = false;
        this.teacher = true;
        this.coperate = true;
        break;
      case '/teacher':
        this.home = true;
        this.learner = true;
        this.teacher = false;
        this.coperate = true;
        break;
      case '/coperate':
        this.home = true;
        this.learner = true;
        this.teacher = true;
        this.coperate = false;
        break;
      default:
        this.home = true;
        this.learner = true;
        this.teacher = true;
        this.coperate = true;
        break;
    }
  }

}
