// Assuming you're using TypeScript based on the context provided.
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Box, Card, CardContent, Grid } from '@mui/material';

// Define the structure of a feedback item
interface FeedbackItem {
  _id: string;
  content: string;
  // Add other properties as needed, based on your backend's response structure
}

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState('');
  const [feedbackList, setFeedbackList] = useState<FeedbackItem[]>([]); // Initialize as an array

  useEffect(() => {
    fetchFeedback();
  }, [feedbackList]);

  const fetchFeedback = async () => {
    try {
      const response = await axios.get('http://localhost:7000/api/v1/feedback'); // Adjust this URL to match your actual API endpoint
      setFeedbackList(response.data); // Make sure the backend sends an array of feedback items
    } catch (err) {
      console.error('Error fetching feedback', err);
    }
  };

  const handleSubmitFeedback = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:7000/api/v1/feedback', { content: feedback }); // Adjust this URL as well
      setFeedback('');
      fetchFeedback(); // Refresh the feedback list after submission
    } catch (err) {
      console.error('Error submitting feedback', err);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        User Feedback
      </Typography>
      <form onSubmit={handleSubmitFeedback}>
        <TextField
          label="Your Feedback"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          margin="normal"
          sx={{ '& .MuiInputBase-root': { backgroundColor: 'white', color: 'black' } }}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>

      <Box sx={{ my: 4 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          Feedback Entries
        </Typography>
        <Grid container spacing={2}>
          {Array.isArray(feedbackList) && feedbackList.map((item) => (
            <Grid item xs={12} key={item._id}>
              <Card variant="outlined" sx={{ backgroundColor: 'white', color: 'black', mb: 2 }}>
                <CardContent>
                  <Typography color='white'>{item.content}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default FeedbackPage;

