import { Router } from 'express'
import { getAllUsers } from '../controllers/user.js'

const userRoute = Router()

userRoute.get('/', getAllUsers)

export default userRoute 