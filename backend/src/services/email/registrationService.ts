/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import transporter from './emailTranporter';
import config from '../../utils/config/email';

import getLogger from '../../utils/logger/logger';

const logger = getLogger('registrationService');

const registrationMailOption = {
  from: 'no-reply@sqrmeters.com',
  to: '',
  subject: 'sqrmeter Registration',
  html: '',
};

function sendRegistrationMail(email: string, token: string): Promise<boolean> {
  return new Promise((resolve: any, reject: any) => {
    registrationMailOption.to = email;
    const tokenMail = `${config.registrationUrl}${token}`;
    registrationMailOption.html = `<p>${tokenMail}</p>`;
    transporter.sendMail(registrationMailOption, (error, info) => {
      if (error) {
        logger.error(`sendRegistrationMail Email: ${email} Error: ${JSON.stringify(error)}`);
        return reject(error);
      }
      logger.info(`sendRegistrationMail Registrierung - Email: ${email}, Info: ${JSON.stringify(info)}`);
      return resolve(true);
    });
  });
}

export {
  sendRegistrationMail,
};
