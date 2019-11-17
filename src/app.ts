import 'tsconfig-paths/register';

import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';

import { env } from '@app/config/environment';

import { errorMiddleware, httpLogger, expressStatusMonitor } from '@app/middleware';

import express from 'express';
import { createServer } from 'http';
import { initRoutes } from './routes';
import { initApolloGraphqlServer } from './graphql';

const app = express();

const startApp = async () => {
  app.use(expressStatusMonitor());
  app.use(httpLogger);
  app.use(express.json());
  app.use(helmet());
  app.use(cors());
  app.use(compression());

  initRoutes(app);

  app.use(errorMiddleware());
  const apolloServer = initApolloGraphqlServer(app);

  // Redirect all GET requests to /graphql
  app.get('*', (req, res) => {
    res.redirect('/graphql');
  });

  // For the subscription server
  const httpServer = createServer(app);
  apolloServer.installSubscriptionHandlers(httpServer);

  httpServer.listen(env.port, () => {
    console.info(`Server is now up @ ${env.port}`);
  });
};
startApp();
