import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit, DoCheck {

  home: boolean = false;
  learning: boolean = false;
  teaching: boolean = false;
  enterprise: boolean = false;

  constructor(private router: Router) { }

  ngDoCheck(): void {
    console.log(this.router.url);
    switch(this.router.url) {
      case '/home':
        this.home = true;
        this.learning = false;
        this.teaching = false;
        this.enterprise = false;
        break;
      case '/learning':
        this.home = false;
        this.learning = true;
        this.teaching = false;
        this.enterprise = false;
        break;
      case '/teaching':
        this.home = false;
        this.learning = false;
        this.teaching = true;
        this.enterprise = false;
        break;
      case '/enterprise':
        this.home = false;
        this.learning = false;
        this.teaching = false;
        this.enterprise = true;
        break;
      default:
        this.home = false;
        this.learning = false;
        this.teaching = false;
        this.enterprise = false;
        break;
    }
  }

  ngOnInit(): void {
  }

  setButtonActive() {
  //  console.log('Snap', this.route.snapshot);
  //  this.route.url.subscribe((data) => {
  //   console.log("Data", data);
  //  });
  //  console.log(this.route.children);
  }

}
