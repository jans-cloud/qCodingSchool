import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit, DoCheck {

  home: boolean = false;
  register: boolean = false;


  constructor(private router: Router) { }

  ngDoCheck(): void {
    switch(this.router.url) {
      case '/':
        this.home = true;
        this.register = false;
        break;
      case '/home':
        this.home = true;
        this.register = false;
        break;
      case '/register':
        this.home = false;
        this.register = true;
        break;
      case '/register/form':
        this.home = false;
        this.register = true;
        break;
      default:
        this.home = false;
        this.register = false;
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
