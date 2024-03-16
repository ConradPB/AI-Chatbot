import { Router } from 'express';
import chatRoute from './chats.js';
import userRoute from './user.js';
import imageRoute from './image.js';
const appRouter = Router();
appRouter.use('/user', userRoute); //domain/api/v1/user
appRouter.use('/chat', chatRoute); //domain/api/v1/chat
appRouter.use('/image', imageRoute);
export default appRouter;
//# sourceMappingURL=index.js.map