import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemingService {

  localStrName: string = "theme"
  constructor() { }

  animationColorDark: string = "rgba(66, 66, 66, 0.1)";
  animationColorLight: string = "rgba(255, 255, 255, 0.1)";
  animationColorLightBack: string = "rgba(224, 224, 224, 0.1)";


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

  get currentAnimationColor(): string {
    const theme = localStorage.getItem(this.localStrName);
    if (theme === "dark-theme") {
      return this.animationColorDark;
    }
    return this.animationColorLight;
  }

  get currentAnimationColorBack(): string {
    const theme = localStorage.getItem(this.localStrName);
    if (theme === "dark-theme") {
      return this.animationColorDark;
    }
    return this.animationColorLightBack;
  }

}
