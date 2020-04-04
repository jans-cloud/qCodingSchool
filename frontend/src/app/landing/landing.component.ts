import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    trigger('formInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2s', style({ opacity: 1 })),
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
        animate('2s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
    ]),
   ],
})
export class LandingComponent implements OnInit {
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
