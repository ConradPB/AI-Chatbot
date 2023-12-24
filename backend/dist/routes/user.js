import { Router } from 'express';
import { getAllUsers, userSignup } from '../controllers/user.js';
import { loginValidator, signupValidator, validate } from '../utils/validators.js';
const userRoute = Router();
userRoute.get('/', getAllUsers);
userRoute.post('/signup', validate(signupValidator), userSignup);
userRoute.post('/login', validate(loginValidator));
export default userRoute;
//# sourceMappingURL=user.js.map