/* eslint-disable import/extensions */
import { v5 as uuidv5 } from 'uuid';
import * as EmailValidator from 'email-validator';

import { NewAccount } from '../models/account/accountTypes';
import { NewEmailVerification } from '../models/registration/emailverificationTypes';
import getLogger from '../../../utils/logger/logger';

import { createAccount, deleteAccount } from '../models/account/accountService';
import { createEmailVerification, getEmailfromToken, deleteVerificationUser } from '../models/registration/emailverificationService';
import { sendRegistrationMail } from '../../../services/email/registrationService';

const logger = getLogger('registrationService');

// // eslint-disable-next-line max-len
async function createNewAccountService(email: string, name: string, dsgvo: boolean,
  learner: boolean, teacher: boolean,
  enterprise: boolean, industry: string, skills: [string]): Promise<boolean> {
  try {
    const newAccount: NewAccount = new NewAccount(
      email, name, learner, teacher, enterprise, industry, skills, dsgvo,
    );
    const accDoc = await createAccount(newAccount);
    if (accDoc.email) {
      return true;
    }
    return false;
  } catch (error) {
    deleteAccount(false, email);
    logger.error(`createNewAccountService Email: ${email} Error: ${JSON.stringify(error)}`);
    throw new Error(error);
  }
}

async function createTempAccount(email: string, name: string, dsgvo: boolean,
  learner: boolean, teacher: boolean, enterprise: boolean, industry: string, skills: [string]) {
  try {
    const token = uuidv5(email, uuidv5.DNS);
    const tempAcc: NewEmailVerification = new NewEmailVerification(
      email, name, learner, teacher, enterprise, industry, skills, dsgvo, token,
    );
    const document = await createEmailVerification(tempAcc);
    const emailSend = await sendRegistrationMail(document.email, token);
    return emailSend;
  } catch (error) {
    deleteVerificationUser(email);
    logger.error(`createTempAccount Email: ${email} Error: ${JSON.stringify(error)}`);
    throw new Error(error);
  }
}

async function confirmAccountEmail(regToken: string) {
  try {
    const document = await getEmailfromToken(regToken);
    const {
      learner, teacher, enterprise, email, name, dsgvo, skills, industry,
    } = document;
    const created = await createNewAccountService(email, name, dsgvo,
      learner, teacher, enterprise, industry, skills);
    deleteVerificationUser(email);
    if (created) {
      return true;
    }
    return false;
  } catch (error) {
    logger.error(`confirmUserEmail regToken: ${regToken} Error: ${JSON.stringify(error)}`);
    throw new Error(error);
  }
}

function validateInput(
  email: string, learner: boolean, teacher: boolean, enterprise: boolean, name: string,
  skills: [string] | undefined, industry: string | undefined,
): boolean {
  const validMail = EmailValidator.validate(email);
  const nameCorrect = name.length < 30;
  const industryCorrext = industry ? industry.length < 30 : true;
  let skillsCorrect = true;
  if (skills) {
    for (let i = 0; i < skills.length; i += 1) {
      skillsCorrect = skills[i].length < 30;
    }
  }
  if (nameCorrect && industryCorrext && skillsCorrect
    && validMail && (learner || teacher || enterprise)) {
    return true;
  }
  return false;
}

export {
  confirmAccountEmail,
  createTempAccount,
  validateInput,
};
