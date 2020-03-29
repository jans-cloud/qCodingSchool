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
  impressum: boolean;
  dsgvo: boolean;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    if (this.router.url.includes('/')) {
      this.home = false;
      this.register = true;
      this.impressum = true;
      this.dsgvo = true;
    }
    if (this.router.url.includes('/register')) {
      this.home = true;
      this.register = false;
      this.impressum = true;
      this.dsgvo = true;
    }
    if (this.router.url.includes('/impressum')) {
      this.home = true;
      this.register = true;
      this.impressum = false;
      this.dsgvo = true;
    }
    if (this.router.url.includes('/dsgvo')) {
      this.home = true;
      this.register = true;
      this.impressum = true;
      this.dsgvo = false;
    }
  }

}
