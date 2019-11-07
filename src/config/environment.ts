import { config as configDotEnv } from 'dotenv';
configDotEnv();

interface IEnvironmentConfig {
  [key: string]: {
    environment: string;
    port: number;
    isProduction: boolean;
  };
}

enum EnvironmentOptions {
  PRODUCTION = 'PRODUCTION',
  LOCAL = 'LOCAL',
}

const isProduction = process.env.NODE_ENV === 'production';
const DEFAULT_APP_PORT = 8080;

const ENVIRONMENT_CONFIG: IEnvironmentConfig = {
  [EnvironmentOptions.PRODUCTION]: {
    isProduction,
    environment: EnvironmentOptions.PRODUCTION,
    port: +process.env.PROD_APP_PORT! || DEFAULT_APP_PORT,
  },

  [EnvironmentOptions.LOCAL]: {
    isProduction: false,
    environment: EnvironmentOptions.LOCAL,
    port: +process.env.LOCAL_APP_PORT! || DEFAULT_APP_PORT,
  },
};

const currentEnvironment = (process.env.CURRENT_ENVIRONMENT || EnvironmentOptions.LOCAL).toLocaleUpperCase();

const VALID_ENVIRONMENTS = Object.values<string>(EnvironmentOptions);
if (!VALID_ENVIRONMENTS.includes(currentEnvironment)) {
  const formattedValidOptions = VALID_ENVIRONMENTS.map((x, i) => `${i + 1}) ${x}`).join('\n');
  console.error(`"${currentEnvironment}" is not a valid environment option. Valid environments are:\n${formattedValidOptions}`);
  throw new Error('Invalid environment.');
}

export const env = ENVIRONMENT_CONFIG[currentEnvironment];

console.info(`${'='.repeat(40)}`);
console.info(`Current Environment: ${env.environment}`);
console.info(`${'='.repeat(40)}`);
