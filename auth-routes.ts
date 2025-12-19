import express, { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const router = Router();

interface AuthRequest extends Request {
  body: {
    password: string;
  };
}

router.post('/verify-password', async (req: AuthRequest, res: Response) => {
  try {
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({ error: 'Password required' });
    }

    const isValid = password.toLowerCase() === 'shreya';

    if (isValid) {
      const token = jwt.sign(
        { verified: true, timestamp: new Date() },
        process.env.JWT_SECRET || 'your-secret-key',
        { expiresIn: '24h' }
      );

      return res.json({
        success: true,
        message: 'Access granted! 🎉',
        token,
      });
    }

    res.status(401).json({
      success: false,
      message: 'Invalid password',
    });
  } catch (error) {
    console.error('Auth error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
