import { Router } from 'express';
import { verifyToken } from '../utils/token.js';
import { chatcompletionValidator, validate } from '../utils/validators.js';
import { deleteChats, generateChatCompletion, sendChatsToUser } from '../controllers/chat.js';

const chatRoute = Router();
chatRoute.post(
    '/new', 
    validate(chatcompletionValidator), 
    verifyToken, 
    generateChatCompletion
)

chatRoute.get(
    '/all-chats', 
    verifyToken,
    sendChatsToUser

)

chatRoute.delete(
    '/delete', 
    verifyToken,
    deleteChats

)
export default chatRoute;