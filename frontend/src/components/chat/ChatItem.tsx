import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import { useAuth } from '../../context/Authcontext';

function isImageUrl(url: string) {
    return /\.(jpeg|jpg|gif|png|svg)$/i.test(url.toLowerCase());
}

const ChatItemSimplified = ({ content, role }: { content: string; role: 'user' | 'assistant'; }) => {
    const auth = useAuth();

    return (
        <Box sx={{ 
            display: 'flex', 
            p: 2, 
            bgcolor: role === 'assistant' ? '#004d5612' : '#004d56', 
            borderRadius: 2, 
            my: 1, 
            gap: 2, 
            flexDirection: 'column', 
            alignItems: 'center' 
        }}>
            <Avatar sx={{ bgcolor: role === 'assistant' ? 'white' : 'black', color: 'white' }}>
                {/* Placeholder for the avatar, adjust as needed */}
                {role === 'assistant' ? 'A' : auth?.user?.name[0]}
            </Avatar>
            {isImageUrl(content) ? (
                <img src={content} alt="Generated Content" style={{ maxWidth: '100%', maxHeight: '400px' }} />
            ) : (
                <Typography sx={{ wordBreak: 'break-word' }}>{content}</Typography>
            )}
        </Box>
    );
};

export default ChatItemSimplified;

