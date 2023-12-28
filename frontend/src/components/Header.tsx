import React from 'react'
import { AppBar, Toolbar } from '@mui/material'

import Logo from './shared/Logo'

const Header = () => {
  return (
    // App bar is a basic nav bar with predefined styles
    <AppBar sx={{ position: 'static', bgcolor: 'transparent',  }}>
      <Toolbar sx={{ display: 'flex' }}>
        <Logo />

      </Toolbar>
    </AppBar>
    
  )
}

export default Header

