/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */

class NewEmailVerification {
  readonly token: string;

  readonly email: string;

  readonly name: string;

  readonly learner: boolean;

  readonly teacher: boolean;

  readonly enterprise: boolean;

  readonly industry: string | undefined;

  readonly skills: [string] | undefined;

  readonly dsgvo: boolean;

  readonly created: number;

  constructor(email: string, name: string, learner: boolean, teacher: boolean,
    enterprise: boolean, industry: string, skills: [string], dsgvo: boolean, token: string) {
    this.token = token;
    this.email = email;
    this.name = name;
    this.learner = learner;
    this.teacher = teacher;
    this.enterprise = enterprise;
    this.industry = industry;
    this.skills = skills;
    this.dsgvo = dsgvo;
    this.created = Date.now();
  }
}


export {
  NewEmailVerification,
};
