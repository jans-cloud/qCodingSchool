/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/extensions */

import AccountModel from './accountModel';

import { NewAccount } from './accountTypes';
import getLogger from '../../../../utils/logger/logger';

const logger = getLogger('accountService');

function createAccount(account: NewAccount): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    AccountModel.create(account, (error: any, document: any) => {
      if (error) {
        logger.error(`createAccount: ${JSON.stringify(error)}`);
        return reject(error);
      }
      logger.info(`createAccount ${document}`);
      return resolve(document);
    });
  });
}

function findAccount(account: any): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    AccountModel.findOne({ email: account.email }, (err, docs: any) => {
      if (err) {
        logger.error(`findAccount findOne: ${JSON.stringify(err)}`);
        return reject(err);
      }
      logger.info(`findAccount ${docs?.email}`);
      return resolve(docs);
    });
  });
}

async function updateNewAccountUser(emailParam: string, userArr: [string]): Promise<boolean> {
  try {
    const update = await AccountModel.updateOne({ email: emailParam }, { user: userArr });
    if (update.nModified === 1 && update.ok === 1) {
      return true;
    }
    return false;
  } catch (error) {
    logger.error(`updateAccount: ${JSON.stringify(error)}`);
    throw new Error(error);
  }
}

function deleteAccount(accountId: string | false,
  email: string, utilAction? : boolean): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    const accProperty = accountId ? { _id: accountId } : { email };
    AccountModel.deleteOne(accProperty, (error) => {
      if (error) {
        logger.error(`deleteAccount: ${JSON.stringify(error)}`);
        if (utilAction) return resolve();
        return reject(error);
      }
      logger.info(`deleteAccount AccountId:${accountId}, Email: ${email}`);
      return resolve(true);
    });
  });
}

export {
  createAccount,
  findAccount,
  deleteAccount,
  updateNewAccountUser,
};
