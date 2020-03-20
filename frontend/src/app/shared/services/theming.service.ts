import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemingService {

  localStrName: string = "theme"
  constructor() { }

  changeTheme() {
    switch(this.themeValue) {
      case 'dark-theme':
        this.themeValue = 'light-theme';
        break;
      case 'light-theme':
        this.themeValue = 'dark-theme';
        break;
      default:
        this.themeValue = 'light-theme';
        break;
    }
  }

  set themeValue(val: string) {
    localStorage.setItem(this.localStrName, val);
  }

  get themeValue() {
    const theme = localStorage.getItem(this.localStrName);
    if (theme) {
      return theme;
    }
    return 'light-theme';
  }

}
