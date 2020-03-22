/* eslint-disable import/extensions */
/**
 * © Copyright Jan Klädtke 2019 All Rights Reserved
 */
import mongoose from 'mongoose';
// Types
import { Errback } from 'express';

import app from './server';
import { PORT, DATABASE_URL } from './utils/env/env';
import config from './utils/config/mongodb';
import getLogger from './utils/logger/logger';

const logger = getLogger('index');

app.listen(PORT!, (error: Errback) => {
  if (error) {
    logger.error(`App failed to start on Port ${PORT}`);
    logger.error(JSON.stringify(error));
  } else {
    logger.info(`App started on Port ${PORT}`);
  }
});

mongoose.connect(DATABASE_URL!, config, (error: any) => {
  if (error) {
    logger.error(`Error while connecting to Database: ${JSON.stringify(error)}`);
  } else {
    logger.info('Connected to Database');
  }
});
