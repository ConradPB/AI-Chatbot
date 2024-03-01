import { useState } from "react"
import { useAuth } from "../context/Authcontext"
import axios from "axios"
import toast from "react-hot-toast"
import { Box, Button, TextField, Typography } from "@mui/material"


const FeedbackForm = () => {
    const [content, setContent] = useState('')
    const [rating, setRating] = useState(5)
    
    const auth = useAuth()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!auth || !auth.user) {
            toast.error('You must be logged in to submit feedback')
            return
        }

        try {
            await axios.post('/feedback', {
                name: auth.user.name,
                email: auth.user.email,
                content,
                rating,
            })
                toast.success('Feedback submitted successfully.')
                setContent('')
                setRating(5)

            
        } catch (error) {
            toast.error('Error submitting feedback')
        }
    }

    return (
        <Box 
          component="form" 
          onSubmit={handleSubmit} 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
          }}
        >
            <Typography variant="h6" sx={{ mb: 2 }}>Submit Feedback</Typography>
            <Box sx={{ 
              width: { xs: '100%', sm: '80%', md: '60%', lg: '40%' }, // Responsive width
              display: 'flex', 
              flexDirection: 'column', 
              gap: 2, // Creates consistent space between elements
            }}>
              <TextField
                  label="Feedback Content"
                  multiline
                  rows={4}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  fullWidth
                  required
                  InputProps={{
                      style: {
                          backgroundColor: 'white',
                          borderRadius: '4px',
                      },
                  }}
                  InputLabelProps={{
                      style: { color: '#000' },
                  }}
                  variant="outlined" // Added for a more defined look
              />
              <TextField
                  label="Rating (1-5)"
                  type="number"
                  value={rating}
                  onChange={(e) => setRating(parseInt(e.target.value))}
                  fullWidth
                  required
                  InputProps={{
                      style: {
                          backgroundColor: 'white',
                          borderRadius: '4px',
                      },
                  }}
                  InputLabelProps={{
                      style: { color: '#000' },
                  }}
                  variant="outlined"
                  inputProps={{ min: 1, max: 5 }}
              />
              <Button 
                type="submit" 
                variant="contained" 
                sx={{ 
                  alignSelf: 'center', // Center the button
                  mt: 2, 
                  px: 5 // More horizontal padding for a wider button
                }}
              >
                  Submit
              </Button>
            </Box>
        </Box>
    )


}

export default FeedbackForm