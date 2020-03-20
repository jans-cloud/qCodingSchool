/* eslint-disable import/prefer-default-export */

class NewAccount {
  readonly email: string;

  readonly dsgvo: boolean;

  readonly termsofservice: boolean;

  readonly created: number;

  readonly updated: number;

  constructor(email: string, dsgvo: boolean, termsofservice: boolean) {
    this.email = email;
    this.dsgvo = dsgvo;
    this.termsofservice = termsofservice;
    this.created = Date.now();
    this.updated = Date.now();
  }
}


export {
  NewAccount,
};
