import feedback from "../models/feedback.js";
export const submitFeedback = async (req, res, next) => {
    try {
        const { userId, content, rating } = req.body;
        const newFeedback = await feedback.create({ userId, content, rating });
        res.status(201).json({ message: 'Feedback submitted successfully', feedback: newFeedback });
    }
    catch (error) {
        res.status(500).json({ message: 'Error submitting feedback', error: error.message });
    }
};
//# sourceMappingURL=feedback.js.map