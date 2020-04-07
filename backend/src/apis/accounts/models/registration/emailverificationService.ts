/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/extensions */

import EmailVerificationModel from './emailverificationModel';
import { NewEmailVerification } from './emailverificationTypes';

import getLogger from '../../../../utils/logger/logger';

const logger = getLogger('emailverificationService');

function createEmailVerification(newUser: NewEmailVerification): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    EmailVerificationModel.create(newUser, (error: any, document: any) => {
      if (error) {
        logger.error(`createEmailVerification: ${JSON.stringify(error)}`);
        return reject(error);
      }
      logger.info(`createEmailVerification ${JSON.stringify(document)}`);
      return resolve(document);
    });
  });
}

function getEmailfromToken(regToken: string): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    EmailVerificationModel.findOne({ token: regToken }, (error: any, document: any) => {
      if (error) {
        logger.error(`getEmailfromToken: ${JSON.stringify(error)}`);
        return reject(error);
      }
      logger.info(`getEmailfromToken ${JSON.stringify(document)}`);
      return resolve(document);
    });
  });
}

async function deleteVerificationUser(email: string): Promise<any> {
  try {
    const deleted = await EmailVerificationModel.deleteOne({ email });
    if (deleted.ok === 1) {
      return true;
    }
    return false;
  } catch (error) {
    logger.error(`updateAccount: ${JSON.stringify(error)}`);
    throw new Error(error);
  }
}

export {
  createEmailVerification,
  getEmailfromToken,
  deleteVerificationUser,
};
