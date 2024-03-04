import express from 'express';
import { createFeedback, getFeedback } from '../controllers/feedback.js';
const router = express.Router();
router.post('/feedback', createFeedback);
router.get('/feedback', getFeedback);
export default router;
//# sourceMappingURL=feedback.js.map