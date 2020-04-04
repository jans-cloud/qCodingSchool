import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-landing-mobile',
  templateUrl: './landing-mobile.component.html',
  styleUrls: ['./landing-mobile.component.scss'],
  animations: [
    trigger('formInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1.5s', style({ opacity: 1 })),
      ])
    ]),
    trigger('openClose', [
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0,
      })),
      transition('open => closed', [
        animate('1.5s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
    ]),
   ],
})
export class LandingMobileComponent implements OnInit {
  cardOne = true;
  cardTwo = true;
  cardThree = true;
  cardFour = true;
  state = "enter";

  constructor() {}

  ngOnInit(): void {
  }

  changeFormOne() {
    this.cardOne = !this.cardOne;
  }

  changeFormTwo() {
    this.cardTwo = !this.cardTwo;
  }

  changeFormThree() {
    this.cardThree = !this.cardThree;
  }

  changeFormFour() {
    this.cardFour = !this.cardFour;
  }

}
