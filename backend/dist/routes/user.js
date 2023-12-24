import { Router } from 'express';
import { getAllUsers, userSignup } from '../controllers/user.js';
import { signupValidator, validate } from '../config/validators.js';
const userRoute = Router();
userRoute.get('/', getAllUsers);
userRoute.post('/signup', validate(signupValidator), userSignup);
export default userRoute;
//# sourceMappingURL=user.js.map