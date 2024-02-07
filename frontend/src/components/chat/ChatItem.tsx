import { Avatar, Box } from '@mui/material'
import React from 'react'

const ChatItem = ({
    content, 
    role}:{
        content:string,
        role:'user'|'assistant' }) => {
  return (
    role === 'assistant' ? (
        <Box sx={{ display: 'flex', p: 2, bgcolor: '#004d5612', my: 2, gap: 2 }}>
            <Avatar sx={{ ml: '0' }}>
                <img src='ai.jpeg'alt='ai' width={'30px'} />
            </Avatar>
        </Box>
    ) : (
        <></>
    )
  )
}

export default ChatItem
