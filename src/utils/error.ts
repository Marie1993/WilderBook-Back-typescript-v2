/* eslint-disable no-console */
import { Request, Response } from 'express';

export interface Error {
  status: any;
  message: string;
  // stack: string;
}

const errorHandler = (error: Error, req: Request, res: Response) => {
  console.info({
    status: error.status || 500,
    message: error.message,
    // stack: error.stack,
  });
  res.status(error.status || 500).send({
    status: error.status || 500,
    message: error.message,
    // stack: error.stack,
  });
};

export default errorHandler;
