/* eslint-disable import/extensions */
import { Router } from 'express';

import accountRoutes from './accounts/accountRoutes';

const router = Router();

router.use('/account', accountRoutes);

export default router;
