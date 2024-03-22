import { NextFunction, Request, Response } from "express";
import user from "../models/user.js";
import { ChatCompletionRequestMessage } from "openai";
import { configureAi } from "../config/ai-config.js";

export const generateChatCompletion = async (
    req: Request,
    res: Response,
    next: NextFunction
    ) => { 
        const { message } = req.body
        try {
            const User = await user.findById(res.locals.jwtData.id)
        if (!User) return res
        .status(401)
        .json({ message: 'User not registered or token malfuncation' })

 // grab chats of user

   const chats = User.chats.map(({
    role, content
}) => ({ 
    role, 
    content })) as ChatCompletionRequestMessage[];
    chats.push({
        content: message, 
        role: 'user' })
        User.chats.push({ 
            content: message, 
            role: 'user',
})

   // send all chats with new one to API

   const config = configureAi()

    // get latest response

    const chatResponse = await config.createChatCompletion({
        model: 'gpt-3.5-turbo', 
        messages: chats, 
    })
    User.chats.push(chatResponse.data.choices[0].message)
    await User.save()
    return res.status(200).json({ chats: User.chats })

        } catch (error) {
            console.error("Error when calling OpenAI API or processing chat:", error);
            // If the error is an instance of Error, log and return its message. Otherwise, log a general error.
            const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
            console.error(errorMessage);

            return res.status(500).json({ message: 'Something went wrong' })
        }
        
   
    } 


export const sendChatsToUser = async (
    req: Request, 
    res: Response,
    next: NextFunction
    ) => {
        try {
            //Token check
            const User = await user.findById(res.locals.jwtData.id)
            if(!User) {
                return res.status(401).send('User not registered or token malfuncation')
            }
            if(User._id.toString() !== res.locals.jwtData.id) {
                res.status(401).send('Permissions didnt match')
    
            }
            return res
            .status(200)
            .json({ message:'OK', chats: User.chats });
        } catch (error) {
            console.log(error);
            return res.status(200).json({ message:'ERROR', cause: error.message })
        }
    }


export const deleteChats = async (
    req: Request, 
    res: Response,
    next: NextFunction
    ) => {
        try {
            //Token check
            const User = await user.findById(res.locals.jwtData.id)
            
            if(!User) {
                    return res.status(401).send('User not registered or token malfuncation')
                }
                if(User._id.toString() !== res.locals.jwtData.id) {
                    res.status(401).send('Permissions didnt match')
        
                }
                //@ts-ignore
                user.chats = []
                await User.save()

                return res
                .status(200)
                .json({ message:'OK'});
            } catch (error) {
                console.log(error);
                return res.status(200).json({ message:'ERROR', cause: error.message })
            }
        }


