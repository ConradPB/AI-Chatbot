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
            await axios.post('api/v1/feedback', {
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
        <Box component='form' onSubmit={handleSubmit}>
            <Typography variant='h6'>Submit your feedback</Typography>
            <TextField 
            label='Feedback' 
            multiline 
            rows={4} 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            fullWidth 
            required
            />
            <TextField 
            label='Rating' 
            type='number' 
            inputProps={{ inputProps: { min: 1, max: 5 } }} 
            value={rating} 
            onChange={(e) => setRating(parseInt(e.target.value))}
            fullWidth
            required
            />
            <Button type='submit' variant='contained' sx={{ mt: 2 }} >
                Submit
            </Button>
        </Box>
    )


}

export default FeedbackForm