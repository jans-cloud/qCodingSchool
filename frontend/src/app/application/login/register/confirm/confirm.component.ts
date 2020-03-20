import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from '../services/api.service';

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

  constructor(private route: ActivatedRoute, private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    const regtoken = this.route.snapshot.queryParams['regtoken'];
    if (regtoken) {
      console.log('Token', regtoken);
      this.api.confirmEmailAddress(regtoken).subscribe();
    } else {
      this.router.navigate(['/app/register']);
    }
  }

}
