import { Component, ViewEncapsulation } from '@angular/core';
import { ThemingService } from './shared/services/theming.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'frontend';

  constructor(private theme: ThemingService) {}

  getTheme() {
    const themVal = this.theme.themeValue;
    if (!themVal || themVal === '') {
      return ''
    }
    return themVal;
  }

  ngOnInit(): void {
  }

}
