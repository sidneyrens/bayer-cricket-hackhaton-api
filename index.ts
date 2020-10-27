import serverless from 'serverless-http';
import app from './src/app';

export const handler = async (event, context) => {
  return await serverless(app)(event, context);
};
