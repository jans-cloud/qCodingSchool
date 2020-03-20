import { Router } from 'express';

const router = Router();

const { checkEmailExists, createNewAccount, confirmEmail } = require('./registrationController');

router.route('/checkemail')
  .post(checkEmailExists);

router.route('/newaccount')
  .post(createNewAccount);

router.route('/confirmemail')
  .post(confirmEmail);

export default router;
