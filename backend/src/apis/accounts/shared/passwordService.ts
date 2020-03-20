/* eslint-disable import/extensions */
import bcrypt from 'bcryptjs';

import getLogger from '../../../utils/logger/logger';

const logger = getLogger('accountService');

function encryptPassword(pw: string): string {
  try {
    const hash = bcrypt.hashSync(pw, 8);
    return hash;
  } catch (error) {
    logger.error(`encryptPassword: ${JSON.stringify(error)}`);
    throw new Error(error);
  }
}

function comparePassword(pw: string, pwDb: string): boolean {
  try {
    const valid = bcrypt.compareSync(pw, pwDb);
    return valid;
  } catch (error) {
    logger.error(`comparePassword: ${JSON.stringify(error)}`);
    throw new Error(error);
  }
}

export {
  encryptPassword,
  comparePassword,
};
