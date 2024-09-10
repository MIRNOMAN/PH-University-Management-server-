/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import config from '../app/config';
import { handleZodError } from '../app/errors/handleZodError';
import { handleValidationError } from '../app/errors/handleValidationError';
import { TErrorSources } from '../app/interface/error';
import { handleCastError } from '../app/errors/handleCastError';
import { handleDuplicateError } from '../app/errors/handleDuplicateError';
import { AppError } from '../app/errors/appError';

export const globalErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  next,
) => {
  let statusCode = 500;
  let message = 'Something went wrong';

  let errorSources: TErrorSources = [
    {
      path: '',
      message: 'Something went wrong',
    },
  ];

  if (err instanceof ZodError) {
    const simplyfiedError = handleZodError(err);

    statusCode = simplyfiedError?.statusCode;
    message = simplyfiedError?.message;
    errorSources = simplyfiedError?.errorSources;
  } else if (err?.name === 'ValidationError') {
    const simplyfiedError = handleValidationError(err);

    statusCode = simplyfiedError?.statusCode;
    message = simplyfiedError?.message;
    errorSources = simplyfiedError?.errorSources;
  } else if (err?.name === 'CastError') {
    const simplyfiedError = handleCastError(err);

    statusCode = simplyfiedError?.statusCode;
    message = simplyfiedError?.message;
    errorSources = simplyfiedError?.errorSources;
  } else if (err?.code === 11000) {
    const simplyfiedError = handleDuplicateError(err);

    statusCode = simplyfiedError?.statusCode;
    message = simplyfiedError?.message;
    errorSources = simplyfiedError?.errorSources;
  } else if (err instanceof AppError) {
    statusCode = err?.statusCode;
    message = err?.message;
    errorSources = [
      {
        path: '',
        message: err?.message,
      },
    ];
  } else if (err instanceof Error) {
    message = err?.message;
    errorSources = [
      {
        path: '',
        message: err?.message,
      },
    ];
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    error: err,
    stack: config.NODE_ENV === 'development' ? err?.stack : null,
  });
};
