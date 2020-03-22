/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import { EMAIL_SERVER_PW, EMAIL_SERVER_ADDRESS, ENVIRONMENT } from '../env/env';

let registrationUrl;

if (ENVIRONMENT === 'local') {
  registrationUrl = 'http://localhost:4200/register/confirm?regtoken=';
}

if (ENVIRONMENT === 'dev') {
  registrationUrl = 'https://qschool-dev.eu-gb.mybluemix.net/register/confirm?regtoken=';
}

if (ENVIRONMENT === 'stage') {
  registrationUrl = 'http://localhost:4200/register/confirm?regtoken=';
}

if (ENVIRONMENT === 'prod') {
  registrationUrl = 'http://localhost:4200/register/confirm?regtoken=';
}

const config = {
  emailServerPw: EMAIL_SERVER_PW,
  emailServerAddress: EMAIL_SERVER_ADDRESS,
  registrationUrl,
};

export default config;
