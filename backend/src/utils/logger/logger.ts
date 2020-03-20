/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/extensions */
import { createLogger, transports, format } from 'winston';
import { ENVIRONMENT } from '../env/env';

const myFormat = format.printf(({
  level, message, label, timestamp,
}) => `${timestamp} ${level}: ${message}`);

let logger: any;

function getLogger(filename: string) {
  if (!logger) {
    logger = createLogger({
      format: format.combine(
        format.label({ label: filename, message: true }),
        format.timestamp(),
        myFormat,
      ),
      transports: [
        new transports.Console({
          level: ENVIRONMENT === 'prod' ? 'info' : 'debug',
          handleExceptions: true,
        }),
      ],
    });
  }
  return logger;
}

export default getLogger;
