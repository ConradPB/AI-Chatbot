import { Router } from 'express';
import { verifyToken } from '../utils/token.js';
import { chatcompletionValidator, validate } from '../utils/validators.js';
import { generateChatCompletion } from '../controllers/chat.js';

const chatRoute = Router();
chatRoute.post(
    '/new', 
    validate(chatcompletionValidator), 
    verifyToken, 
    generateChatCompletion
)
export default chatRoute;