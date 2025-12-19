import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error('❌ Error:', error.message);

  // Default error response
  res.status(500).json({
    success: false,
    error: error.message || 'Internal server error',
  });
};
