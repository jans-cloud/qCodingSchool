import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from '../services/api.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
  animations: [
    trigger('formInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2s', style({ opacity: 1 })),
      ])
    ]),
    trigger('errorGrow', [
      transition(':enter', [
        style({ transform: 'translateX(25%)' }),
        animate('300ms', style({ transform: 'translateX(0)' })),
      ])
    ]),
  ],
})
export class ConfirmComponent implements OnInit {
  state = "enter";
  accountErrorMessage: boolean = false;
  supportMail: string = environment.supportMail;

  constructor(private route: ActivatedRoute, private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    const regtoken = this.route.snapshot.queryParams['regtoken'];
    if (regtoken) {
      this.api.confirmEmailAddress(regtoken).subscribe({
        next: (result: any) => {
          if (result.accountCreated) {
            console.log('Result', result);
          }
        },
        error: (error: any) => {
          console.log(error);
          this.accountErrorMessage = true;
        }
      });
    } else {
      this.router.navigate(['/register']);
    }
  }

}
