import express, { Router, Request, Response } from 'express';

const router = Router();

interface ContactRequest extends Request {
  body: {
    method: string;
  };
}

// Simulate database storage (replace with real DB)
const contactSubmissions: any[] = [];

router.post('/submit', async (req: ContactRequest, res: Response) => {
  try {
    const { method } = req.body;

    if (!method) {
      return res.status(400).json({ error: 'Contact method required' });
    }

    const validMethods = ['call', 'message', 'instagram', 'coffee', 'letter'];
    if (!validMethods.includes(method)) {
      return res.status(400).json({ error: 'Invalid contact method' });
    }

    const submission = {
      id: Date.now(),
      method,
      userAgent: req.get('user-agent'),
      ipAddress: req.ip,
      timestamp: new Date(),
    };

    contactSubmissions.push(submission);

    // TODO: Send email notification
    console.log(`📧 Contact submission: ${method}`);

    res.json({
      success: true,
      message: 'Contact recorded! Waiting to hear from you... ❤️',
      submissionId: submission.id,
    });
  } catch (error) {
    console.error('Contact error:', error);
    res.status(500).json({ error: 'Failed to submit contact' });
  }
});

// Get submissions (admin only)
router.get('/submissions', (req: Request, res: Response) => {
  res.json({ total: contactSubmissions.length, submissions: contactSubmissions });
});

export default router;
