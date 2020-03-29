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
    if (this.router.url.includes('/')) {
      this.home = true;
      this.register = false;
    }
    if (this.router.url.includes('/register')) {
      this.home = false;
      this.register = true;
    }
  }

  ngOnInit(): void {
  }

  setButtonActive() {
  }

}
