import env from 'env-var';

interface ProcessEnv {
  HTTP_PORT: number
}

/** Check all environment variables */
const checkEnvironment = ():ProcessEnv => {
  return {
    HTTP_PORT: env.get('HTTP_PORT').required().asIntPositive(),
  }
}

export default checkEnvironment;