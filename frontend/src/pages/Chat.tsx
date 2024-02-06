import { Avatar, Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useAuth } from '../context/Authcontext'
import { red } from '@mui/material/colors'

const Chat = () => {
  const auth = useAuth()
  return (
    <Box sx={{ 
      display: 'flex', 
      flex: 1, 
      width: '100%', 
      height: '100%', 
      mt: 3, 
      gap: 3  }}
      >
        <Box sx={{display: { md: 'flex', xs: 'none', sm: 'none' } }}>
          <Box sx={{
            display: 'flex', 
            width: '100%', 
            height: '60vh', 
            bgcolor: 'rgb(17, 29, 39)',
            borderRadius: 5,
            flexDirection: 'column',
            mx: 3,
            }}
            >
              <Avatar sx={{
                mx: 'auto', 
                my: 2, 
                bgcolor: 'white', 
                color: 'black', 
                fontWeight: 700,
                }}
                >
                  { auth?.user?.name[0] }
                  { auth?.user?.name.split(' ')[1][0] } 
                  </Avatar>
                  <Typography sx={{ mx: 'auto', fontFamily: 'work sans' }}>
                    Hello. You are talking to a ChatBot
                  </Typography>
                  <Typography sx={{ mx: 'auto', fontFamily: 'work sans', my: 4, p: 3 }}>
                    You can ask me questions related to Business, General knowledge, Sports, 
                    Advice and Education among others. However, please avoid sharing any 
                    personal information.
                  </Typography>
                  <Button 
                  sx={{
                    width: '200px', 
                    my: 'auto', 
                    color: 'white', 
                    fontWeight: '700', 
                    borderRadius: 3, 
                    mx: 'auto', 
                    bgcolor: red[300],
                    ':hover': {
                      bgcolor: red.A400
                    }
                    }}
                    >Clear Conversation</Button>
            </Box>
        </Box>
        <Box></Box>
      </Box>
  )
}

export default Chat
