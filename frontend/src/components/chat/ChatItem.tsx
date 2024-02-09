import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import { useAuth } from '../../context/Authcontext'

const ChatItem = ({
    content, 
    role,} : {
        content: string;
        role:'user' | 'AI';
    }) => {
        const auth = useAuth()
  return (
role === 'AI' ? (
        <Box sx={{ 
            display: 'flex', 
            p: 2, 
            bgcolor: '#004d5612', 
            my: 8, 
            gap: 2 }}> 
            <Avatar sx={{ ml: '0' }}>
                <img src='https://media.istockphoto.com/id/1465023127/vector/a-i-conversation-method-illustrations.jpg?s=1024x1024&w=is&k=20&c=SiZRLFq-Fi-Wt0dv56wlc6CiqVboqC_Qooj981rBWbI=' alt='ai' width={'30px'}/>
            </Avatar>
            <Box><Typography fontSize={'20px'}>{content}</Typography></Box>
        </Box>
    ) : (
        <Box sx={{ 
            display: 'flex', 
            p: 2, 
            bgcolor: '#004d56',  
            gap: 2 
            }}>
            <Avatar sx={{ ml: '0', bgcolor: 'black', color: 'white' }}>
                { auth?.user?.name[0] }
                { auth?.user?.name.split(' ')[1][0] } 
            </Avatar>
        <Box><Typography fontSize={'20px'}>{content}</Typography></Box>
        </Box>
    )
  )
}

export default ChatItem
