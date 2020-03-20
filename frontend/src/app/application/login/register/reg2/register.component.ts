import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    trigger('formInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2s', style({ opacity: 1 })),
      ])
    ]),
    trigger('formGroupInsert', [
      transition(':enter', [
        style({ transform: 'translateX(25%)' }),
        animate('300ms', style({ transform: 'translateX(0)' })),
      ])
    ]),
   ],
})
export class RegisterComponent implements OnInit {
  formGroup: number = 1;
  hidePassword: boolean = true;
  state = "enter";

  registerForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'loginInformation': new FormGroup({
        'acctype': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'password': new FormControl(null),
      }),
      'userInformation': new FormGroup({
        'firstname': new FormControl(null),
        'lastname': new FormControl(null),
        'birthdate': new FormControl(null),
        'gender': new FormControl(),
      }),
      'contactInformation': new FormGroup({
        'companyname': new FormControl(null, Validators.required),
        'street': new FormControl(null, Validators.required),
        'city': new FormControl(null, Validators.required),
        'zipcode': new FormControl(null, [Validators.required, Validators.minLength(5),Validators.maxLength(5)]),
      })
    });
  }

  changeForm(up: boolean) {
    if(up) {
      this.formGroup += 1;
    } else {
      this.formGroup -= 1;
    }
  }

  onSubmit() {
    console.log(this.registerForm);
  }

}
