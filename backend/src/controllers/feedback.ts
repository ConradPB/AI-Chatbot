import { NextFunction, Request, Response } from "express";
import feedback from "../models/feedback.js";


export const submitFeedback = async (
    req: Request,
    res: Response,
    next: NextFunction
    ) => {
        try {
            const { name, email, content, rating } = req.body;
            const allFeedback = new feedback({ 
                name, 
                email, 
                content, 
                rating 
            });

            await allFeedback.save()
            res.status(201).json({ message: 'Feedback submitted successfully', feedback: allFeedback });
        } catch (error) {
            res.status(500).json({ message: 'Error submitting feedback', error: error.message });

        }

     }
