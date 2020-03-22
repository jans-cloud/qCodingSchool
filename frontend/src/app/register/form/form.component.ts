import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { FormGroup, Validators, FormControl, FormArray} from '@angular/forms';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";

import { ApiService } from '../services/api.service';

import { environment } from '../../../environments/environment';

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

  constructor(private api: ApiService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'learner': new FormControl(true, []),
      'teacher': new FormControl(false, []),
      'enterprise': new FormControl(false, []),
      'email': new FormControl(null, [Validators.required, Validators.email], [this.forbiddenEmails.bind(this)]),
      'name': new FormControl(null, [Validators.required, Validators.maxLength(30)]),
      'dsgvo': new FormControl(null,  [Validators.requiredTrue]),
    });
  }

  getSkillErrors(): {maxlength: boolean, required: boolean} {
    const exists = this.registerForm.contains('skills');
    if (exists) {
      const controls = (<FormArray>this.registerForm.get('skills')).controls;
      for (let i = 0; i < controls.length; i += 1) {
        if (controls[i].touched && controls[i].valid === false) {
          if (!controls[i].errors) {
            return {
              maxlength: false,
              required: false,
            };
          }
          const maxlength = controls[i].errors.maxlength ? true : false;
          const required = controls[i].errors.required ? true : false;
          return {
            maxlength,
            required,
          };
        }
      }
    }
    return {
      maxlength: false,
      required: false,
    };
  }

  getIndustryErrors(): {maxlength: boolean, required: boolean} {
    const exists = this.registerForm.contains('industry');
    if (exists) {
      const touched = this.registerForm.get('industry').touched;
      if (touched) {
        const errors = this.registerForm.get('industry').errors;
        if (!errors) {
          return {
            maxlength: false,
            required: false,
          };
        }
        const maxlength = errors.maxlength ? true : false;
        const required = errors.required ? true : false;
        return {
          maxlength,
          required,
        };
      }
    }
    return {
      maxlength: false,
      required: false,
    };
  }

  setupForm() {
    const teacherVal = this.registerForm.get('teacher').value;
    const enterpriseVal = this.registerForm.get('enterprise').value;
    if (teacherVal === true) {
      this.registerForm.addControl('skills',  new FormArray([new FormControl(null, [Validators.required, Validators.maxLength(30)])]));
    }
    if (teacherVal === false) {
      this.registerForm.removeControl('skills');
    }
    if (enterpriseVal === true) {
      this.registerForm.addControl('industry',  new FormControl(null, [Validators.required, Validators.maxLength(30)]));
    }
    if (enterpriseVal === false) {
      this.registerForm.removeControl('industry');
    }
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
    this.spinner.show();
    const { learner, teacher, enterprise, email, name, dsgvo, skills, industry } = this.registerForm.value;
    this.customerEmail = email;
    this.api.registerNewAccount(learner, teacher, enterprise, email, name, dsgvo, skills, industry).subscribe({
      next: (result: any) => {
        this.spinner.hide();
        if (result.accountCreated) {
          console.log('Result', result);
          this.accountCreatedMessage = result.accountCreated;
        } else {
          this.accountErrorMessage = true;
        }
      },
      error: (error: any) => {
        this.spinner.hide();
        console.log(error);
        this.accountErrorMessage = true;
      }
    });
  }

  addSkill() {
    if ((<FormArray>this.registerForm.get('skills')).length < 4) {
      const control = new FormControl(null, [Validators.required, Validators.maxLength(30)]);
      (<FormArray>this.registerForm.get('skills')).push(control)
      console.log((<FormArray>this.registerForm.get('skills')).controls);
    }
  }

  removeSkill(index: number) {
    (<FormArray>this.registerForm.get('skills')).removeAt(index);
  }

  getFormControllArr(): any{
    return (<FormArray>this.registerForm.get('skills')).controls;
  }

  getFormControllArrLength(): number{
    return (<FormArray>this.registerForm.get('skills')).controls.length;
  }



}
