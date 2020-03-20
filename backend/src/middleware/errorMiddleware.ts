/**
 * @module ErrorMiddleware
 */
// Types
import {
  Application, Request, Response, NextFunction, Errback,
} from 'express';

const logger = require('../utils/logger/logger');

function handleNotFound(req: Request, res: Response, next: NextFunction) {
  res.sendStatus(404);
  logger.info('404 Not Found', req.url);
  return next();
}

function handleError(error: Errback, req: Request, res: Response, next: NextFunction) {
  if (error) {
    console.log('Middleware Error', error);
    return res.sendStatus(500);
  }
  return next();
}

function errorMiddleware(app: Application) {
  app.use(handleNotFound);
  app.use(handleError);
}

export default errorMiddleware;
