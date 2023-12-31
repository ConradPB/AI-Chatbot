
import { NextFunction, Request, Response } from 'express'
import user from '../models/user.js'
import { compare, hash } from 'bcrypt'
import { createToken } from '../utils/token.js';
import { COOKIE_NAME } from '../utils/constants.js';

export const getAllUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
    ) => {
    try {
        const users = await user.find();

        return res.status(200).json({ message:'OK', users })
    } catch (error) {
        console.log(error)
        return res.status(200).json({ message:'ERROR', cause: error.message })
    }
}

export const userSignup = async (
    req: Request, 
    res: Response, 
    next: NextFunction
    ) => {
    try {
        const { name, email, password } = req.body;
        // find if there was an existing 

        const existingUser = await user.findOne({ email })
        if (existingUser) return res.status(401).send('User already registered');
        const hashedPassword = await hash(password, 10)
        const User = new user({ name, email, password: hashedPassword });
        await User.save()

        // Create token and store cookie

 res.clearCookie(COOKIE_NAME, {
            path: '/', 
            httpOnly: true,
            domain: 'localhost', 
            signed: true,
        })
        
        const token = createToken(User._id.toString(), User.email, '7d')

        //create validation for cookie expiry
        const expires = new Date()
        expires.setDate(expires.getDate() + 7)

        res.cookie(COOKIE_NAME, token, { 
            path: '/', 
            domain: 'localhost', 
            expires,
            signed: true, 
            httpOnly: true,
        })

        return res.status(201).json({ message:'OK', name: User.name, email: User.email });
    } catch (error) {
        console.log(error);
        return res.status(200).json({ message:'ERROR', cause: error.message })
    }
}

export const userLogin = async (
    req: Request, 
    res: Response,
    next: NextFunction
    ) => {
    try {
        const { email, password } = req.body;
        const User = await user.findOne({ email })
        if(!User) {
            return res.status(401).send('User not registered')
        }

        const isPasswordCorrect = await compare(password, User.password);
        if (!isPasswordCorrect) {
            return res.status(403).send('Incorrect Password')
        }

        res.clearCookie(COOKIE_NAME, {
            path: '/', 
            httpOnly: true,
            domain: 'localhost', 
            signed: true,
        })
        
        const token = createToken(User._id.toString(), User.email, '7d')

        //create validation for cookie expiry
        const expires = new Date()
        expires.setDate(expires.getDate() + 7)

        res.cookie(COOKIE_NAME, token, { 
            path: '/', 
            domain: 'localhost', 
            expires,
            signed: true, 
            httpOnly: true,
        })


        return res.status(200).json({ message:'OK', name: User.name, email: User.email });
    } catch (error) {
        console.log(error);
        return res.status(200).json({ message:'ERROR', cause: error.message })
    }
}