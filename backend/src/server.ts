/* eslint-disable import/extensions */
/**
 * © Copyright Jan Klädtke 2019 All Rights Reserved
 */
import express from 'express';

import setAppMiddleware from './middleware/appMiddleware';
import errorMiddleware from './middleware/errorMiddleware';
import router from './apis/router';

const app: express.Application = express();

setAppMiddleware(app);

app.use(router);

errorMiddleware(app);

export default app;
