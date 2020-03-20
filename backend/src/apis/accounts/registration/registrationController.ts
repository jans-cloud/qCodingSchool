/* eslint-disable import/named */
/* eslint-disable import/extensions */
import { Request, Response } from 'express';
import UserModel from '../models/user/userModel';
import EmailVerificationModel from '../models/registration/emailverificationModel';

import {
  confirmUserEmail,
  createTempAccount,
} from './registrationServices';
import getLogger from '../../../utils/logger/logger';

const logger = getLogger('loggingMiddleware');


async function checkEmailExists(req: Request, res: Response) {
  try {
    const email = req.body?.email.toLowerCase();
    const emailAlreadyExists = await UserModel.exists({ email });
    const alreadyVerified = await EmailVerificationModel.exists({ email });
    if (emailAlreadyExists || alreadyVerified) {
      return res.status(200).json({ emailExists: true });
    }
    return res.status(200).json({ emailExists: false });
  } catch (error) {
    logger.error('checkEmailExists Error:', JSON.stringify(error));
    return res.sendStatus(500);
  }
}

async function createNewAccount(req: Request, res: Response) {
  try {
    const { email, password, dsgvo } = req.body;
    const tempAccCreated = await createTempAccount(email, password, dsgvo);
    if (tempAccCreated) {
      return res.status(200).json({ accountCreated: true });
    }
    return res.status(200).json({ accountCreated: false });
  } catch (error) {
    logger.error('createNewAccount Error:', JSON.stringify(error));
    return res.sendStatus(500);
  }
}

async function confirmEmail(req: Request, res: Response) {
  try {
    const { regtoken } = req.body;
    const accCreated = await confirmUserEmail(regtoken);
    return res.status(200).json();
  } catch (error) {
    logger.error('confirmEmail Error:', JSON.stringify(error));
    return res.sendStatus(500);
  }
}

export = {
  checkEmailExists,
  createNewAccount,
  confirmEmail,
};
