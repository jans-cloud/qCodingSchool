/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/extensions */
import UserModel from './userModel';

import { NewUser } from './userTypes';
import getLogger from '../../../../utils/logger/logger';

const logger = getLogger('userService');

function deleteUser(email: string, utilAction? : boolean): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    UserModel.deleteOne({ email }, (error) => {
      if (error) {
        logger.error(`deleteUser: ${JSON.stringify(error)}`);
        if (utilAction) return resolve();
        return reject(error);
      }
      logger.info(`deleteUser Email:${email}`);
      return resolve(true);
    });
  });
}

function createUser(user: NewUser): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    UserModel.create(user, (error: any, document: any) => {
      if (error) {
        logger.error(`createUser: ${JSON.stringify(error)}`);
        return reject(error);
      }
      logger.info(`createUser ${document}`);
      return resolve(document);
    });
  });
}

async function updateConfirmEmail(email: string): Promise<any> {
  try {
    const updatedUser = await UserModel.updateOne({ email }, { verified: true });
    if (updatedUser.nModified === 1 && updatedUser.ok === 1) {
      return true;
    }
    return false;
  } catch (error) {
    logger.error(`updateConfirmEmail: ${JSON.stringify(error)}`);
    throw new Error(error);
  }
}

export {
  createUser,
  deleteUser,
  updateConfirmEmail,
};
