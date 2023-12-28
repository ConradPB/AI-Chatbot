import React from 'react'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div style={{ 
        display: 'flex', 
        marginRight: 'auto', 
        alignItems: 'center', 
        gap: '15px',
     }}>
        <Link to={'/'}>
            <img 
            src='https://media.istockphoto.com/id/1465023127/vector/a-i-conversation-method-illustrations.jpg?s=1024x1024&w=is&k=20&c=SiZRLFq-Fi-Wt0dv56wlc6CiqVboqC_Qooj981rBWbI=' 
            alt='ai' 
            width={'30px'} 
            height={'30px'} 
            className='Image-inverted' 
            />
        </Link>
        <Typography sx={{ 
              display : { md:'block', sm: 'none', xs: 'none',  }, 
              mr: 'auto', 
              fontWeight: '800', 
              textShadow: '2px, 2x, 20px, #000',
            }}>
              <span style={{ fontSize: '20px' }}>MERN</span>-AI
            </Typography>
    </div>
  )
}

export default Logo
