import jwt from 'jsonwebtoken';
import { COOKIE_NAME } from './constants.js';
export const createToken = (id, email, expiresIn) => {
    const payLoad = { id, email };
    const token = jwt.sign(payLoad, process.env.JWT_SECRET, {
        expiresIn,
    });
    return token;
};
export const verifyToken = async (req, res, next) => {
    const token = req.signedCookies[`${COOKIE_NAME}`];
    if (!token || token.trim() === '') {
        return res.status(401).json({ message: 'Token Not Received' });
    }
    return new Promise((resolve, reject) => {
        return jwt.verify(token, process.env.JWT_SECRET, (err, success) => {
            if (err) {
                reject(err.message);
                return res.status(401).json({ message: 'Token Expired' });
            }
            else {
                console.log('Token verification successful');
                resolve();
                res.locals.jwtData = success;
                return next();
            }
        });
    });
};
//# sourceMappingURL=token.js.map