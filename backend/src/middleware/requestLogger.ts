/* eslint-disable import/extensions */

import { Request, Response, NextFunction } from 'express';
import getLogger from '../utils/logger/logger';

const logger = getLogger('loggingMiddleware');

function logRequest(req: Request, res: Response, next: NextFunction) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const { method } = req;
  const url = req.originalUrl;
  logger.info(`IP: ${ip} | METHOD: ${method} | URL: ${url}`);
  return next();
}

export default logRequest;
