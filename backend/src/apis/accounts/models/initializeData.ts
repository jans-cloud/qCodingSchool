/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/extensions */
import bcrypt from 'bcryptjs';

import AccountModel from './account/accountModel';
import UserModel from './user/userModel';

import getLogger from '../../../utils/logger/logger';

const logger = getLogger('initializeData');

const privateAccount: object = {
  email: 'jk.private@test.com',
  type: 'private',
  dsgvo: true,
  termsofservice: true,
  address: {
    zipcode: 42697,
    city: 'Solingen',
    street: 'Mittelstraße 5a',
  },
  user: [],
  roles: [],
  created: Date.now(),
  updated: Date.now(),
};

const privateUser: object = {
  email: 'jk.private@test.com',
  password: 'testAccount01',
  verified: false,
  created: Date.now(),
  updated: Date.now(),
};

const enterpriseAccount: object = {
  email: 'jk.enterprise@test.com',
  type: 'enterprise',
  dsgvo: true,
  termsofservice: true,
  address: {
    zipcode: 42697,
    city: 'Solingen',
    street: 'Mittelstraße 5a',
  },
  user: [],
  roles: [],
  created: Date.now(),
  updated: Date.now(),
};

const enterpriseUser: object = {
  email: 'jk.enterprise@test.com',
  password: 'testAccount01',
  verified: false,
  created: Date.now(),
  updated: Date.now(),
};

const firstStepRegistrationAccount: object = {
  email: 'jk.firststep@test.com',
  dsgvo: true,
  termsofservice: true,
  created: Date.now(),
  updated: Date.now(),
};

const firstStepRegistrationUser: object = {
  email: 'jk.firststep@test.com',
  password: 'testAccount01',
  verified: false,
  created: Date.now(),
  updated: Date.now(),
};

function findAccount(account: any): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    AccountModel.findOne({ email: account.email }, (err, docs: any) => {
      if (err) {
        logger.error(`createAccount findOne: ${JSON.stringify(err)}`);
        return resolve(null);
      }
      logger.info(`findAccount ${docs?.email}`);
      return resolve(docs);
    });
  });
}

function createAccount(account: any): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    AccountModel.create(account, (error: any, document: any) => {
      if (error) {
        logger.error(`createAccount: ${JSON.stringify(error)}`);
        return resolve(null);
      }
      logger.info(`createAccount ${document}`);
      return resolve(document);
    });
  });
}

function encryptPassword(pw: string): string {
  try {
    const hash = bcrypt.hashSync(pw, 8);
    return hash;
  } catch (error) {
    logger.error(`encryptPassword: ${JSON.stringify(error)}`);
    throw new Error(error);
  }
}

function createUser(user: any): Promise<any> {
  // eslint-disable-next-line consistent-return
  return new Promise((resolve: any, reject: any) => {
    try {
      const userToSave = user;
      userToSave.password = encryptPassword(user.password);
      UserModel.create(userToSave, (error: any, document: any) => {
        if (error) {
          logger.error(`createUser: ${JSON.stringify(error)}`);
          return resolve(null);
        }
        logger.info(`createUser ${document}`);
        return resolve(document);
      });
    } catch (error) {
      logger.error(`createUser: ${JSON.stringify(error)}`);
      return resolve(null);
    }
  });
}

async function updateAccount(account: any): Promise<any> {
  try {
    await AccountModel.updateOne({ email: account.email }, { user: account.user });
  } catch (error) {
    logger.error(`updateAccount: ${JSON.stringify(error)}`);
  }
}


async function initializeAccount(account: any, user: any): Promise<any> {
  let docs = await findAccount(account);
  if (!docs) {
    const newUser = user;
    docs = await createAccount(account);
    newUser.account = docs.id;
    const savedUser = await createUser(newUser);
    if (savedUser) {
      docs.user.push(savedUser.id);
      updateAccount(docs);
    }
  }
}

function initializeData() {
  initializeAccount(firstStepRegistrationAccount, firstStepRegistrationUser);
  initializeAccount(enterpriseAccount, enterpriseUser);
  initializeAccount(privateAccount, privateUser);
}

export default initializeData;
