/** Import packages */
import express, { Application } from 'express';

/** Import other files */
import checkEnvironment from './checkEnvironment';

/** Check environment variables */
const processEnv = checkEnvironment();

/** Define variables */
const HTTP_PORT: number = processEnv.HTTP_PORT;

/** Configure API and start application */
const app: Application = express();

app.listen(HTTP_PORT, (): void => {
  console.log(`Server listening on port ${HTTP_PORT}.`);
})