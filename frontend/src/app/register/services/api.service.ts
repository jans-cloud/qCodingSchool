import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  path: string = environment.backendUrl;

  constructor(private http: HttpClient) { }

  checkEmailExists(email: string) {
    return this.http.post<any>(this.path + `account/register/checkemail`, { email });
  }

  registerNewAccount(learner: boolean, teacher: boolean, enterprise: boolean, email: string, name: string, dsgvo: boolean, skills: [string] | undefined, industry: string | undefined) {
    return this.http.post<any>(this.path + `account/register/newaccount`, { learner, teacher, enterprise, email, name, dsgvo, skills, industry });
  }

  confirmEmailAddress(regtoken: string) {
    return this.http.post<any>(this.path + `account/register/confirmemail`, { regtoken });
  }
}
