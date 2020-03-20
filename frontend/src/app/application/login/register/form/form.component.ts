import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { FormGroup, Validators, FormControl} from '@angular/forms';
import { Observable } from 'rxjs';

import { ApiService } from '../services/api.service';

import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
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
export class FormComponent implements OnInit {

  supportMail: string = environment.supportMail;
  hidePassword: boolean = true;
  state = "enter";
  accountCreatedMessage: boolean = false;
  accountErrorMessage: boolean = false;
  customerEmail: string;
  registerForm: FormGroup;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email], [this.forbiddenEmails.bind(this)]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8), this.passwordValidation.bind(this)]),
      'dsgvo': new FormControl(null,  [Validators.requiredTrue]),
    });
  }

  checkLetterExists(val: string) {
    const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const arrVal = val.split('');
    for (let i = 0; i < arrVal.length; i+=1) {
      const index = chars.indexOf(arrVal[i]);
      if (index > -1) {
        return true;
      }
    }
    return false;
  }

  passwordValidation(control: FormControl): {[s: string]: boolean} {
    const val = control.value;
    if (val) {
      if (val.includes('0') || val.includes('1') || val.includes('2') || val.includes('3') || val.includes('4')
      || val.includes('5') || val.includes('6') || val.includes('7') || val.includes('8') || val.includes('9')) {
       if (this.checkLetterExists(val)) {
         return null;
       }
       return {'noLetterIncluded': true};
     }
    }
    return {'noNumberIncluded': true};
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
        this.api.checkEmailExists(control.value).subscribe({
            next: (result: any) => {
              if (result.emailExists) {
                console.log('Result', result);
                return resolve({'emailAlreadyExists': true});
              }
              return resolve(null);
            },
            error: (error: any) => {
              console.log(error);
            }
        })
    })
    return promise;
  }

  onSubmit() {
    const { email, password, dsgvo } = this.registerForm.value;
    this.customerEmail = email;
    this.api.registerNewAccount(email, password, dsgvo).subscribe({
      next: (result: any) => {
        if (result.accountCreated) {
          console.log('Result', result);
          this.accountCreatedMessage = result.accountCreated;
        } else {
          this.accountErrorMessage = true;
        }
      },
      error: (error: any) => {
        console.log(error);
        this.accountErrorMessage = true;
      }
    });
  }

}
