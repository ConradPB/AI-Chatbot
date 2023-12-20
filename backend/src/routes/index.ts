import { Router } from 'express'
import userRoute from './user.js'
import chatRoute from './chats.js'

const appRouter = Router()

appRouter.use('/user', userRoute) //domain/api/v1/user
appRouter.use('/chats', chatRoute) //domain/api/v1/chats


export default appRouter