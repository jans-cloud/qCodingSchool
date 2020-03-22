/* eslint-disable import/extensions */
import nodemailer from 'nodemailer';

import config from '../../utils/config/email';

const transporter = nodemailer.createTransport({
  pool: true,
  host: 'smtpout.europe.secureserver.net',
  port: 465,
  secure: true,
  auth: {
    user: config.emailServerAddress,
    pass: config.emailServerPw,
  },
});

export default transporter;
