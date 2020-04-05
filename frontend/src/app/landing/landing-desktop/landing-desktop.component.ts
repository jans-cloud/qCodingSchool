import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { ThemingService } from '../../shared/services/theming.service';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-landing-desktop',
  templateUrl: './landing-desktop.component.html',
  styleUrls: ['./landing-desktop.component.scss'],
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
export class LandingDesktopComponent implements OnInit {
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

  ngOnInit(): void {
  }

  getCardColor() {
    const theme = this.theme.themeValue;
    if (theme === "dark-theme") {
      return "dark-color ";
    }
    return "";
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
