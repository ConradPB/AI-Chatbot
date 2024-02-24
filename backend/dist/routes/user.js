import { Router } from 'express';
import { getAllUsers, userLogin, userLogout, userSignup, verifyUser } from '../controllers/user.js';
import { loginValidator, signupValidator, validate } from '../utils/validators.js';
import { verifyToken } from '../utils/token.js';
const userRoute = Router();
userRoute.get('/', getAllUsers);
userRoute.post('/signup', validate(signupValidator), userSignup);
userRoute.post('/login', validate(loginValidator), userLogin);
userRoute.get('/auth-status', verifyToken, verifyUser);
userRoute.get('/logout', verifyToken, userLogout);
export default userRoute;
//# sourceMappingURL=user.js.map