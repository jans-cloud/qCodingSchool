import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit, DoCheck {

  objects: boolean = false;
  renter: boolean = false;
  administration: boolean = false;

  constructor(private router: Router) { }

  ngDoCheck(): void {
    console.log(this.router.url);
    switch(this.router.url) {
      case '/app/objects':
        this.objects = true;
        this.renter = false;
        this.administration = false;
        break;
      case '/app/tenants':
        this.objects = false;
        this.renter = true;
        this.administration = false;
        break;
      case '/app/administration':
        this.objects = false;
        this.renter = false;
        this.administration = true;
        break;
      default:
        this.objects = false;
        this.renter = false;
        this.administration = false;
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
