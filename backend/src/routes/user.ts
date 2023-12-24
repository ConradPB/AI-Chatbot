import { Router } from 'express'
import { getAllUsers, userSignup } from '../controllers/user.js'
import { signupValidator, validate } from '../utils/validators.js'


const userRoute = Router()

userRoute.get('/', getAllUsers)
userRoute.post('/signup', validate(signupValidator), userSignup)
userRoute.post('/login', validate(signupValidator), )

export default userRoute