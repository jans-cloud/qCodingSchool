import { Component, OnInit } from '@angular/core';
import { ThemingService } from '../../services/theming.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private theme: ThemingService) { }

  ngOnInit(): void {
  }

  changeTheme() {
   this.theme.changeTheme();
  }
}
