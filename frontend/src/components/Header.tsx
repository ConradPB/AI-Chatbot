import { AppBar, Toolbar } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    // App bar is a basic nav bar with predefined styles
    <AppBar sx={{ position: 'static', bgcolor: 'transparent',  }}>
      <Toolbar sx={{ display: 'flex' }}>

      </Toolbar>
    </AppBar>
    
  )
}

export default Header

