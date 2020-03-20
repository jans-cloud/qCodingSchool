import dotenv from 'dotenv';

dotenv.config();

const DATABASE_URL: string = (process.env.DATABASE_URL as string);
const PASSPORT_SESSION_SECRET: string = (process.env.PASSPORT_SESSION_SECRET as string);
const PORT: string = (process.env.PORT as string);
const ENVIRONMENT: string = (process.env.ENVIRONMENT as string);
const EMAIL_SERVER_PW: string = (process.env.EMAIL_SERVER_PW as string);
const EMAIL_SERVER_ADDRESS: string = (process.env.EMAIL_SERVER_ADDRESS as string);

export {
  PORT,
  DATABASE_URL,
  PASSPORT_SESSION_SECRET,
  ENVIRONMENT,
  EMAIL_SERVER_PW,
  EMAIL_SERVER_ADDRESS,
};
