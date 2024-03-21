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
            gap: 2 }}> 
            <Avatar sx={{ ml: '0', bgcolor: 'white' }}>
                <img src='logo.jpeg' alt='ai' width={'30px'}/>
            </Avatar>
            <Box>
                {!messageBlocks && (
                    <Typography sx={{ fontSize: '20px' }}>{content}</Typography>
                )}
                {
                messageBlocks && 
                messageBlocks.length && 
                messageBlocks.map((block) => (isCodeBlock(block) ? (
                <SyntaxHighlighter 
                style={coldarkDark} 
                language='javascript' >
                    {block}
                </SyntaxHighlighter>
                ):( 
                    <Typography sx={{ fontSize: '20px' }}>{block}</Typography>
                )  
                )
                )}    

            </Box>
        </Box>
    ) : (
        <Box sx={{ 
            display: 'flex', 
            p: 2, 
            bgcolor: '#004d56',  
            gap: 2,
            borderRadius: 2 
            }}>
            <Avatar sx={{ ml: '0', bgcolor: 'black', color: 'white' }}>
                { auth?.user?.name[0] }
                { auth?.user?.name.split(' ')[1][0] } 
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

