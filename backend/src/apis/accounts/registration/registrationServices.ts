/* eslint-disable import/extensions */
import { v5 as uuidv5 } from 'uuid';

import { NewAccount } from '../models/account/accountTypes';
import { NewUser } from '../models/user/userTypes';
import { NewEmailVerification } from '../models/registration/emailverificationTypes';
import getLogger from '../../../utils/logger/logger';

import { createAccount, updateNewAccountUser, deleteAccount } from '../models/account/accountService';
import { createUser, deleteUser } from '../models/user/userService';
import { createEmailVerification, getEmailfromToken, deleteVerificationUser } from '../models/registration/emailverificationService';
import { sendRegistrationMail } from '../../../services/email/registrationService';

const logger = getLogger('registrationService');

// eslint-disable-next-line max-len
async function createNewAccountService(email: string, password: string, dsgvo: boolean): Promise<boolean> {
  try {
    const newAccount: NewAccount = new NewAccount(
      email, dsgvo, dsgvo,
    );
    const accDoc: any = await createAccount(newAccount);
    const newUser: NewUser = new NewUser(email, password, accDoc.id);
    const savedUser: any = await createUser(newUser);
    const userArr: [string] = [savedUser.id];
    const updated: boolean = await updateNewAccountUser(accDoc.email, userArr);
    return updated;
  } catch (error) {
    deleteUser(email);
    deleteAccount(false, email, true);
    logger.error(`createNewAccountService Email: ${email} Error: ${JSON.stringify(error)}`);
    throw new Error(error);
  }
}

async function createTempAccount(email: string, password: string, dsgvo: boolean) {
  try {
    const token = uuidv5(email, uuidv5.DNS);
    const tempAcc: NewEmailVerification = new NewEmailVerification(
      email, token, dsgvo, dsgvo, password,
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

async function confirmUserEmail(regToken: string) {
  try {
    const document = await getEmailfromToken(regToken);
    const created = await createNewAccountService(
      document.email, document.password, document.dsgvo,
    );
    if (created) {
      return true;
    }
    deleteUser(document.email);
    deleteAccount(false, document.email, true);
    return false;
  } catch (error) {
    logger.error(`confirmUserEmail regToken: ${regToken} Error: ${JSON.stringify(error)}`);
    throw new Error(error);
  }
}

export {
  createNewAccountService,
  confirmUserEmail,
  createTempAccount,
};
