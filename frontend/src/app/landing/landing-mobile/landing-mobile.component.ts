import { Component, OnInit, DoCheck } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { ThemingService } from '../../shared/services/theming.service';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

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
  constructor(private theme: ThemingService, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      "enterprise",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/svg/enterprise.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "teach",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/svg/teach.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "learn",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/svg/learn.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "intro",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/svg/intro.svg")
    );
  }


  getCardColor() {
    const theme = this.theme.themeValue;
    if (theme === "dark-theme") {
      return "dark-color ";
    }
    return "";
  }

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
