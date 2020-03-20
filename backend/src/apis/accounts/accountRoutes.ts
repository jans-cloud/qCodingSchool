/* eslint-disable import/extensions */
import { Router } from 'express';

import registrationRoutes from './registration/registrationRouter';

const router = Router();

router.use('/register', registrationRoutes);

export default router;
