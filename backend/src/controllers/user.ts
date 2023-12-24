
import { NextFunction, Request, Response } from 'express'
import user from '../models/user.js'
import { compare, hash } from 'bcrypt'

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

        return res.status(201).json({ message:'OK', id: User._id.toString() });
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
        
        return res.status(200).json({ message:'OK', id: User._id.toString() });
    } catch (error) {
        console.log(error);
        return res.status(200).json({ message:'ERROR', cause: error.message })
    }
}