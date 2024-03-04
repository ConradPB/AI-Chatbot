// src/components/FeedbackForm.tsx

import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
    const [content, setContent] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post('/api/v1/feedback', { content });
            setContent('');
            alert('Feedback submitted successfully');
        } catch (error) {
            console.error('Failed to submit feedback', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />
            <button type="submit">Submit Feedback</button>
        </form>
    );
};

export default FeedbackForm;
