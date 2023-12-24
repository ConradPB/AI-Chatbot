import { Jwt } from 'jsonwebtoken'

export const createToken = (id: string, email: string, expiresIn) => {
    const payLoad = { id, email }
    const token = jwt.sign(payLoad, s)
}