/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { encryptPassword } from '../../shared/passwordService';

class NewEmailVerification {
  readonly email: string;

  readonly token: string;

  readonly dsgvo: boolean;

  readonly termsofservice: boolean;

  readonly password: string;

  readonly created: number;

  readonly updated: number;

  constructor(email: string, token: string, dsgvo: boolean,
    termsofservice: boolean, password: string) {
    this.email = email;
    this.token = token;
    this.dsgvo = dsgvo;
    this.termsofservice = termsofservice;
    this.password = encryptPassword(password);
    this.created = Date.now();
    this.updated = Date.now();
  }
}


export {
  NewEmailVerification,
};
