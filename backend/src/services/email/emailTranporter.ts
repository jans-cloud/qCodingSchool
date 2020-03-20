/* eslint-disable import/extensions */
import nodemailer from 'nodemailer';

import config from '../../utils/config/email';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.emailServerAddress,
    pass: config.emailServerPw,
  },
});

export default transporter;
