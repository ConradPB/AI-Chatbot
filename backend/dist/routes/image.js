import { Router } from 'express';
import { generateImage } from '../controllers/image.js';
import { verifyToken } from '../utils/token.js';
const imageRoute = Router();
imageRoute.post('/generate', verifyToken, generateImage);
export default imageRoute;
//# sourceMappingURL=image.js.map