import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
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

  registerNewAccount(email: string, password: string, dsgvo: boolean) {
    return this.http.post<any>(this.path + `account/register/newaccount`, { email, password, dsgvo, });
  }

  confirmEmailAddress(regtoken: string) {
    return this.http.post<any>(this.path + `account/register/confirmemail`, { regtoken });
  }
}
