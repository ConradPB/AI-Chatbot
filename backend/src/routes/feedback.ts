import { Router } from 'express';
import { verifyToken } from '../utils/token.js';
import { createFeedback, deleteFeedback, getFeedback } from '../controllers/feedback.js';

const feedbackRoute = Router();

feedbackRoute.post('/', verifyToken, createFeedback);
feedbackRoute.get('/', verifyToken, getFeedback);
feedbackRoute.delete('/:feedbackId', verifyToken, deleteFeedback);

export default feedbackRoute;

