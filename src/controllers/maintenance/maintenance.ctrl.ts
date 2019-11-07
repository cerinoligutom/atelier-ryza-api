import { RequestHandler } from 'express';

const healthCheck: RequestHandler = async (req, res) => {
  const now = new Date();
  res.send({
    status: 'OK',
    serverTime: {
      utcTime: now.toUTCString(),
      localTime: now.toString(),
      ms: now.getTime(),
      iso: now.toISOString(),
    },
  });
};

export const maintenanceController = {
  healthCheck,
};
