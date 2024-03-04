import feedback from "../models/feedback.js";
export const createFeedback = async (req, res) => {
    try {
        const allfeedback = new feedback(req.body);
        await allfeedback.save();
        res.status(201).json({ message: 'Feedback created successfully' });
    }
    catch (error) {
        res.status(500).json({ error: 'An error occurred while creating feedback' });
    }
};
export const getFeedback = async (req, res) => {
    try {
        const allfeedback = await feedback.find();
        res.status(200).json(feedback);
    }
    catch (error) {
        res.status(500).json({ error: 'An error occurred while getting feedback' });
    }
};
//# sourceMappingURL=feedback.js.map