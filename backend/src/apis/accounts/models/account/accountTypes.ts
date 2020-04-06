/* eslint-disable import/prefer-default-export */

class NewAccount {
  readonly email: string;

  readonly name: string;

  readonly learner: boolean;

  readonly teacher: boolean;

  readonly enterprise: boolean;

  readonly industry: string | undefined;

  readonly skills: [string] | undefined;

  readonly dsgvo: boolean;

  constructor(email: string, name: string, learner: boolean, teacher: boolean,
    enterprise: boolean, industry: string, skills: [string], dsgvo: boolean) {
    this.email = email;
    this.name = name;
    this.learner = learner;
    this.teacher = teacher;
    this.enterprise = enterprise;
    this.industry = industry;
    this.skills = skills;
    this.dsgvo = dsgvo;
  }
}


export {
  NewAccount,
};
