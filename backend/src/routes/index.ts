import { Router } from 'express'
import chatRoute from './chats.js'
import userRoute from './user.js'
import feedbackRoute from './feedback.js'

const appRouter = Router()

appRouter.use('/user', userRoute) //domain/api/v1/user
appRouter.use('/chat', chatRoute) //domain/api/v1/chat
appRouter.use('/feedback', feedbackRoute) //domain/api/v1/feedback

export default appRouter