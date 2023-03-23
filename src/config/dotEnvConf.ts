import * as dotenv from 'dotenv';
dotenv.config();

export default {
  SECRET_KEY: process.env.SECRET_KEY ?? '',
  APP_PORT: process.env.APP_PORT ?? '',
  NODE_ENV: process.env.NODE_ENV ?? '',
}