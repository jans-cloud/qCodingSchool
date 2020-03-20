/* eslint-disable import/extensions */

import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';

// Types
import { Application } from 'express';

import logRequest from './requestLogger';
import config from '../utils/config/appMiddleware';

function setAppMiddleware(app: Application): void {
  app.use(cors());
  app.use(helmet());
  app.use(bodyParser.urlencoded(config.bodyparserUrlConf));
  app.use(bodyParser.json());
  app.use(logRequest);
}

export default setAppMiddleware;
