import mongoose, { Schema } from 'mongoose';
const FeedbackSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    messageId: { type: Schema.Types.ObjectId, ref: 'Message', required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: false },
});
export default mongoose.model('Feedback', FeedbackSchema);
//# sourceMappingURL=feedback.js.map