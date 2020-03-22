/* eslint-disable import/named */
/* eslint-disable import/extensions */

import { Request, Response } from 'express';

import AccountModel from '../models/account/accountModel';
import EmailVerificationModel from '../models/registration/emailverificationModel';

import {
  confirmAccountEmail,
  createTempAccount,
  validateInput,
} from './registrationServices';
import getLogger from '../../../utils/logger/logger';

const logger = getLogger('loggingMiddleware');


async function checkEmailExists(req: Request, res: Response) {
  try {
    const email = req.body?.email.toLowerCase();
    const emailAlreadyExists = await AccountModel.exists({ email });
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
    const {
      learner, teacher, enterprise, email, name, dsgvo, skills, industry,
    } = req.body;
    const dbEmail = email.toLowerCase();
    const validInput = validateInput(dbEmail, learner, teacher, enterprise, name, skills, industry);
    if (!validInput) {
      return res.status(400).json({ accountCreated: false });
    }
    const tempAccCreated = await createTempAccount(
      dbEmail, name, dsgvo, learner, teacher, enterprise, industry, skills,
    );
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
    const accCreated = await confirmAccountEmail(regtoken);
    if (accCreated) {
      return res.status(200).json({ created: true });
    }
    return res.status(200).json({ created: false });
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
