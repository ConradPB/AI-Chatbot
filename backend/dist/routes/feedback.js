import { Router } from "express";
import { verifyToken } from "../utils/token.js";
import { submitFeedback } from "../controllers/feedback.js";
const feedbackRoute = Router();
feedbackRoute.post('/', verifyToken, submitFeedback);
export default feedbackRoute;
//# sourceMappingURL=feedback.js.map