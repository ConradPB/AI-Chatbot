import feedback from '../models/feedback.js';
export const createFeedback = async (req, res) => {
    try {
        const { content } = req.body;
        const userId = res.locals.jwtData.id; // Assuming you're storing user id in JWT
        const Feedback = await feedback.create({ userId, content });
        res.status(201).json(feedback);
    }
    catch (error) {
        res.status(400).json({ message: 'Could not create feedback', error: error.message });
    }
};
export const getFeedback = async (req, res) => {
    try {
        const Feedback = await feedback.find().populate('userId', 'name email');
        res.status(200).json(feedback);
    }
    catch (error) {
        res.status(400).json({ message: 'Could not fetch feedback', error: error.message });
    }
};
export const deleteFeedback = async (req, res) => {
    try {
        const { feedbackId } = req.params;
        await feedback.findByIdAndDelete(feedbackId);
        res.status(200).json({ message: 'Feedback deleted' });
    }
    catch (error) {
        res.status(400).json({ message: 'Could not delete feedback', error: error.message });
    }
};
//# sourceMappingURL=feedback.js.map