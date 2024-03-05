import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button, Card, CardContent, Grid, TextField, Typography, ThemeProvider, createTheme } from '@mui/material';


interface FeedbackItem {
    _id: string;
    name?: string; // Making name optional in case some feedback doesn't include a name
    content: string;
  }

  const theme = createTheme({
    palette: {
      mode: 'light',
      background: {
        default: '#f7f6f3', // A light background for the app
        paper: '#ffffff', // Lighter background for components like Card
      },
      primary: {
        main: '#1976d2', 
      },
      text: {
        primary: '#333333', // Darker text for better readability
        secondary: '#555555', 
      },
    },
});

const FeedbackForm = () => {
    const [content, setContent] = useState('');
    const [feedbackList, setFeedbackList] = useState<FeedbackItem[]>([])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:7000/api/v1/feedback', { content });
            setContent('');
             fetchFeedback();
            alert('Feedback submitted successfully');
        } catch (error) {
            console.error('Failed to submit feedback', error);
        }
    };


const fetchFeedback = async () => {
        try {
          const response = await axios.get('http://localhost:7000/api/v1/feedback');
          setFeedbackList(response.data);
        } catch (error) {
          console.error('Error fetching feedback:', error);
        }
      };
    
      useEffect(() => {
        fetchFeedback();
      }, []);
    
      return (
        <ThemeProvider theme={theme} >
          <Box sx={{ my: 4 }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <TextField
                label="Your Feedback"
                multiline
                rows={4}
                variant="outlined"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                fullWidth
                required
                InputProps={{
                  style: {
                    backgroundColor: 'white', // Light background for the input field
                    color: 'black', // Dark text for better visibility
                  },
                }}
              />
              <Button type="submit" variant="contained" color="primary">
                Submit Feedback
              </Button>
            </form>
            <Typography variant="h5" sx={{ my: 4 }}>
              Feedback Entries
            </Typography>  
            <Grid container spacing={3}>
              {feedbackList.map((feedback, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card raised>
                    <CardContent>
                      <Typography gutterBottom variant="h6">
                        {feedback.name || 'Anonymous'}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {feedback.content}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </ThemeProvider>
      );
    };
    
    export default FeedbackForm;