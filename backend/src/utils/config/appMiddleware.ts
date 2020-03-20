
// eslint-disable-next-line import/extensions
import { PASSPORT_SESSION_SECRET } from '../env/env';

const config = {
  sessionConf: {
    secret: PASSPORT_SESSION_SECRET!,
    resave: true,
    saveUninitialized: true,
  },
  bodyparserUrlConf: { extended: false },
};

export default config;
