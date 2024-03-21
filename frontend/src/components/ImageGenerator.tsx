import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { toast } from 'react-hot-toast';

const ImageGenerator = () => {
  const [description, setDescription] = useState('');
  const [generatedImageUrl, setGeneratedImageUrl] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!description) {
      toast.error('Please enter a description.');
      return;
    }

    try {
      const response = await fetch('http://localhost:7000/api/v1/image/generate', {
        method: 'POST',
        credentials: 'include', // to send cookies with the request
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description }),
      });

      const data = await response.json();

      if (response.ok) {
        setGeneratedImageUrl(data.imageUrl);
        toast.success('Image generated successfully!');
      } else {
        throw new Error(data.message || 'Failed to generate image');
      }
    } catch (error) {
      const errorMessage = (error instanceof Error) ? error.message : 'An unknown error occurred';
      console.error(errorMessage);
      toast.error(errorMessage);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Typography variant="h6">Generate an Image</Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        id="description"
        label="Image Description"
        name="description"
        autoFocus
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Generate
      </Button>
      {generatedImageUrl && (
        <Box mt={2} sx={{ textAlign: 'center' }}>
          <img src={generatedImageUrl} alt="Generated" style={{ maxWidth: '100%', maxHeight: '400px' }} />
        </Box>
      )}
    </Box>
  );
};

export default ImageGenerator;
