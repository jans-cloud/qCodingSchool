/* eslint-disable max-classes-per-file */
/* eslint-disable import/extensions */

class NewUser {
  readonly email: string;

  readonly password: string;

  readonly verified: boolean;

  readonly account: string;

  readonly created: number;

  readonly updated: number;

  constructor(email: string, password: string, account: string) {
    this.email = email;
    this.account = account;
    this.password = password;
    this.created = Date.now();
    this.updated = Date.now();
    this.verified = true;
  }
}

class SavedUser {
}

export {
  NewUser,
  SavedUser,
};
