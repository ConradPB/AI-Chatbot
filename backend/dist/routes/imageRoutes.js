import express from 'express';
import { generateImageController } from '../controllers/image-controller.js';
const imageRouter = express.Router();
imageRouter.post('/generate', generateImageController);
export default imageRouter;
//# sourceMappingURL=imageRoutes.js.map